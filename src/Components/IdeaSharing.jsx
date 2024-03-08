import React from 'react';
import '../App.css';

const IdeaSharing = () => {
  return (
    <div>
      <h2>Idea Sharing</h2>
      <p>
        Idea sharing is a collaborative process where individuals or groups exchange thoughts, concepts, and innovative solutions. At our platform, we encourage idea sharing among our community members to foster creativity, spark discussions, and generate novel insights.
      </p>
      <h3>Join the Discussion</h3>
      <p>
        Engage with like-minded individuals and contribute your ideas to our vibrant community.
      </p>
      <br>
      </br>
      <button className="button">Start Sharing</button>
      
      <h3>Featured Ideas</h3>
      <div>
        <img src="https://media.istockphoto.com/id/1080591372/photo/cartoon-man-using-a-big-light-bulb-as-a-loudhailer.jpg?s=612x612&w=0&k=20&c=k8qCXC2ah1BInqohZALGm90S9MiBqh1ag2DWBmNvsGY=" alt="Featured Idea 1" />
        
      </div>

      <br>
      </br>
      <button className="button">Learn More</button>
    </div>
  );
};

export default IdeaSharing;
