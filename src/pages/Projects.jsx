import React from "react";
import { ArrowLongRightIcon } from "@heroicons/react/16/solid";
import suitestay from "/images/suitestay.png";
import healthBites from "/images/HealthyBites.png";
import passwordGen from "/images/PasswordGenerator.png";
import codeQuiz from "/images/CodeQuiz.png";

function Projects() {
  return (
    <div className="font-Roboto bg-white border-t-4 border-yellow-900 flex flex-col items-center text-center p-6">
      <h2 className="text-4xl font-bold text-yellow-900 mb-12">My Journey</h2>

      <div className="relative flex flex-col w-full">
        {/* Projects Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10 w-full">
          {/* Project 1 */}
          <a
            href="https://suitestay.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full max-w-sm mx-auto h-80 bg-cover bg-center border-2 rounded-lg ease-in-out delay-100 hover:scale-110 transition"
            style={{
              backgroundImage: `url(${suitestay})`,
            }}
          ></a>

          {/* Project 2 */}
          <a
            href="https://frankrl86.github.io/FEBC_Project01/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full max-w-sm mx-auto h-80 bg-cover bg-center border  rounded-lg ease-in-out delay-100 hover:scale-110 transition"
            style={{
              backgroundImage: `url(${healthBites})`,
            }}
          ></a>

          {/* Project 3 */}
          <a
            href="https://kaleims.github.io/Cool-Password-Generator/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full max-w-sm mx-auto h-80 bg-cover bg-center border-2 rounded-lg ease-in-out delay-100 hover:scale-110 transition"
            style={{
              backgroundImage: `url(${passwordGen})`,
            }}
          ></a>

          {/* Project 4 */}
          <a
            href="https://kaleims.github.io/Code-Quiz/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full max-w-sm mx-auto h-80 bg-cover bg-center border-2 rounded-lg ease-in-out delay-100 hover:scale-110 transition"
            style={{
              backgroundImage: `url(${codeQuiz})`,
            }}
          ></a>
        </div>

        {/* Timeline Icons */}
        <div className="absolute top-1/2 left-0 w-full justify-between -translate-y-1/2 pointer-events-none hidden sm:flex">
          <div className="flex-grow"></div>
          <ArrowLongRightIcon className="text-yellow-900 w-8 h-8" />
          <div className="flex-grow"></div>
          <ArrowLongRightIcon className="text-yellow-900 w-8 h-8" />
          <div className="flex-grow"></div>
          <ArrowLongRightIcon className="text-yellow-900 w-8 h-8" />
          <div className="flex-grow"></div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
