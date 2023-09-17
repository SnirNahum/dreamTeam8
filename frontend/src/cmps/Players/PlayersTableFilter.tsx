import { ChangeEventHandler, useEffect, useRef } from "react";

type PlayersTableFilterProps = {
  value: string | number;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export default function PlayersTableFilter({
  value,
  onChange,
}: PlayersTableFilterProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const magnifierEl = document.querySelector(".magnifier");
    const searchBarContainerEl = document.querySelector(
      ".search-bar-container"
    );

    if (magnifierEl) {
      magnifierEl.addEventListener("click", () => {
        inputRef.current?.focus();

        searchBarContainerEl?.classList.toggle("active");
      });
    }

    return () => {
      if (magnifierEl) {
        magnifierEl.removeEventListener("click", () => {
          searchBarContainerEl?.classList.toggle("active");
        });
      }
    };
  }, []);

  return (
    <div className="filter-input">
      <div className="search-bar-container active">
        <img
          src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/magnifier-512.png"
          alt="magnifier"
          className="magnifier"
        />
        <input
          type="text"
          className="search-player-input"
          ref={inputRef}
          value={value || ""}
          onChange={onChange}
          placeholder="Search for player"
        />
      </div>
    </div>
  );
}
