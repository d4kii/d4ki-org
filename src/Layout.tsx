
import { Outlet } from "react-router-dom";
import "./styles/Layout.css";

function Layout() {
  return (
    <div id="Layout">
      <Outlet />
    </div>
  );
}

export default Layout;
