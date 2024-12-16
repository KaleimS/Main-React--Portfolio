import React from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "/cv/kaleim-saunders-cv.pdf";
  link.download = "Kaleim_Saunders_CV.pdf";
  link.click();
};

function Hero() {
  return (
    <>
      <div
        className="w-full h-[800px] sm:h-[600x] md:h-[700px] bg-cover bg-top bg-no-repeat border-b-4 border-yellow-900"
        style={{ backgroundImage: "url('/images/Background.jpg')" }}
      >
        <div className="grid grid-cols-12 gap-4 w-full max-w-screen-xl p-6 mx-auto h-full">
          {/* Left Side (60%) */}
          <div className="col-span-12 md:col-span-7 flex flex-col justify-center items-start text-white">
            <h1 className="text-4xl md:text-5xl text-black font-bold mb-4">
              <span className="text-yellow-900 font-light">Hi, I'm</span> Kaleim
              Saunders
            </h1>
            <p className="text-lg md:text-2xl font-light text-black mb-6">
              And I'm a{" "}
              <span className="text-yellow-900 font-bold">
                Junior Web Developer
              </span>
            </p>
            <p className="text-lg md:text-sm font-medium text-black mb-6">
              I'm a super tech-savvy Junior Frontend Web Developer who's been
              using computers for over 15 years. Click{" "}
              <span className="text-yellow-900">
                <a href="">HERE</a>
              </span>{" "}
              to view my skills. My problem-solving skills are top-notch, which
              is why my friends and family always come to me for tech support.
              If you're looking for someone who can work hard and exceed your
              expectations, then I'm your guy.
            </p>
            <div className="flex w-full justify-between items-center space-x-4">
              <div className="flex space-x-4">
                <button className="transition ease-in-out delay-100 hover:scale-90 bg-black hover:bg-yellow-900 text-yellow-900 hover:text-white font-semibold py-2 px-4 rounded">
                  Hire me
                </button>
                <button className="transition ease-in-out delay-100 hover:scale-90 bg-black hover:bg-yellow-900 text-yellow-900 hover:text-white font-semibold py-2 px-4 rounded">
                  <a href="/projects">Projects</a>
                </button>
              </div>
              <button
                onClick={handleDownload}
                className="transition ease-in-out delay-100 hover:scale-110 bg-black hover:bg-yellow-900 text-yellow-900 hover:text-white font-semibold py-2 px-4 rounded flex items-center space-x-2"
              >
                <span>Download CV</span>
                <ArrowDownTrayIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Side (40%) */}
          <div className="col-span-12 md:col-span-5 flex justify-center items-center">
            <img
              src="/images/photo.png"
              alt="Hero Illustration"
              className="w-48 sm:w-64 md:w-80 lg:w-96 h-auto max-w-full rounded-full border-8 border-amber-500 transform transition-transform duration-300 ease-in-out sm:scale-90 md:scale-100"
            />
          </div>
        </div>
      </div>
    </>

    // Right Side (40% Width)
  );
}

export default Hero;
