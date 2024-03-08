import React from 'react';
import '../App.css';

const Experience = () => {
    const experienceData = [
        {
            companyName: "ABC Company",
            position: "AI Engineer",
            duration: "January 2020 - Present",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
            image: "https://img.freepik.com/free-photo/ai-technology-brain-background-digital-transformation-concept_53876-124672.jpg"
        },
        {
            companyName: "XYZ Corporation",
            position: "Machine Learning Specialist",
            duration: "June 2018 - December 2019",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
            image: "https://cdn3.vectorstock.com/i/1000x1000/61/87/machine-learning-background-algorithm-vector-19906187.jpg"
        },
        {
            companyName: "DEF Tech",
            position: "Data Scientist",
            duration: "March 2017 - May 2018",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
            image: "https://static.vecteezy.com/system/resources/thumbnails/005/442/693/small/data-science-analytics-internet-and-technology-concept-concept-photo.jpg"
        },
        {
            companyName: "GHI Innovations",
            position: "Computer Vision Engineer",
            duration: "September 2015 - February 2017",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
            image: "https://daxg39y63pxwu.cloudfront.net/images/blog/computer-vision-engineer/Computer_Vision_Engineer.png"
        },
        {
            companyName: "LMN Solutions",
            position: "Artificial Intelligence Researcher",
            duration: "December 2013 - August 2015",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
            image: "https://w0.peakpx.com/wallpaper/816/524/HD-wallpaper-computer-science-engineering-vision.jpg"
        }
    ];

    return (
        <div className="experience">
            <h1>AI Experience</h1>
            <div className="experience-container">
                {experienceData.map((experience, index) => (
                    <div className="experience-card" key={index}>
                        <img src={experience.image} alt={experience.companyName} />
                        <h2>{experience.companyName}</h2>
                        <p>Position: {experience.position}</p>
                        <p>Duration: {experience.duration}</p>
                        <p>Description: {experience.description}</p>
                        <br>
      </br>
      <button className="button">Learn More</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
