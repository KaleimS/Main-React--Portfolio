import React from "react";

function Projects() {
  return (
    <div className="font-Roboto bg-white border-t-4 border-yellow-900 h-screen flex flex-col items-center justify-center text-center p-6">
      <h2 className="text-4xl font-bold text-black mb-4">Projects</h2>

      {/* Grid Container */}
      <div className="grid grid-cols-4 gap-6">
        {/* Project 1 */}
        <a
          href="https://project1.example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-80 h-80 bg-cover bg-center rounded-lg ease-in-out delay-100 hover:scale-110 transition"
          style={{ backgroundImage: "url('https://via.placeholder.com/150')" }}
        ></a>

        {/* Project 2 */}
        <a
          href="https://project2.example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-80 h-80 bg-cover bg-center rounded-lg ease-in-out delay-100 hover:scale-110 transition"
          style={{ backgroundImage: "url('https://via.placeholder.com/150')" }}
        ></a>

        {/* Project 3 */}
        <a
          href="https://project3.example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-80 h-80 bg-cover bg-center rounded-lg ease-in-out delay-100 hover:scale-110 transition"
          style={{ backgroundImage: "url('https://via.placeholder.com/150')" }}
        ></a>

        {/* Project 4 */}
        <a
          href="https://project4.example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-80 h-80 bg-cover bg-center rounded-lg ease-in-out delay-100 hover:scale-110 transition"
          style={{ backgroundImage: "url('https://via.placeholder.com/150')" }}
        ></a>
        {/* Project 5 */}
        <a
          href="https://project4.example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-80 h-80 bg-cover bg-center rounded-lg ease-in-out delay-100 hover:scale-110 transition"
          style={{ backgroundImage: "url('https://via.placeholder.com/150')" }}
        ></a>
        {/* Project 6 */}
        <a
          href="https://project4.example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-80 h-80 bg-cover bg-center rounded-lg ease-in-out delay-100 hover:scale-110 transition"
          style={{ backgroundImage: "url('https://via.placeholder.com/150')" }}
        ></a>
        {/* Project 7 */}
        <a
          href="https://project4.example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-80 h-80 bg-cover bg-center rounded-lg ease-in-out delay-100 hover:scale-110 transition"
          style={{ backgroundImage: "url('https://via.placeholder.com/150')" }}
        ></a>
        {/* Project 8 */}
        <a
          href="https://project4.example.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-80 h-80 bg-cover bg-center rounded-lg ease-in-out delay-100 hover:scale-110 transition"
          style={{ backgroundImage: "url('https://via.placeholder.com/150')" }}
        ></a>
      </div>
    </div>
  );
}

export default Projects;
