import React, { useContext } from "react";
import { MainContext } from "../context/Provider";
import { useMoralis } from "react-moralis";
import Link from "next/link";

export default function Landing() {
  const { isAuthenticated } = useMoralis();

  return (
    <div className="flex-col flex-grow flex items-center justify-center">
      {!isAuthenticated ? (
        <p1 className="font-light text-white text-lg font-custom"></p1>
      ) : (
        <div />
      )}
    </div>
  );
}
