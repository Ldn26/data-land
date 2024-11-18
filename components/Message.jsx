import React from 'react'
import Image from 'next/image';
import { Tomorrow } from 'next/font/google';
const tomorrow = Tomorrow({
  subsets: ['latin'],
  weight: ['400', '500', '600'], // Select the font weights you want
});
function Message({sender,message}) {

  return (
    <>
      <div
        className={`"${
          sender === 'ai'
            ? "flex items-center  flex-row-reverse"
            : " flex items-center flex-row"
        }  flex items-center   `}
      >
        <div className="flex-col items-center justify-center">
          <Image 
            src={sender == "ai" ? "./neuro.svg" : "./goblin.svg"} 
           // el.sender_profile.image and  el.reciever_profile.image
           width={45} 
           height={45 }
            className="mx-2 rounded-full "
            alt="avatar"
          />
        </div>
        <div
          className={`${
            sender == "ai"
              ? "float-end  bg-black rounded-bl-lg   "
              : "rounded-br-lg  bg-primary  float-start "
          } m-4 leading-[24px] p  text-white flex  flex-col  text-[20px] p-4 rounded-t-lg  `}
        >
      
          <p className={`${sender === "user" ? "text-left " : ""}  mb-2  ${tomorrow.className} max-w-96`}>
            {message}
          </p>
        </div>
      </div>
    </>
  );
}

export default Message