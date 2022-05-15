import React from "react";
import Title from "./Header/title";
import WalletAccount from "./Header/WalletAccount";
import BattleNetAccount from "./Header/BattleNetAccount";

export default function Header() {
  return (
    <div className="flex items-center w-full justify-center">
      <div className="fixed top-2 left-5">
        <BattleNetAccount />
      </div>
      <Title />
      <div className="fixed top-2 right-5">{/* <WalletAccount /> */}</div>
    </div>
  );
}
