import React from 'react';
import { Comment } from './Comment';

const Comments = () => {
    return (
        <div>
            <div>
                <h3 style={{"padding" : "5px"}}>
                    3 Comments
                </h3>
            </div>
                <Comment name='Roman Reigns' comment="This is a great Post" imagePath="https://upload.wikimedia.org/wikipedia/commons/9/92/Roman_Reigns_Tribute_to_the_Troops_2016.jpg" postedAt="2 months ago" />

                <Comment name='Myke Tyson' comment="This is a great Post" imagePath="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTb6Q9Wo_ur3RRPEUtzQp104OX3UgloXp-evPFThF6nwS3t_a2x" postedAt="2 months ago" />

                <Comment name='John Cena' comment="This is a great Post" imagePath="https://freepngimg.com/download/john_cena/7-2-john-cena-face-png.png" postedAt="2 months ago" />
        
        </div>
    );
}

export default Comments;