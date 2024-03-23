import { NavLink, useLocation } from "react-router-dom";

export default function AppHeader() {
  const location = useLocation();

  return (
    <header className="app-header full flex">
      <NavLink to="/">
        {/* <h1 className="logo">Dream-team</h1>
         */}
        <img
          className="logo"
          src="https://res.cloudinary.com/datldedpm/image/upload/v1695843176/yxkaoiebiwcvvw54ux6v.png"
          alt=""
        />
      </NavLink>
      <nav className="nav-item">
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
        {/* <AppHeaderResponsive /> */}
        {/* <MobileAppHeader /> */}
      </section>
    </header>
  );
}
