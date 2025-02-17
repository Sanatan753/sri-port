import React, { useEffect, useState } from "react";
import "./Stars.css";

const Stars = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      return Array.from({ length: 50 }).map((_, index) => ({
        id: index,
        topOffset: `${Math.random() * 100}vh`,
        tailLength: `${Math.random() * 5 + 5}em`,
        fallDuration: `${Math.random() * 6 + 6}s`,
        fallDelay: `${Math.random() * 10}s`
      }));
    };

    setStars(generateStars());
  }, []);

  return (
    <div className="stars">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            "--top-offset": star.topOffset,
            "--star-tail-length": star.tailLength,
            "--fall-duration": star.fallDuration,
            "--fall-delay": star.fallDelay
          }}
        ></div>
      ))}
    </div>
  );
};

export default Stars;
