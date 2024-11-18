import { Tomorrow } from "next/font/google";
import localFont from "next/font/local";
import Image from "next/image";
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

export default   function Home() {
  return (
 <>
   <div 
    style={{ height: "calc(100vh - 160px)" }}
    className="flex  items-center  main relative    p-4 flex-col">
<Image src={"./nt.svg"} className="absolute left-0 top-24 " width={400} height={400} alt="ntr"  />
<Image src={"./nt2.svg"} className="absolute right-0 top-64 " width={400} height={400} alt="ntr"  />

<h1 className={`  ${ailerons.className} text-center text-[48px] font-semibold mt-4 text-white`}>AI CHAT</h1>  
 
      <p className={`text-center text-white my-4 max-w-[800px]   ${tomorrow.className}  text-xl`}> Data Goblin is an AI chatbot for writing text, stories, messages, or programming code.
      It can also serve as a virtual tutor in almost any subject.</p>
    
    
      <div   className=" bb2 z-40 w-9/12  rounded-3xl  py-14  px-32 flex flex-col  relative ">
      <Image src={"./nn.svg"}  className="absolute right-24 top-12" width={60} alt="nn"  height={60} />
        <h1  className={`text-[32px] text-white     ${tomorrow.className}   mb-8`} >Learn more about AI Chat : </h1>
        <p className={`text-[22px] text-white     ${tomorrow.className}   my-4`}>Welcome to Data Goblin{"'"}s Chatbot!</p>
        <p className={`text-[16px] text-white    ${tomorrow.className}   `}>Hello there! I{"'"}m your friendly Data Goblin, here to guide you through the intricate world of data and AI. Whether you have questions, need support, or just want to chat about the latest tech trends, I{"'"}m available 24/7. Let{"'"}s dive into the fascinating realm of data together. Feel free to ask me anything!</p>
        <p className={`text-[22px] text-white      ${tomorrow.className}   my-4`} >What to Expect :</p>
        <p className={`text-[16px] text-white     ${tomorrow.className}   max-w-[950px]`}> Inspiring Keynotes: Hear from top experts and thought leaders in the field as they share their insights and visions for the future of data and AI.
Interactive Workshops: Engage in hands-on sessions and learn the latest tools and techniques to take your skills to the next level.
Cutting-Edge Exhibitions: Discover the newest technologies and products from leading companies and startups in the data and AI space.
Networking Opportunities: Connect with like-minded individuals, expand your professional network, and explore potential collaborations.
Fun and Innovation: Experience a vibrant atmosphere filled with innovation, creativity, and fun activities that showcase the power of data and AI.</p>

 
      </div>
   </div>

   </>

  
  );
}
