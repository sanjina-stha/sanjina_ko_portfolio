import React from "react";
import "./Home.css"
import profileImg from "../../../src/assets/profileImg.jpg";

const Home = () => {
  return (
    <div>
      <section className="home">
        <div className="home-content">
          <h1>Hi, I'm Sanjina Shrestha</h1>
          <h2>Frontend Developer & React Learner</h2>
          <p>
           Hi there! 👋
I'm passionate about building responsive and user-friendly websites.
Currently diving deep into React and working on hands-on projects to enhance my skills.
Welcome to my portfolio — take a look around and see what I've been building!
          </p>
          <button className="home-btn">Download CV</button>
        </div>
         <div className="home-img">
          <img src={profileImg} alt="Sanjina Shrestha" />
        </div> 
      </section>
    </div>
  );
};

export default Home;