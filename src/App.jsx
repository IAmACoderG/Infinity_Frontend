import { Header, Footer } from "./components";
import { Outlet } from "react-router-dom";

const App = () => (
  <>
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  </>
);
export default App;
