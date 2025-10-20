import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Find Us on</h2>
      <div>
        <div className="join join-vertical w-full">
          <button className="btn join-item bg-base-100 justify-start">
            <span className="text-blue-600">
              <FaFacebook size={20}></FaFacebook>
            </span>
            Facebook
          </button>
          <button className="btn join-item bg-base-100 justify-start">
            <span className="text-blue-400">
              <FaTwitter size={20}></FaTwitter>
            </span>{" "}
            Twitter
          </button>
          <button className="btn join-item bg-base-100 justify-start">
            <span className="text-red-400">
              <FaInstagram size={20}></FaInstagram>
            </span>{" "}
            Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
