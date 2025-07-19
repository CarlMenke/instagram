import React, { useState } from 'react';
import { Post } from './Post'
import { User } from 'lucide-react'
const posts = [
    {
        id: 1,
        profileUsername: "DuckLover42",
        postPhoto: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Rubber_duckies_So_many_ducks.jpg",
        postComments: "This is a comment"
    },
    {
        id: 2,
        profileUsername: "NaturePro",
        postPhoto: "https://upload.wikimedia.org/wikipedia/commons/5/50/Vd-Orig.jpg",
        postComments: "Beautiful sunset at the lake today!"
    },
    {
        id: 3,
        profileUsername: "CoffeeAddict",
        postPhoto: "https://upload.wikimedia.org/wikipedia/commons/4/45/A_small_cup_of_coffee.JPG",
        postComments: "Perfect morning brew ☕"
    },
    {
        id: 4,
        profileUsername: "BookwormReader",
        postPhoto: "https://upload.wikimedia.org/wikipedia/commons/1/19/Kiwix_0.9_alpha1_screenshot_en_screenshot_800x600.png",
        postComments: "Just finished an amazing novel, highly recommend!"
    },
    {
        id: 5,
        profileUsername: "FoodieLife",
        postPhoto: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg",
        postComments: "Homemade pasta night was a success 🍝"
    },
    {
        id: 6,
        profileUsername: "TechEnthusiast",
        postPhoto: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Laptop_computer_2.jpg",
        postComments: "New setup is finally complete!"
    },
    {
        id: 7,
        profileUsername: "AdventureSeeker",
        postPhoto: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg",
        postComments: "The view from the top was absolutely worth it"
    },
    {
        id: 8,
        profileUsername: "ArtisticSoul",
        postPhoto: "https://upload.wikimedia.org/wikipedia/commons/c/cd/MoMA_floor_2.jpg",
        postComments: "Spent the afternoon at the museum, so inspiring"
    }
];


export const MainFeed = () => {
    return <div className='feedContainer'>
        {posts.map((post, index) =>
            <div key={index} style={{ scale: 0.5 }}>
                <Post
                    profileIcon={<User />}
                    profileUsername={post.profileUsername}
                    postPhoto={post.postPhoto}
                    postComments={post.postComments}
                />
            </div>)}
    </div>
}