import Link from "next/link"
import { Spotlight } from './Spotlight'
import { Button } from "./moving-border";

function HeroSection() {
  return (
    <div
    className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto p-10 md:p-0"
    >
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="blue"
        />
        <div className="p-4 relative w-full text-center z-10">
            <h1
            className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400  "
            >Master the art of music</h1>
            <p
            className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"
            >We offers a wide range of courses in various instruments, vocal training, and music theory. Students benefit from the expertise of experienced instructors who provide personalized guidance and mentorship. The academy often hosts recitals and performances, giving students the opportunity to showcase their progress. 
            </p>
           <div className="mt-4">
            <Link href={"/courses"}>
              <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-gray-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
              >Explore Courses</Button>
            </Link>
           </div>
        </div>
    </div>
  )
}

export default HeroSection