"use client";

import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";

const LikeButtonComponent = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLike = async () => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsLiked((prev) => !prev);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <button
      type="button"
      disabled={isLoading}
      className="absolute right-2 top-2 disabled:opacity-30"
      onClick={handleLike}
      aria-label={isLiked ? "Bəyənməni geri götür" : "Bəyən"}
    >
      {isLiked ? (
        <IoMdHeart className="size- max-[1000px]:size-6 text-(--logo-color) cursor-pointer transition-colors duration-200" />
      ) : (
        <CiHeart className="size- max-[1000px]:size-6 text-(--secondary-color) hover:text-(--logo-color) cursor-pointer transition-colors duration-200" />
      )}
    </button>
  );
};

export default LikeButtonComponent;
