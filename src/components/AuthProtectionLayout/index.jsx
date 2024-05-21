import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader";

const AuthProtectionLayout = ({ children, authentication = true }) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (authentication && isAuthenticated !== authentication) {
      navigate("/login");
    } else if (!authentication && isAuthenticated !== authentication) {
      navigate("/");
    }
    setLoading(false);
  }, [isAuthenticated]);
  return !loading ? (
    <>{children}</>
  ) : (
    <h2 className="flex justify-center items-center">
      {" "}
      <Loader />{" "}
    </h2>
  );
};

export default AuthProtectionLayout;
