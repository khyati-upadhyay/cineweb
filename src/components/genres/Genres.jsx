import React from "react";
import { useSelector } from "react-redux";
import "./style.scss";

const Genres = ({ data }) => {
  const { genres } = useSelector((state) => state.home);
  return (
    <div className="genres">
      {data?.map((genreElement) => {
        if (!genres[genreElement]?.name) return;
        return (
          <div key={genreElement} className="genre">
            {genres[genreElement]?.name}
          </div>
        );
      })}
    </div>
  );
};

export default Genres;
