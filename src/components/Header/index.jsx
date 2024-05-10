import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="h-[10vh] text-white w-full bg-gradient-to-r from-blue-800 from-10% via-sky-900 via-30% to-emerald-900 to-90% flex items-center justify-around">
      <h1 className="text-3xl">
        <Link to="/">Infinity</Link>
      </h1>
      <div className="flex items-center justify-center gap-10 text-xl">
        <Link to="/login">Home</Link>
        <Link to="/login">Add</Link>
        <Link to="/login">Search</Link>
        <Link to="/login">Account</Link>
      </div>
    </div>
  );
}
