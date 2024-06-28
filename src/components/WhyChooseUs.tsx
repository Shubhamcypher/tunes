"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
    {
      title: "Expert Instructors",
        description: "Our instructors are industry professionals with years of experience in their respective fields, providing top-notch education and mentorship.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Expert Instructors
        </div>
      ),
    },
    {
      title: "Personalized Learning",
      description:
        "We tailor our teaching methods to suit each student's unique learning style and pace, ensuring optimal progress and understanding.",
      content: (
          <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Personalized learning
        </div>
      ),
    },
    {
      title: "State-of-the-Art Facilities",
      description:
        "Our music school is equipped with modern instruments and facilities, creating the perfect environment for learning and creativity.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          State-of-the-Art Facilities
        </div>
      ),
    },
    {
      title: "Comprehensive Curriculum",
      description:
        "From classical to contemporary music, our diverse curriculum covers various genres and techniques, catering to all interests and skill levels.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
           Comprehensive Curriculum
        </div>
      ),
    },
    
  ];

function WhyChooseUs() {
    return (
        <div className="p-10">
          <StickyScroll content={content} />
        </div>
    )
}

export default WhyChooseUs