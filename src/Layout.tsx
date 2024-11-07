import "./styles/Layout.css";
import { Link, Outlet } from "react-router-dom";


function Layout() {
  return (
    <>
      <nav>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="blog">Blog</Link>
        </div>
        <div>
          <Link to="projects">Projects</Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Layout;
