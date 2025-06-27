// src/components/Footer.jsx
import {
  
  FaLinkedinIn,
  FaInstagram,
  FaTelegramPlane,
  FaGithub,
} from "react-icons/fa";

const Footer = ({ dark }) => {
  return (
    <footer
      className={`pt-10 pb-6 text-center mt-16 transition-colors duration-300 ${
        dark ? "bg-[#2c2c2c] text-white" : "bg-[#fdfbd4] text-black"
      }`}
    >
      <h2 className="text-2xl font-bold text-[#a958f4] mb-4 font-serif">DU NOTES</h2>

      <div className="space-x-6 mb-4 font-medium">
        <a
          href="/"
          className={`hover:text-purple-500 ${
            dark ? "hover:text-purple-400" : ""
          }`}
        >
          Home
        </a>
        <a
          href="/about"
          className={`hover:text-purple-500 ${
            dark ? "hover:text-purple-400" : ""
          }`}
        >
          About
        </a>
        <a
          href="/contact"
          className={`hover:text-purple-500 ${
            dark ? "hover:text-purple-400" : ""
          }`}
        >
          Contact
        </a>
      </div>

      <div className="flex justify-center items-center space-x-5 mb-6 text-2xl">
        
        <a href="https://www.linkedin.com/in/ahmad-khan04" className="hover:text-purple-500">
          <FaLinkedinIn />
        </a>
        <a href="https://www.instagram.com/padhiyephysics?igsh=MTV6b3lqNjBtNnd6Zg==" className="hover:text-purple-500">
          <FaInstagram />
        </a>
        <a href="https://t.me/padhiyephysics" className="hover:text-purple-500">
          <FaTelegramPlane />
        </a>
        <a href="https://github.com/Ahmadrazakhan-786" className="hover:text-purple-500">
          <FaGithub />
        </a>
      </div>

      <p className={`text-sm ${dark ? "text-gray-400" : "text-gray-700"}`}>
        © 2025 DU NOTES. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
