import { slide as Menu } from "react-burger-menu";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function AppHeaderResponsive({ isOpen, handleChange }: any) {
  const location = useLocation();

  useEffect(() => {
    if (isOpen) handleChange();
  }, [location]);

  return (
    <Menu bubble right isOpen={isOpen} disableAutoFocus>
      <NavLink to="/" onClick={handleChange}>
        Dashboard
      </NavLink>
      <NavLink to="/planner" onClick={handleChange}>
        Planner
      </NavLink>
      <NavLink to="/players" onClick={handleChange}>
        Players
      </NavLink>
      <NavLink to="/teams" onClick={handleChange}>
        Teams
      </NavLink>
      <NavLink to="/fixtures" onClick={handleChange}>
        Fixtures
      </NavLink>
      <NavLink to="/predictions" onClick={handleChange}>
        Predictions
      </NavLink>
      <NavLink to="/login" onClick={handleChange}>
        Login
      </NavLink>
    </Menu>
  );
}
