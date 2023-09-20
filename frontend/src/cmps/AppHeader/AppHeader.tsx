import { NavLink } from "react-router-dom";
import AppHeaderResponsive from "./AppHeaderResponsive";
import { useState } from "react";

export default function AppHeader() {
  const [isOpen, setIsOpen] = useState(false);

  function handleChange() {
    setIsOpen(!isOpen);
  }
  return (
    <header className="app-header full flex">
      <NavLink to="/">
        <h1 className="logo">Dream-team</h1>
      </NavLink>
      <nav className="app-header-links">
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/planner">Planner</NavLink>
        <NavLink to="/players">Players</NavLink>
        <NavLink to="/teams">Teams</NavLink>
        <NavLink to="/Head2Head">Head2Head</NavLink>
        <NavLink to="/predictions">Predictions</NavLink>
      </nav>
      <section>
        <AppHeaderResponsive isOpen={isOpen} handleChange={handleChange} />
      </section>
    </header>
  );
}
