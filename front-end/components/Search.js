import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const Search = (product) => {
  const [search, setSearch] = useState("");
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  const value = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="search">
      <Image
        src="/svg/iconSearch.svg"
        onClick={() => {
          setVisible(true);
        }}
        width={30}
        height={30}
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
          display: inline-flex;
        }
        .search img {
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
