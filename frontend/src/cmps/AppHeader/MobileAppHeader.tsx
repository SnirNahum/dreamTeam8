import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { FaPeopleGroup, FaPeopleArrows } from "react-icons/fa6";
import { GiShieldEchoes } from "react-icons/gi";

export default function MobileAppHeader() {
  return (
    <div className="mobile">
      <NavLink to="/">
        <AiOutlineHome size="2.4em" />
      </NavLink>
      <NavLink to="/players">
        <FaPeopleGroup size="2.4em" />
      </NavLink>
      <NavLink to="/teams">
        <GiShieldEchoes size="2.4em" />
      </NavLink>
      <NavLink to="/Head2Head">
        <FaPeopleArrows size="2.4em" />
      </NavLink>
    </div>
  );
}
