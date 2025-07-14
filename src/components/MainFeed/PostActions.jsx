import React, { useState } from 'react';
import { Heart, MessageCircle, Send, Bookmark } from 'lucide-react';

export const PostActions = (props) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };
  return (
    <div className="postActionsContainer">
      <button
        className={`actionButton likeButton ${isLiked ? 'liked' : ''}`}
        onClick={handleLike}
      >
        <Heart />
      </button>

      <button className="actionButton commentButton">
        <MessageCircle />
      </button>
      <button className="actionButton shareButton">
        <Send />
      </button>
      <button className="actionButton bookmarkButton">
        <Bookmark />
      </button>
    </div>
  );
};
