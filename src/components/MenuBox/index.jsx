import { useDispatch } from "react-redux";
import { logOutUser } from "../../redux/actions/userActions";
import { useNavigate } from "react-router-dom";

const MenuBox = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    dispatch(logOutUser());
    navigate("/login");
  };
  return (
    <div>
      <div className="w-[16rem] h-[1px] bg-blue-100"></div>
      <div className="w-[20rem] h-[90vh] bg-blue-900 text-white rounded-xl flex items-center justify-center">
        <ul className="flex flex-col gap-8 items-center justify-center text-lg">
          <li className="cursor-pointer">Comming Soon...</li>
          <li className="cursor-pointer">Comming Soon...</li>
          <li className="cursor-pointer">Comming Soon...</li>
          <div className="bg-blue-500 h-[1px] w-[20rem]"></div>
          <li className="cursor-pointer">Comming Soon...</li>
          <li className="cursor-pointer">Comming Soon...</li>
          <div className="bg-blue-500 h-[1px] w-[20rem]"></div>
          <li className="cursor-pointer">Comming Soon...</li>
          <li className="cursor-pointer">Comming Soon...</li>
          <li className="cursor-pointer">Comming Soon...</li>
          <div className="bg-blue-500 h-[1px] w-[20rem]"></div>
          <li className="cursor-pointer transition-all  hover:scale-95 hover:text-blue-200" onClick={logoutHandler}>LogOut</li>
        </ul>
      </div>
      <div className="w-[16rem] h-[1px] bg-blue-100"></div>
    </div>
  );
};

export default MenuBox;
