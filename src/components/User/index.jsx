import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { followAccess } from "../../redux/actions/userActions";

const User = ({ userId, name, avatar }) => {
  const [followTrigger, SetFollowTrigger] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { users } = useSelector((state) => state.allUsers);
  const followTriggerHandler = () => {
    SetFollowTrigger(!followTrigger);
    dispatch(followAccess(userId));
  };
  useEffect(() => {
    users.map((eachUser) =>
      eachUser.follower.forEach((preFollowing) => {
        if(preFollowing === user._id){
          SetFollowTrigger(true);
          console.log("if Equal :- ",preFollowing, user._id);
        }else{
          SetFollowTrigger(false);
          console.log("if Not Equal :- ",preFollowing, user._id);
        }
        // preFollowing === user._id
        //   ? SetFollowTrigger(true)
        //   : SetFollowTrigger(false);
      })
    );
  }, []);
  return (
    <div className="p-1 mx-1 flex items-center gap-3 my-1 bg-blue-950 h-12 rounded-md w-[20vw]">
      <Link
        to={`/users/${userId}`}
        className="p-1 mx-1 flex items-center gap-3 my-1 bg-blue-950 w-full h-10 rounded-md"
      >
        <img
          className="transition-all hover:scale-105 duration-300 rounded-full w-8 h-8"
          src={avatar}
          alt={name}
        />
        <div className="text-white transition-all hover:text-gray-300 duration-300">
          {name}
        </div>
      </Link>
      <button
        onClick={followTriggerHandler}
        className="transition-all hover:text-green-400 duration-300 p-3"
      >
        {!followTrigger ? <div>Follow</div> : <div>Following</div>}
      </button>
    </div>
  );
};

export default User;
