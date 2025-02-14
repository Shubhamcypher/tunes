"use client";
import React from "react";
import { Meteors } from "@/components/ui/meteors";
import Footer from "@/components/Footer";

function Page() {
  return (
    <div className="min-h-screen bg-black-800 py-6 flex flex-col justify-center sm:py-12 absolute">
       <Meteors number={50} />
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div
          className="absolute inset-0 bg-gradient-to-r from-gray-900 to-purple-700 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"
        ></div>
        <div className="text-white relative px-4 py-10 bg-black shadow-lg sm:rounded-3xl sm:p-20">
          <div className="text-center pb-6">
            <h1 className="text-3xl text-teal-700 font-bold">Contact Us!</h1>
            <p className="text-gray-300">
              Fill up the form below to send us a message.
            </p>
          </div>

          <form>
            <input
              className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Name"
              name="name"
            />
            <input
              className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Email"
              name="email"
            />
            <input
              className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              placeholder="Phone No"
              name="Phone_No"
            />
            <textarea
              className="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Type your message here..."
              name="message"
              style={{ height: '121px' }}
            ></textarea>
            <div className="flex justify-between">
              <input
                className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                value="Send ➤"
              />
              <input
                className="shadow bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="reset"
              />
            </div>
            <a
              href="https://veilmail.io/e/FkKh7o"
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Or click here to reveal our protected email address
            </a>
          </form>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Page;