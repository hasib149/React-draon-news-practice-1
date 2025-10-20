import { format } from "date-fns";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-center flex-col items-center space-y-1.5">
      <img src="/logo.png" alt="" />
      <p className="text-accent">Journalism Without Fear or Favour</p>
      <p className="font-semibold text-accent">
        {format(new Date(), "EEEE, MMMM dd, yyyy")}
      </p>
    </div>
    
  );
};

export default Header;
