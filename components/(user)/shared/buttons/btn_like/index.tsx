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
      onClick={handleLike}  
      aria-label={isLiked ? "Bəyənməni geri götür" : "Bəyən"}
    >
      {isLiked ? (
        <IoMdHeart className="size-6 max-[1000px]:size-4 text-(--logo-color) cursor-pointer transition-colors duration-200" />
      ) : (
        <CiHeart className="size-6 max-[1000px]:size-4 text-(--secondary-color) hover:text-(--logo-color) cursor-pointer transition-colors duration-200" />
      )}
    </button>
  );
};

export default LikeButtonComponent;
