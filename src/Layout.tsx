import "./styles/Layout.css";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div id="Layout">
        <div className="link">
          <Link to="/">Home</Link>
        </div>
        <div className="link">
          <Link to="blog">Blog</Link>
        </div>
        <div className="link">
          <Link to="projects">Projects</Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Layout;
