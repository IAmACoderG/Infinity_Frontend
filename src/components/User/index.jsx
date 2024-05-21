import { Link } from "react-router-dom";

const User = ({ userId, name, avatar }) => {
  return (
    <Link
      to={`/users/${userId}`}
      className="transition-all hover:translate-x-[-5%] hover:translate-y-[3%] p-1 mx-1 duration-300 flex items-center gap-3 my-1 bg-blue-950 w-full h-10 rounded-md"
    >
      <img className="rounded-full w-8 h-8" src={avatar} alt={name} />
      <div className="text-white">{name}</div>
    </Link>
  );
};

export default User;
