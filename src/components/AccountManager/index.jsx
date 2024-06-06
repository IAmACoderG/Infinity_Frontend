const AccountManager = ({ logout }) => {
  return (
    <div className="bg-blue-900 text-white flex flex-col gap-5 items-center justify-center text-lg h-[60vh] w-[26vw] rounded-xl">
      <button>Comming Soon....</button>
      <button>Comming Soon....</button>
      <div className="bg-blue-500 h-[1px] w-[26vw]"></div>
      <button>Comming Soon....</button>
      <button>Comming Soon....</button>
      <button>Comming Soon....</button>
      <div className="bg-blue-500 h-[1px] w-[26vw]"></div>
      <button>Comming Soon....</button>
      <div className="bg-blue-500 h-[1px] w-[26vw]"></div>
      <button className="transition-all hover:scale-95" onClick={logout}>LogOut</button>
    </div>
  );
};
export default AccountManager;
