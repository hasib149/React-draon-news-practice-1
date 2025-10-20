import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../Components/NewsCard";

const CategoryNews = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [categoryNews, setCategoriNews] = useState([]);
  useEffect(() => {
    if (id == "0") {
      setCategoriNews(data);
      return;
    } else if (id == "1") {
      const filterNews = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setCategoriNews(filterNews);
    } else {
      const filterNews = data.filter((news) => news.category_id == id);
      setCategoriNews(filterNews);
    }
  }, [data, id]);
  return (
    <div>
      <h2>{categoryNews.length} news found</h2>
      <div className="grid grid-cols-1 gap-5">
        {categoryNews.map((news) => (
          <NewsCard key={news.id} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
