import ReactDOM from 'react-dom'
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <div className="font-Roboto bg-white border-t-4 border-yellow-900 h-[40vh] flex flex-col items-center justify-center text-center p-6">
      <h2 className="text-4xl font-bold text-black mb-10">Contact</h2>
      
      {/* First row: Navigation links */}
      <div className="flex space-x-6 mb-6 text-xl">
        <a href="#home" className="text-black hover:text-white ease-in-out delay-100 hover:scale-90 hover:bg-yellow-900 px-3 py-2 rounded-md transition">Home</a>
        <a href="#about" className="text-black hover:text-white ease-in-out delay-100 hover:scale-90 hover:bg-yellow-900 px-3 py-2 rounded-md transition">About</a>
        <a href="#services" className="text-black hover:text-white ease-in-out delay-100 hover:scale-90 hover:bg-yellow-900 px-3 py-2 rounded-md transition">Services</a>
        <a href="#contact" className="text-black hover:text-white ease-in-out delay-100 hover:scale-90  hover:bg-yellow-900 px-3 py-2 rounded-md transition">Contact</a>
      </div>
      
      {/* Second row: Social media icons */}
      <div className="flex space-x-6">
        <a 
          href="https://www.facebook.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white hover:text-gray-300 transition"
        >
          <FontAwesomeIcon icon={faGithub} className='w-10 h-10 text-black' />
        </a>
        <a 
          href="https://www.twitter.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white hover:text-gray-300 transition"
        >
          <FontAwesomeIcon icon={faLinkedin} className='w-10 h-10 text-black' />
        </a>
      </div>
    </div>
  );
}

export default Contact;
