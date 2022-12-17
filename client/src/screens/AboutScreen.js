import "./AboutScreen.css";
import React from 'react';


const AboutScreen = () => {
    return (
      <div className="aboutscreen">
        <h1 className="about-screen-title">About us</h1>
        <div className="about-screen-content">
          <p><br/>NFT MARKET:</p>
          <p>Custom Website Development From Scratch. Build and run your ecommerce website with us:</p>
          <p><br/><a href="https://www.linkedin.com/in/ranjithrayulu/"><button className="button-link">linkedin</button></a></p>
          <p><br/><a href="https://github.com/RanjithRayalu"><button className="button-link">github</button></a></p>
          <p><br/>Services:</p>
          <p><br/>full stack application with React.js, Node.js, Express.js and MongoDB.</p>
          <p><br/>email id :</p>
          <p>gummadipudiranjith@gmail.com</p>
        </div>
      </div>
    );
  };
  
  
  export { AboutScreen };