import React from "react";  
/* profile logo
    username
    photo
    caption
 */ 


export const Post = (props) => {

    return (
        <div className='postContainer'> 
            <div className="postHeaderContainer">
                <div className='profileIcon'>{props.profileIcon}</div>
                <div className='profileUsername'>{props.profileUsername}</div>
            </div>
            
            <img className='postPhoto' src={props.postPhoto} width="270px"/>
            <div className='postComments'>{props.postComments}</div>
        </div>
            
    )

} 