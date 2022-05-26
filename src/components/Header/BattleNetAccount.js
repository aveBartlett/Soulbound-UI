import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import battlenet_logo from "../../../public/battlenet_logo.png";
import Image from "next/image";
import Popup from "reactjs-popup";

export default function BattleNetAccount() {
  const { data: session } = useSession();
  console.log(session);

  if (session) {
    return (
      <Popup
        trigger={
          <div className="flex items-center">
            <div className="flex items-center">
              <Image
                src={battlenet_logo}
                alt="battle.net logo"
                width={40}
                height={40}
              />
            </div>
            <button className="px-2  text-white font-extralight font-custom hover:text-orange-200 text-xl">
              {session.user.name}
            </button>
          </div>
        }
        closeOnEscape
      >
        {(close) => (
          <div className="fixed top-0 bottom-0 left-0 right-0 z-50 backdrop-blur-sm">
            <div
              className="transition-all fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-80 h-32 border-solid  border-2 border-white rounded-lg
          bg-black bg-opacity-50 z-10"
            >
              <div className=" items-stretch flex flex-col">
                <div className="flex justify-center">
                  <h1 className="flex font-normal font-custom text-white text-2xl py-4">
                    logout of battle.net?
                  </h1>
                </div>

                <div className="grid grid-cols-2 py-3">
                  <button
                    onClick={() => close()}
                    className="font-normal font-custom text-white hover:text-orange-200 text-lg"
                  >
                    cancel
                  </button>
                  <button
                    onClick={() => {
                      signOut("battlenet");
                    }}
                    className="font-normal font-custom text-white hover:text-orange-200 text-lg"
                  >
                    confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </Popup>
    );
  }
  return (
    <div className="flex items-center">
      <div className="flex items-center">
        <Image
          src={battlenet_logo}
          alt="battle.net logo"
          width={40}
          height={40}
        />
      </div>
      <button
        className="px-2  text-white font-extralight font-custom hover:text-orange-200 text-xl"
        onClick={() => signIn("battlenet")}
      >
        Sign in
      </button>
    </div>
  );
}
