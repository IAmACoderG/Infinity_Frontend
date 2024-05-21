import { useEffect } from "react";
import { Header } from "./components";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadUserIfLoggedIn } from "./redux/actions/userActions";

const App = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(loadUserIfLoggedIn());
  }, [dispatch]);

  return (
    <div className = "bg-white">
      {isAuthenticated && <Header />}
      <Outlet />
    </div>
  );
};

export default App;
