import { Link } from "react-router-dom";
import {
  Home,
  HomeOutlined,
  AddCircle,
  AddCircleOutline,
  SearchOffOutlined,
  Search,
  Menu,
  MenuBook,
} from "@mui/icons-material";
import { Button, Avatar, Popover } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import MenuBox from "../MenuBox";

export default function Header() {
  const [tab, setTab] = useState(window.location.pathname);
  const [menuToggle, setMenuToggle] = useState(false);
  const { user } = useSelector((state) => state.user);

  const menuHandler = () => {
    setMenuToggle(!menuToggle);
  };
  return (
    <div className="h-[100vh] w-[16rem] fixed top-0 left-0 text-white bg-blue-950 flex flex-col items-center shadow-md gap-6">
      <h1 className="text-4xl my-5 pt-5 w-[12vw] italic">
        <Link to="/">Infinity</Link>
      </h1>
      <div className="flex flex-col gap-3 text-xl">
        <Link
          to="/"
          className="hover:bg-blue-900 w-[15vw] px-3 py-1 rounded-md transition-all hover:scale-90 duration-300"
          onClick={() => setTab("/")}
        >
          {tab === "/" ? <Home /> : <HomeOutlined />}
          <Button style={{ color: "white" }}>Home</Button>
        </Link>
        <Link
          to="/new-post"
          className="hover:bg-blue-900 w-[15vw] px-3 py-1 rounded-md transition-all hover:scale-90 duration-300"
          onClick={() => setTab("/new-post")}
        >
          {tab === "/new-post" ? <AddCircle /> : <AddCircleOutline />}
          <Button style={{ color: "white" }}>Create</Button>
        </Link>
        <Link
          to="/search"
          className="hover:bg-blue-900 w-[15vw] px-3 py-1 rounded-md transition-all hover:scale-90 duration-300"
          onClick={() => setTab("/search")}
        >
          {tab === "/search" ? <Search /> : <SearchOffOutlined />}
          <Button style={{ color: "white" }}>Search</Button>
        </Link>
        <Link
          to="/my-profile"
          className="transition-all duration-300 flex items-center hover:bg-blue-900 w-[15vw] px-3 py-1 rounded-md hover:scale-90"
        >
          <Avatar
            src={user.avatar}
            alt="User"
            sx={{
              height: "2vmax",
              width: "2vmax",
            }}
          />
          <Button style={{ color: "white" }}>{user.fullName}</Button>
        </Link>
        <div
          onClick={menuHandler}
          className="transition-all duration-300 flex items-center hover:bg-blue-900 w-[15vw] px-3 py-1 rounded-md absolute bottom-3"
        >
          {!menuToggle ? <Menu /> : <MenuBook />}
          <Button style={{ color: "white" }}>Menu</Button>
        </div>
      </div>
      <Popover
        open={menuToggle}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        onClose={() => setMenuToggle(!menuToggle)}
      >
        <MenuBox />
      </Popover>
    </div>
  );
}
