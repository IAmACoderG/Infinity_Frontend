const Search = () => {
  return (
    <div className="flex pt-20 pl-20 justify-center bg-gradient-to-r from-emerald-950 from-10% via-pink-950 via-30% to-blue-950 to-90% h-[100vh] ">
      <input
        className="border-2 border-pink-700 w-[50%] h-[7vh] rounded-full outline-none px-3"
        type="text"
        placeholder="Search The People"
      />
    </div>
  );
};

export default Search;
