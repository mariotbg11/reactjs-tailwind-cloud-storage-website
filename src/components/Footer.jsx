import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaGithubSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h4 className="w-full text-3xl font-bold text-[#749DF2ff]">LOGO.</h4>
        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          deserunt illum necessitatibus sed reprehenderit dicta minima atque
          ipsa assumenda totam.
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare size={30} />
          <FaInstagramSquare size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaYoutubeSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Services</li>
            <li className="py-2 text-sm">Plan</li>
            <li className="py-2 text-sm">Newsletter</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="py-2 text-sm">Documentation</li>
            <li className="py-2 text-sm">Status</li>
            <li className="py-2 text-sm">Guides</li>
            <li className="py-2 text-sm">Contact</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Solution</h6>
          <ul>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Subscription</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Promotion</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Help</h6>
          <ul>
            <li className="py-2 text-sm">Privacy</li>
            <li className="py-2 text-sm">Terms</li>
            <li className="py-2 text-sm">Disclaimer</li>
            <li className="py-2 text-sm">FAQ</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
