"use client";

import { useState, useEffect } from "react";

export default function TopBanner() {
  const [images, setImages] = useState<number[]>([]);

  useEffect(() => {
    const newImages = Array.from({ length: 20 }, () => Math.floor(Math.random() * 35) + 1);
    setImages(newImages);
  }, []);

  return (
    <div className="topBanner__background--child images__column">
      {images.map((randomNum, i) => (
        <img
          key={i}
          src={`${process.env.NEXT_PUBLIC_IMAGE_CDN_DOMAIN}/images/top/${randomNum}.jpg`}
          alt={`top${randomNum}`}
          className="column__image"
        />
      ))}
    </div>
  );
}