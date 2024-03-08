import React from 'react';
import '../App.css';

const ToolsLan = () => {
  return (
    <div>
      <h1>Tools & Language</h1>
      <p>
        Explore the tools and programming languages we use to build cutting-edge solutions for our clients.
      </p>
      <h2>Popular Tools</h2>
      <ul>
        <li>React.js</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MongoDB</li>
        <li>MySQL</li>
      </ul>
      <h2>Programming Languages</h2>
      <ul>
        <li>JavaScript</li>
        <li>Python</li>
        <li>Java</li>
        <li>C++</li>
        <li>C#</li>
      </ul>
      <h2>Development Environment</h2>
      <p>
        We leverage industry-standard development tools such as Visual Studio Code, Git, and Docker to streamline our
        development process and ensure efficient collaboration.
      </p>
      <button>Learn More</button>
      <h2>Frameworks and Libraries</h2>
      <ul>
        <li>Redux</li>
        <li>Bootstrap</li>
        <li>TensorFlow</li>
        <li>PyTorch</li>
        <li>Spring Framework</li>
      </ul>
      <h2>Version Control</h2>
      <p>
        Git is our version control system of choice, enabling us to track changes, collaborate seamlessly, and maintain
        code integrity throughout the development lifecycle.
      </p>
      <button className="button">Explore Git</button>
      <h2>Continuous Integration and Deployment</h2>
      <p>
        We utilize CI/CD pipelines with tools like Jenkins and Travis CI to automate the testing, building, and deployment
        process, ensuring rapid delivery of high-quality software.
      </p>
      <img src="https://www.shutterstock.com/image-vector/programming-banner-coding-best-languages-260nw-1078387013.jpg" alt="CI/CD Pipeline" />
    </div>
  );
};

export default ToolsLan;
