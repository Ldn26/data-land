import { Tomorrow } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";




const tomorrow = Tomorrow({
  subsets: ['latin'],
  weight: ['400', '500', '600'], // Select the font weights you want
});


const ailerons = localFont({
  src: './fonts/Ailerons-Typeface.otf',  // Path to the font in the public folder
  variable: '--font-aileron',            // CSS variable for the font
  weight: '400',                         // Define the font weight (or a range)
  style: 'normal',                       // Define the style (e.g., normal, italic)
});


export default   function Home() {



  return (
 <>
   <div 
    style={{ height: "calc(100vh - 160px)" }}
    className="flex  items-center  main relative   p-4 flex-col">


<Image src={"./nt.svg"} className="absolute left-0 top-24 " width={400} height={400} alt="ntr"  />
<Image src={"./nt2.svg"} className="absolute right-0 top-64 " width={400} height={400} alt="ntr"  />


<h1 className={`  ${ailerons.className} text-center text-[48px] font-semibold mt-4 text-white`}>AI CHAT</h1>  
    <p className={`text-center text-white my-4 max-w-[800px]   ${tomorrow.className}  text-xl`}> Data Goblin is an AI chatbot for writing text, stories, messages, or programming code.
      It can also serve as a virtual tutor in almost any subject.</p>
    
    
      <div   className=" bb z-40 w-9/12 rounded-2xl  p-16   flex flex-col   ">
        <h1 className={`text-[88px] text-white text-center font-bold ${tomorrow.className} ` }  >Welcome to</h1>
        <h1 className="text-[68px]  font-light text-white text-center ">Data gobline</h1>
        <div className=" mt-24">
        <Link href={"./chat"} className="bg-[#FCFCFCCC] flex flex-row  border items-center rounded-md mt-16  px-4 py-2 w-full justify-between"  >
          <h1 className="text-2xl font-semibold"> Chat with AI ! </h1>
   <Image  src={'./arrow.svg'} alt="arrow" width={20} height={20}/>
      </Link>
        </div>
 
      </div>
   </div>

   </>

  
  );
}
