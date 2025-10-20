import React from "react";
import SocialLogin from "../SocialLogin";
import FindUs from "../FindUs";
import Qzone from "../Qzone";
import BgPng from "../BgPng";

const RightAside = () => {
  return (
    <div className="space-y-9">
      <SocialLogin></SocialLogin>
      <FindUs></FindUs>
      <Qzone></Qzone>
      <BgPng></BgPng>
    </div>
  );
};

export default RightAside;
