import React from "react";
import { FaGooglePlay } from "react-icons/fa6";
import { FaAppStoreIos } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";



const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 text-sm mt-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div>
          <h3 className="font-semibold mb-3">ONLINE SHOPPING</h3>
          <ul className="space-y-2">
            <li className="hover:text-pink-500 cursor-pointer">Men</li>
            <li className="hover:text-pink-500 cursor-pointer">Women</li>
            <li className="hover:text-pink-500 cursor-pointer">Kids</li>
            <li className="hover:text-pink-500 cursor-pointer">Home</li>
            <li className="hover:text-pink-500 cursor-pointer">Beauty</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-semibold mb-3">CUSTOMER POLICIES</h3>
          <ul className="space-y-2">
            <li className="hover:text-pink-500 cursor-pointer">Contact Us</li>
            <li className="hover:text-pink-500 cursor-pointer">FAQ</li>
            <li className="hover:text-pink-500 cursor-pointer">T&C</li>
            <li className="hover:text-pink-500 cursor-pointer">Terms Of Use</li>
            <li className="hover:text-pink-500 cursor-pointer">Track Orders</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-semibold mb-3">EXPERIENCE NEXT CART</h3>

          <div className="flex gap-3 mb-4">
            <div className="bg-black text-white px-3 py-2 rounded text-xs">
              <FaGooglePlay className="inline-block mr-1" />
              Google Play
            </div>
            <div className="bg-black text-white px-3 py-2 rounded text-xs">
              <FaAppStoreIos className="inline-block mr-1" />
              App Store
            </div>
          </div>

          <p className="font-semibold mb-2">KEEP IN TOUCH</p>
          <div className="flex gap-3 text-lg">
            <span className="cursor-pointer hover:text-pink-500"><FaFacebook/></span>
            <span className="cursor-pointer hover:text-pink-500"><FaInstagram/></span>
            <span className="cursor-pointer hover:text-pink-500"><FaTwitter/></span>
            <span className="cursor-pointer hover:text-pink-500"><FaLinkedin/></span>
          </div>
        </div>

        {/* Column 4 */}
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-start gap-3 mb-4">
            <span className="text-xl">✔️</span>
            <p>
              <span className="font-semibold">100% ORIGINAL</span> guarantee{" "}
              <br />
              for all products
            </p>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-xl"><GiReturnArrow/></span>
            <p>
              <span className="font-semibold">Return within 14 days</span>{" "}
              <br />
              of receiving your order
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
