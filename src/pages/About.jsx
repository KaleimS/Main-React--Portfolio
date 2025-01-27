import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

function About() {
  return (
    <div className="font-Roboto h-auto sm:h-[40vh] bg-white flex flex-col items-center justify-center text-center p-4">
      <div className="flex items-center justify-center space-x-4 mb-4">
        <ChevronRightIcon className="w-6 h-6 text-yellow-900 hidden sm:block" />
        <h2 className="text-3xl font-bold text-yellow-900 mb-4">About Me</h2>
        <ChevronLeftIcon className="w-6 h-6 text-yellow-900 hidden sm:block" />
      </div>

      <p className="text-sm sm:text-md md:text-lg font-light text-black px-4 sm:px-16">
        Hi I'm Kaleim, I am a very passionate Web Developer who loves creativity
        and expressing that creativity in the endless void of coding. I love
        exploring new ideas and outcomes to expand my knowledge and better
        myself as a Web Developer, as well as working with people from diverse
        backgrounds to gain a different insight than you normally would. I've
        always been a bit of a nerd, and have spent over 15 years using Desktops
        exploring a'lot of different venues such as Web Development, Gaming,
        Game Development, Music and best of all talking to people from all
        corners of the world. Lastly I'm the type of person who will surpass
        expections with the right guidance and always try and self reflect to
        improve myself as a person.
      </p>
    </div>
  );
}

export default About;
