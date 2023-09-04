import React from "react";
import "../index.css"
import photo from "../assets/about-photo.jpeg"

const Home = () => {
    return (
        <div className="text">
            <div className="title">
                Hi there! I'm Tong Yin
            </div>
            <br></br>
            <br></br>
            <div className="work">
            Previously, I've been...
            <br></br>
            <br></br>
            Product Manager / Software Developer @ Johnson Outdoors Canada
            <br></br>
            Software Developer @ Thomson Reuters
            <br></br>
            Lead Software Developer @ Develop for Good
            <br></br>
            Logistics Lead @ Tech+ UW
            </div>
            <br></br>
            <div className="searching">
            Currently seeking summer 2024 internships!
            </div>
            <br></br>
            <img src={photo} alt="photo" className="photo"/>
        </div>
    );
};

export default Home;