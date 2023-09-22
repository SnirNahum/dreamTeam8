import { NavLink, useLocation } from "react-router-dom";
import AppHeaderResponsive from "./AppHeaderResponsive";

export default function AppHeader() {
  const location = useLocation();

  return (
    <header className="app-header full flex">
      <NavLink to="/">
        <h1 className="logo">Dream-team</h1>
      </NavLink>
      <nav className="app-header-links">
        <NavLink to="/" className={location.pathname === "/" ? "active" : ""}>
          Dashboard
        </NavLink>
        <NavLink
          to="/players"
          className={location.pathname === "/players" ? "active" : ""}
        >
          Players
        </NavLink>
        <NavLink
          to="/teams"
          className={location.pathname === "/teams" ? "active" : ""}
        >
          Teams
        </NavLink>
        <NavLink
          to="/Head2Head"
          className={location.pathname === "/Head2Head" ? "active" : ""}
        >
          Head2Head
        </NavLink>
      </nav>
      <section>
        <AppHeaderResponsive />
      </section>
    </header>
  );
}
