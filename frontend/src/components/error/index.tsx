type Props = {
  info: Error;
  refetch: () => void;
};
const Error = ({ info, refetch }: Props) => {
  return (
    <>
      <div className="mt-20 bg-red-500 text-white rounded-lg p-4 font-semibold text-center">
        <p>Üzgünüz beklenmedik bir sorun oluştu</p>
        <p>{info.message}</p>
      </div>
      <div className="flex justify-center my-10">
        <button
          className="border hover:bg-zinc-200 px-4 py-1 rounded-md"
          onClick={refetch}
        >
          Tekrar Dene
        </button>
      </div>
    </>
  );
};

export default Error;
