import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Landing() {
  const { data: session } = useSession();

  if (session) {
  } else {
    return (
      <div className="flex-col flex-grow flex items-center justify-center">
        <div className="w-1/2 h-1/3 min-w-fit max-w-lg items-center justify-center">
          <div
            className=" flex-col flex-grow flex items-center justify-center w-full h-full 
        border-4 bg-gradient-to-t from-gray-800 to-black border-white rounded-xl"
          >
            <h1 className="font-normal font-custom text-white text-2xl pb-7">
              Mint your WoW character as an NFT.
            </h1>
            <div
              className="flex items-center border-solid  border-2 border-white rounded-lg
           bg-gradient-to-t from-purple-800 to-black  hover:from-purple-500"
            >
              <button
                className="px-5 text-white font-extralight font-custom text-xl"
                onClick={() => signIn("battlenet")}
              >
                Connect your Battle.net account
              </button>
            </div>
            <p className="font-normal font-sansserrif text-white text-sm pt-2">
              We will only use this to access character read data
            </p>
          </div>
        </div>
      </div>
    );
  }
}
