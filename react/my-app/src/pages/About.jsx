import React from "react";
import Navbar from "../components/Navbar.jsx";
import "../components/CSS/about.css";

function About() {
    return (
        <div>
            <div style={{ 
                backgroundImage: "url(https://i.ibb.co/2Kwp9QB/4.jpg)",
                backgroundSize: "cover",
             }}>
                <Navbar />
            </div>
            <h1 className="Title" style={{ fontFamily: "Black Han Sans", color: "white"}}>ABOUT US</h1>
            <div className="Info-card-container">
                <div className="Info-card">
                    <h2 className="About-Title">Why It Was Established?</h2>
                    <p className="About-Content">Since all of the commercing services got online during the pandemic, the logistic services plays a important role for connecting the producers to the users.Online logistics services play a crucial role in modern supply chain management by providing businesses with the tools and capabilities they need to efficiently and effectively move goods from production to consumption.</p>
                </div>
                <div className="Info-card">
                    <h2 className="About-Title">Reviews</h2>
                    <div className="Review-card">
                        <h3 className="Review-Title">Shivam:</h3>
                        <p className="Review-Content">Its the best website I ever used. Its easy to use and provides best services and fast shipments.</p>       
                    </div>
                    <div className="Review-card">
                        <h3 className="Review-Title">Tanishq:</h3>
                        <p className="Review-Content">Wohooo! once I shipped my logistics using this website and got my goods delivered within 2 days.</p>
                    </div>
                    <div className="Review-card">
                        <h3 className="Review-Title">Ved:</h3>
                        <p className="Review-Content">This website not only provided me services during my transfer, but there was no errors by the company itself, Thank you QuickShip</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;