import { useParams } from "react-router-dom";
import { getPlace } from "../../api";
import Loader from "../../components/loader";
import Container from "../../components/container";
import Error from "../../components/error";
import { useQuery } from "@tanstack/react-query";
import Buttons from "./Buttons";
import { Place } from "../../types";
import Rating from "../../components/card/Rating";
import Features from "./Features";
import Status from "../../components/card/Status";

const Detail = () => {
  // urlden id çekme
  const { id } = useParams();
  //useQuery ile istek atma
  const { isLoading, error, data, refetch } = useQuery<Place>({
    queryKey: ["place"],
    queryFn: () => getPlace(id as string),
  });

  console.log(data);
  return (
    <Container design="max-w-[700px]">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error refetch={refetch} info={error} />
      ) : (
        data && (
          <div>
            <Buttons />
            <div className="flex justify-between">
              <h1 className="text-3xl font-bold">{data.name}</h1>
              <Rating point={data.rating} expand />
            </div>
            <p className="text-zinc-700">{data.description}</p>
            <img className="rounded-lg" src={data.image_url} alt={data.name} />

            <Features array={data.amenities} />

            <div className="flex justify-between gap-2 items-center mt-5">
              <p className="text-xl font-semibold">
                ${data.price_per_night}
                <span className="text-sm text-gray-600">/gece</span>
              </p>
              <Status data={data.availability} expand />
            </div>
          </div>
        )
      )}
    </Container>
  );
};

export default Detail;
