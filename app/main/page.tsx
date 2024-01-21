"use client";
import { useState } from "react";

export default function RegisterPage() {
  const [tempInputText, setTempInputText] = useState("");

  return (
    <div className="flex flex-col gap-4">
      <div className="h-[223px] w-[700px] bg-[#35373B] p-4 flex flex-col gap-10">
        <text>Create Post</text>
        <input
          value={tempInputText}
          onChange={(e) => setTempInputText(e.target.value)}
          className="text-black"
        ></input>
        <div className="flex w-full flex-row-reverse">
          <button
            className="p-2 bg-blue-400"
            onClick={() => {
              console.log(tempInputText);
              // make post api call here
              setTempInputText("");
            }}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
