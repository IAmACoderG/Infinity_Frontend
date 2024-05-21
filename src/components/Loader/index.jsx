import HashLoader from "react-spinners/HashLoader";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-[100vh] w-[100vw] bg-gradient-to-r from-emerald-950 from-10% via-pink-950 via-30% to-blue-950 to-90%">
      <HashLoader color="#36d7b7" />
    </div>
  );
};

export default Loader;
