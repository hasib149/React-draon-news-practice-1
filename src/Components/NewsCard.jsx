import React from "react";
import { FaEye, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { title, rating, total_view, author, thumbnail_url, details } = news;

  // তারিখ ফরম্যাট করার জন্য
  const publishedDate = new Date(author.published_date).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <div className="card w-full bg-base-100 shadow-xl border">
      {/* Author Info */}
      <div className="flex items-center gap-3 p-4 bg-base-300">
        <img
          src={author.img}
          alt={author.name}
          className="w-10  h-10 rounded-full"
        />
        <div>
          <h2 className="font-semibold">{author.name}</h2>
          <p className="text-sm text-gray-500">{publishedDate}</p>
        </div>
      </div>
      <div className="mt-3.5 mx-5">
        <h2 className="card-title card">{title}</h2>
      </div>

      {/* Thumbnail */}
      <figure className="mx-4 rounded-lg overflow-hidden p-4">
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-56 object-cover rounded-lg"
        />
      </figure>

      {/* Content */}
      <div className="card-body">
        <p className="text-sm text-gray-600">
          {details.length > 200 ? details.slice(0, 200) : details}
          <span className="text-blue-600 cursor-pointer"> Read More</span>
        </p>

        {/* Tags */}

        {/* Footer */}
        <div className="flex justify-between items-center mt-4 border-t pt-3">
          <div className="flex items-center gap-2 text-orange-500">
            <FaStar />
            <span className="font-medium">{rating.number}</span>
            <span className="badge badge-warning badge-sm">{rating.badge}</span>
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
