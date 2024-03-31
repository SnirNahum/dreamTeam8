import { ChangeEventHandler, useEffect, useRef, useState } from "react";

type PlayersTableFilterProps = {
  value: string | number;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export default function PlayersTableFilter({
  value,
  onChange,
}: PlayersTableFilterProps) {
  const inputRef = useRef();

  const [searchToggle, setSearchToggle] = useState(false);
  const searchBarContainerEl = document.querySelector(".search-bar-container");

  useEffect(() => {
    setSearchToggle(!false) 
    
    if (searchToggle && !searchBarContainerEl?.classList.contains("active")) {
      inputRef.current?.focus();
    }
  }, [searchToggle]);
  function filterStatus() {
    setSearchToggle(!searchToggle);
    searchBarContainerEl?.classList.toggle("active");

  }

  return (
    <div className="filter-input">
      <div className="search-bar-container active">
        <img
          src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/magnifier-512.png"
          alt="magnifier"
          className="magnifier"
          onClick={filterStatus}
        />
        <input
          type="text"
          className="search-player-input"
          ref={inputRef}
          value={value || ""}
          onChange={onChange}
          placeholder="Search for player"
          disabled={!searchToggle}
        />
      </div>
    </div>
  );
}