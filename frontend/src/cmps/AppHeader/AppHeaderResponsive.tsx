import { useEffect, useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";

export default function AppHeaderResponsive() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("disable-scroll");
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.body.classList.remove("disable-scroll");
      document.removeEventListener("click", handleOutsideClick);
    }
    function handleOutsideClick(e) {
      const menu = document.querySelector(".bm-menu");
      const itemList = document.querySelector(".bm-item-list");
      const closeButton = document.querySelector(".bm-cross-button");

      if (
        !menu.contains(e.target) &&
        !itemList.contains(e.target) &&
        !closeButton.contains(e.target)
      ) {
        closeMenu();
      }
    }
    return () => {
      document.body.classList.remove("disable-scroll");
    };
  }, [isOpen]);

  function closeMenu() {
    setIsOpen(false);
  }

  function handleMenuStateChange(state) {
    setIsOpen(state.isOpen);
  }

  return (
    <Menu
      right
      isOpen={isOpen}
      disableAutoFocus
      onStateChange={handleMenuStateChange}
    >
      <NavLink to="/" onClick={closeMenu}>
        Dashboard
      </NavLink>
      <NavLink to="/players" onClick={closeMenu}>
        Players
      </NavLink>
      <NavLink to="/teams" onClick={closeMenu}>
        Teams
      </NavLink>
      <NavLink to="/Head2Head" onClick={closeMenu}>
        Head2Head
      </NavLink>
      {/* <DownloadApp /> */}
    </Menu>
  );
}
