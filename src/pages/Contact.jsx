import ReactDOM from 'react-dom'
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <div className="font-Roboto bg-white border-t-4 border-yellow-900 flex flex-col items-center justify-center text-center p-6">
      <h2 className="text-3xl md:text-4xl font-bold text-yellow-900 mb-6">Contact</h2>
      
      {/* Navigation Links */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-6 text-lg md:text-xl">
        <a href="#home" className="text-black hover:text-white ease-in-out delay-100 hover:scale-90 hover:bg-yellow-100 px-3 py-2 rounded-md transition">Home</a>
        <a href="#about" className="text-black hover:text-white ease-in-out delay-100 hover:scale-90 hover:bg-yellow-100 px-3 py-2 rounded-md transition">About</a>
        <a href="#services" className="text-black hover:text-white ease-in-out delay-100 hover:scale-90 hover:bg-yellow-100 px-3 py-2 rounded-md transition">Services</a>
        <a href="#contact" className="text-black hover:text-white ease-in-out delay-100 hover:scale-90 hover:bg-yellow-100 px-3 py-2 rounded-md transition">Contact</a>
      </div>
      
      {/* Social Media Icons */}
      <div className="flex justify-center gap-4 md:gap-6">
        <a 
          href="https://github.com/KaleimS" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-gray-500 transition"
        >
          <FontAwesomeIcon icon={faGithub} className='w-8 h-8 md:w-10 md:h-10 text-black hover:text-yellow-100' />
        </a>
        <a 
          href="https://www.linkedin.com/in/kaleim-saunders-b648b82a0/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-gray-500 transition"
        >
          <FontAwesomeIcon icon={faLinkedin} className='w-8 h-8 md:w-10 md:h-10 text-black hover:text-yellow-100' />
        </a>
      </div>
    </div>
  );
}

export default Contact;
