import React from 'react';

export const Comments = (props) => {
  return (
    <div className="commentsContainer">
      <p>{props.postComments}</p>
    </div>
  );
};
