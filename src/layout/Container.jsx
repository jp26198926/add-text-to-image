import { Outlet } from "react-router-dom";
import Header from "../component/Header";

const Container = () => {
  return (
    <div className="mx-auto px-4">
      <Header />

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Container;
