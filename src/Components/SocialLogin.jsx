import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-bold text-xl">Login with</h2>
      <div className="grid grid-cols-1 pt-5 space-y-2">
        <button className="btn btn-outline btn-secondary w-full"><FcGoogle size={23}/> Login with Google</button>
        <button className="btn btn-outline btn-primary w-full"> <FaGithub size={23}/>Login with Github</button>
      </div>
    </div>
  );
};

export default SocialLogin;
