'use client'
import Link from 'next/link'
import courseData from '@/data/music_courses.json'
import { BackgroundGradient } from './ui/background-gradient'

interface Course{
          id: string,
          title: string,
          description:string,
          slug: string,
          price: number,
          instructor: string,
          isFeatured: boolean,
          image: string,
}

function FeaturedCourses() {
  const featuredCourses =courseData.courses.filter((course: Course)=>course.isFeatured)
  return (
    <div className='py-12 bg-gray-900'>
      <div className='text-center'>
        <h2 className='text-base font-semibold text-teal-600 tracking-wide uppercase'>FEATURED COURSES</h2>
        <p className='mt-2 text-4xl leading-8 font-extrabold text-blue-400 sm:text-5xl '>Learn with the best</p>
      </div>


      <div className='mt-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
          {featuredCourses.map((course:Course)=>(
            <div key={course.id} className='flex justify-center lg:mx-5 '>
                <BackgroundGradient className='flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm'>
                <img src={course.image} alt={course.title} className='w-full h-38 object-cover' />
                  <div className='p-2 sm:p-4 flex flex-col items-center text-center flex-grow'>
                  <h3 className='text-xl font-bold text-gray-900 dark:text-white'>{course.title}</h3>
                  <p className='mt-2 text-gray-600 dark:text-gray-300'>{course.description}</p>
                  <p className='mt-4 text-gray-900 dark:text-white font-bold'>${course.price}</p>
                  <Link 
                  className='mt-4 text-blue-600 hover:text-blue-800'
                  href={`/courses/${course.slug}`}> 
                      <button className="p-[3px] relative rounded-[6px] ">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-orange-500 rounded-[6px]" />
                        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                          Checkout
                        </div>
                      </button>
                   </Link>
                  </div>
                </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>



      <div className='mt-20 text-center'>
        <Link href={"/courses"}>
          <button className="shadow-[inset_0_0_0_2px_#616467] text-black p-4 rounded-full bg-transparent hover:bg-blue-500 hover:text-white dark:text-neutral-200 transition duration-400">
            Explore Courses
          </button>
        </Link>
      </div>
    </div>
  )
}

export default FeaturedCourses

