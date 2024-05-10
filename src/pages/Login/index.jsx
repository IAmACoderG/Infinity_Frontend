import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-[70vh] bg-gradient-to-r from-pink-950 to to-blue-950 flex items-center justify-center">
      <div className="flex items-center flex-col gap-y-4 min-h-[50vh] min-w-[60vw] border-2 border-white rounded-md">
        <h3 className="py-5 text-3xl text-white">Login</h3>
        <div className="flex flex-col w-[50vw]">
          <input
            className="p-2 border-2 border-purple-950 outline-none"
            type="text"
            placeholder="UserName Or Email"
          />
          <input
            className="p-2 border-2 border-purple-950 outline-none"
            type="password"
            placeholder="Password"
          />
          <button className="p-2 border-2 border-purple-950 bg-white">
            Submit
          </button>
        </div>
        <div className="text-white">
          if You have no Account Please{" "}
          <span className="text-green-500 hover:text-green-600 hover:underline cursor-pointer">
            <Link to="/signup">Create Account</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
