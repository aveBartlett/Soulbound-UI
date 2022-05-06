import React from "react";
import Title from "./Header/title";
import Account from "./Header/Account";

export default function Header() {
  return (
    <div className="flex items-center w-full justify-center">
      <Title />
      <div className="fixed top-0 right-5">
        <Account />
      </div>
    </div>
  );
}
