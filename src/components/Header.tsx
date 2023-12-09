"use client";

import { FC } from "react";

interface HeaderProps {
  username: string;
}

const Header: FC<HeaderProps> = ({ username }) => {
  return (
    <header>
      hello {username}
      <button
        style={{ marginLeft: "10px" }}
        onClick={() => console.log(username)}
      >
        log username
      </button>
    </header>
  );
};

export default Header;
