import { useQuery } from "@tanstack/react-query";
import { sortOptions } from "../../constants";
import { getPlaces } from "../../api";
import { Place } from "../../types";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  const [params, setParams] = useSearchParams();
  // api'dan otel verilerini al
  const { isPending, data } = useQuery<Place[]>({
    queryKey: ["places"],
    queryFn: () => getPlaces(),
  });
  // otellerin lokasyonundan oluşan benzersiz elemana sahip bir dizi oluşturacağız
  const locations = [...new Set(data?.map((item) => item.location))];
  // seçili değeri url'e parametre olarak ekleme
  const handleChange = (name: string, value: string) => {
    params.set(name, value);
    // url aktar
    setParams(params);
  };

  return (
    <form className="lg:mt-28 flex flex-col gap-4 lg:gap-20">
      <div className="field">
        <label htmlFor="">Nereye ? </label>
        {!isPending && (
          <select
            defaultValue={params.get("location") || ""}
            className="input"
            onChange={(e) => handleChange("location", e.target.value)}
          >
            <option value="">Seçiniz</option>
            {locations?.map((i, key) => (
              <option key={key}>{i}</option>
            ))}
          </select>
        )}
      </div>

      <div className="field">
        <label htmlFor="">Konaklama yerine göre ara</label>
        <input
          defaultValue={params.get("title") || ""}
          onChange={(e) => handleChange("title", e.target.value)}
          type="text"
          className="input"
          placeholder="örn:Seaside Villa"
        />
      </div>

      <div className="field">
        <label htmlFor="">Sıralama Ölçütü ? </label>
        <select
          defaultValue={params.get("order") || ""}
          className="input"
          onChange={(e) => handleChange("order", e.target.value)}
        >
          {sortOptions.map((i, key) => (
            <option key={key} value={i.value}>
              {i.label}
            </option>
          ))}
        </select>
      </div>
      <div className="flex justify-end">
        <button
          type="reset"
          className="bg-blue-500 py-1 px-4 text-white rounded-md w-fit"
          onClick={() => setParams({})}
        >
          Filtreleri temizle
        </button>
      </div>
    </form>
  );
};

export default Filter;
