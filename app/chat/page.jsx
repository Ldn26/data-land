"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Message from "@/components/Message";
import localFont from "next/font/local";
import { Tomorrow } from "next/font/google";

const tomorrow = Tomorrow({
  subsets: ['latin'],
  weight: ['400', '500', '600'], // Select the font weights you want
});
const ailerons = localFont({
  src: '../fonts/Ailerons-Typeface.otf',  // Path to the font in the public folder
  variable: '--font-aileron',            // CSS variable for the font
  weight: '400',                         // Define the font weight (or a range)
  style: 'normal',                       // Define the style (e.g., normal, italic)
});
function Page() {
  const [textInput, setTextInput] = useState("");
  const [messages, setMessages] = useState([
    { id: "1", sender: "user", message: "hello" },
    { id: "2", sender: "ai", message: "Hey there!" },
  ]);
  const [loading, setLoading] = useState(false); // Loading state for AI response
  const scrollContainerRef = useRef(null); // Reference to the scrollable container

  const handleSendMessage = () => {
    if (textInput.trim() === "") return; // Prevent sending empty messages

    // Add user's message
    setMessages((prev) => [
      ...prev,
      { id: `${prev.length + 1}`, sender: "user", message: textInput },
    ]);

    setTextInput(""); // Clear the input field

    // Show loading indicator for AI response
    setLoading(true);

    // Add AI's response after a short delay
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: `${prev.length + 1}`, sender: "ai", message: "This is an AI response." },
      ]);
      setLoading(false); // Remove loading indicator
    }, 2000); // Delay to simulate response time
  };





  useEffect(() => {
    // Scroll to the bottom of the container whenever messages or loading changes
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  }, [messages, loading]); // Trigger scroll when messages or loading changes
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent default behavior (line break)
      handleSendMessage(); // Call the send message function
    }
  };
  return (
    <div
      style={{ height: "calc(100vh - 160px)" }}
      className="flex items-center main relative p-4 flex-col"
    >
      <Image src={"./nt.svg"} className="absolute left-0 top-24" width={400} height={400} alt="ntr" />
      <Image src={"./nt2.svg"} className="absolute right-0 top-64" width={400} height={400} alt="ntr" />

      <h1 className={`  ${ailerons.className} text-center text-[48px] font-semibold mt-4 text-white`}>AI CHAT</h1>
      <p className={`text-center text-white my-4 text-[19px]  min-w-96  ${tomorrow.className}`}>
        Data Goblin is an AI chatbot for writing text, stories, messages, or programming code. <br />
        It can also serve as a virtual tutor in almost any subject.
      </p>

      {/* Scrollable container */}
      <div
        style={{ scrollBehavior: "smooth" }} 
        ref={scrollContainerRef} // Attach the ref to the scrollable container
        className="bb relative z-40 w-9/12 rounded-2xl overflow-y-scroll p-16 flex flex-col"
      >
        {messages.map((msg, index) => (
          <Message 
            key={index}
            user_id={msg.id}
            reciver={msg.sender === "ai"}
            sender={msg.sender}
            message={msg.message}
          />
        ))}

        {loading && (
          <Message
            user_id="loading"
            reciver={true}
            sender="ai"
            message="Typing..."
          />
        )}


<div className="sticky bottom-4 w- mt-24">
        <div className="bg-white flex flex-row items-center rounded-xl py-4 w-full justify-between">
          <input
            placeholder="Chat with AI!"
            value={textInput}
            onKeyDown={handleKeyDown}
            onChange={(e) => setTextInput(e.target.value)}
            className={` ${tomorrow.className}  w-11/12 placeholder:text-xl text-xl pl-2 focus:outline-none`}
          />
          <button className="w-1/12" onClick={handleSendMessage}>
            <Image
              src={"./arrow.svg"}
              alt="arrow"
              width={20}
              height={20}
              className="hover:w-6 transition-all duration-300"
            />
          </button>
        </div>
      </div>
      </div>

      {/* Text Input */}
 
    </div>
  );
}

export default Page;
