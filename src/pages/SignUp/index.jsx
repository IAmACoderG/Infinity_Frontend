import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-[70vh] bg-gradient-to-r from-pink-950 to to-blue-950 flex items-center justify-center">
      <div className="flex items-center flex-col gap-y-4 min-h-[50vh] min-w-[60vw] border-2 border-white rounded-md">
        <h3 className="py-5 text-3xl text-white">Create Account</h3>
        <div className="flex flex-col w-[50vw]">
          <input
            className="p-2 border-2 border-purple-950 outline-none"
            type="text"
            placeholder="fullName"
          />
          <input
            className="p-2 border-2 border-purple-950 outline-none"
            type="text"
            placeholder="Username"
          />
          <input
            className="p-2 border-2 border-purple-950 outline-none"
            type="email"
            placeholder="Email"
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
        <div className="text-white py-5">
          if You have Already Account Please{" "}
          <span className="text-green-500 hover:text-green-600 hover:underline cursor-pointer">
            <Link to="/login">Log In</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
