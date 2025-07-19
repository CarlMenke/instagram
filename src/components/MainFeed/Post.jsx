import React from 'react';
import { Comments } from './Comments';
import { PostActions } from './PostActions';
/* profile logo
    username
    photo
    caption
 */

export const Post = (props) => {
  return (
    <div className="postContainer">
      <div className="postHeaderContainer">
        <div className="profileIcon">{props.profileIcon}</div>
        <div className="profileUsername">{props.profileUsername}</div>
      </div>

      <img className="postPhoto" src={props.postPhoto} width="270px" />

      <PostActions />

      <Comments postComments={props.postComments} />
    </div>
  );
};
