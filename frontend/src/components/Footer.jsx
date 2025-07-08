import React from 'react'
import { FaCopyright,FaGithub } from "react-icons/fa6";
import { RxTwitterLogo } from "react-icons/rx";
import { CiLinkedin } from "react-icons/ci";


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-evenly gap-8 text-center md:text-left">
        <div>
          <h1 className="text-lg font-semibold mb-4">Products</h1>
          <ul className="space-y-2">
            <li className="hover:text-blue-400 cursor-pointer">Flutter</li>
            <li className="hover:text-blue-400 cursor-pointer">React</li>
            <li className="hover:text-blue-400 cursor-pointer">Android</li>
            <li className="hover:text-blue-400 cursor-pointer">iOS</li>
          </ul>
        </div>
        <div>
          <h1 className="text-lg font-semibold mb-4">Design to code</h1>
          <ul className="space-y-2">
            <li className="hover:text-blue-400 cursor-pointer">Flutter</li>
            <li className="hover:text-blue-400 cursor-pointer">React</li>
            <li className="hover:text-blue-400 cursor-pointer">Android</li>
            <li className="hover:text-blue-400 cursor-pointer">iOS</li>
          </ul>
        </div>
        <div>
          <h1 className="text-lg font-semibold mb-4">Comparison</h1>
          <ul className="space-y-2">
            <li className="hover:text-blue-400 cursor-pointer">Flutter</li>
            <li className="hover:text-blue-400 cursor-pointer">React</li>
            <li className="hover:text-blue-400 cursor-pointer">Android</li>
            <li className="hover:text-blue-400 cursor-pointer">iOS</li>
          </ul>
        </div>
        <div>
          <h1 className="text-lg font-semibold mb-4">Company</h1>
          <ul className="space-y-2">
            <li className="hover:text-blue-400 cursor-pointer">Flutter</li>
            <li className="hover:text-blue-400 cursor-pointer">React</li>
            <li className="hover:text-blue-400 cursor-pointer">Android</li>
            <li className="hover:text-blue-400 cursor-pointer">iOS</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-4 text-center md:text-left">
        <div>
          <div className="font-semibold text-xl md:ml-10">
            Shaswat<span className="text-blue-500">Blog</span>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <FaCopyright />
          <span className="ml-1">Shaswat Gautam PVT LTD All rights reserved</span>
        </div>
        <div>
          <ul className="flex justify-center gap-4 md:mr-10">
            <li><FaGithub /></li>
            <li><RxTwitterLogo /></li>
            <li><CiLinkedin /></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
