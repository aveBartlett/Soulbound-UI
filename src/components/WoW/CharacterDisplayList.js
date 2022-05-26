import React from "react";
import { getToken } from "next-auth/jwt";

export default function CharacterDisplayList() {
  const session = getToken();
  console.log(session);

  return (
    <div className="flex-col flex-grow flex items-center justify-center">
      <div className="w-1/2 h-1/3 min-w-fit max-w-lg items-center justify-center">
        <div
          className=" flex-col flex-grow flex items-center justify-center w-full h-full 
        border-4 bg-gradient-to-t from-gray-800 to-black border-white rounded-xl"
        >
          <div>CharacterDisplayList</div>
        </div>
      </div>
    </div>
  );
}
