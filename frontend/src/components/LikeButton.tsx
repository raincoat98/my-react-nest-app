import React, { useState } from "react";
import api from "../api/axios";

interface LikeButtonProps {
  onLike: () => Promise<void>;
}

const LikeButton: React.FC<LikeButtonProps> = ({ onLike }) => {
  const [liked, setLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLikeClick = async () => {
    if (isLoading) return; // 이미 처리 중이면 중복 실행 방지

    try {
      setIsLoading(true);
      const response = await api.post("/likes", {
        liked: true,
      });

      console.log(response);

      if (response.status === 201) {
        setLiked(true);
        await onLike(); // 좋아요 목록 새로고침
      }
    } catch (error) {
      console.error("Error saving like:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleLikeClick}
      disabled={isLoading}
      style={{ opacity: isLoading ? 0.5 : 1 }}
    >
      {isLoading ? "처리중..." : liked ? "Liked" : "Like"}
    </button>
  );
};

export default LikeButton;
