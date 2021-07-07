import React, { useState } from "react";
import { useRouter } from "next/router";

const Search = (product) => {
  const [search, setSearch] = useState("");
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  const value = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="search">
      <img
        src="/svg/iconSearch.svg"
        onClick={() => {
          setVisible(true);
        }}
      />
      <input
        className={"input-search " + (visible ? "visible" : "hidden")}
        type="text"
        value={search}
        onKeyUp={(event) => {
          console.log(event);
          if (event.keyCode === 13) {
            router.push("/recherche/" + search);
          }
        }}
        onChange={value}
        onBlur={() => !search && setVisible(false)}
      />

      <style jsx>{`
        .search {
          display: flex;
          align-self: center;
        }
        .search {
          width: 2rem;
        }
        .input-search {
          transition: all 0.3s;
        }
        .input-search.visible {
          width: 8rem;
          margin-left: 1rem;
        }
        .input-search.hidden {
          width: 0;
          padding: 0;
        }
      `}</style>
    </div>
  );
};

export default Search;
