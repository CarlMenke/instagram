import React from 'react';
import './UserProfile.css';

export const UserProfile = (props) => {
  return (
    <div className="userProfileContainer">
      {/* This div holds the entire profile section */}

      <div className="profileImage">
        <img
          src={props.profileImage || 'default-avatar.png'}
          alt={`${props.username}'s profile`}
          className="profilePicture"
        />
      </div>
      <div className="profileInfo">
        {/* This div holds the username and bio */}
        <h2 className="username">{props.username}</h2>
        <p className="bio">{props.bio}</p>
        <div className="profileStats">
          <div className="statItem">
            <span className="statNumber">{props.postsCount || 0}</span>
            <span className="statLabel">posts</span>
          </div>
          <div className="statItem">
            <span className="statNumber">{props.followersCount || 0}</span>
            <span className="statLabel">followers</span>
          </div>
          <div className="statItem">
            <span className="statNumber">{props.followingCount || 0}</span>
            <span className="statLabel">following</span>
          </div>
        </div>
        <div className="profileActions">
          <button className="followButton">
            {props.isFollowing ? 'Unfollow' : 'Follow'}
          </button>
          <button className="messageButton">Message</button>
        </div>
      </div>
    </div>
  );
};
