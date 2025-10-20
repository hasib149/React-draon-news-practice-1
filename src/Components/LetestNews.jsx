import React from "react";
import Marquee from "react-fast-marquee";

const LetestNews = () => {
  return (
    <div className="flex gap-6 bg-base-300 p-3">
      <h2 className="btn btn-secondary px-8">Latest</h2>
      <Marquee pauseOnHover={true} speed={60}>
        <p className="font-semibold">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
          consectetur exercitationem inventore iusto libero sunt dicta
          necessitatibus officia. Sequi a quas dolore aut facilis cumque eveniet
          perferendis laudantium officiis voluptatem.
        </p>
      </Marquee>
    </div>
  );
};

export default LetestNews;
