import React from "react";
import Navbar from "../components/Navbar.jsx";
import ImageCard from "../components/ImageCard.jsx";
import ShippingCards from "../components/ShippingCards.jsx";
import Footer from "../components/Footer.jsx";
import "../components/CSS/styles.css";

function Home() {
    return (
        <div>
            <div style={{ 
                backgroundImage: "url(https://i.ibb.co/rdG2gwf/Truck1.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "top -25vh left"
             }}>
                <Navbar />
                <span style={{ fontFamily: "Black Han Sans" }} className="Slogan">
                    <h1>LOGISTIC SERVICES,</h1>
                    <h1>JUST GOT <span style={{color: "yellow"}}>BETTER</span>.</h1>
                </span>
            </div>
            <div id="services" style={{
                marginTop: "5vh",
                display: "flex",
                gap: "15vh",
                justifyContent: "center",
                overflow: "none",
            }}>
                <ImageCard href="#International" to="-36vh" link="https://i.ibb.co/r7FBCXq/Whats-App-Image-2024-02-29-at-23-00-27-71a2983b.jpg" heading="International Shipping"/>
                <ImageCard href="#Inter-City" to="-32vh" link="https://i.ibb.co/NrSTJf0/2.jpg" heading="Inter-City Shipping" />
                <ImageCard href="#Intra-City" to="-32vh" link="https://i.ibb.co/XjpdTCK/3.jpg" heading="Intra-City Shipping" />
            </div>
            <ShippingCards link="https://upload.wikimedia.org/wikipedia/commons/0/06/Cargo_Ship_Puerto_Cortes.jpg" id="International" content="We provide full supply chain management package including cost effective and fast sea freight." heading="International Shipping" />
            <ShippingCards link="https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyZ28lMjB0cnVja3xlbnwwfHwwfHx8MA%3D%3D" id="Inter-City" content="With the interconnected travelling system, the service provides the most efficient method of transferring goods." heading="Inter-City Shipping" />
            <ShippingCards link="https://www.herolectro.com/on/demandware.static/-/Sites-heroLectro-Library/default/dwc3a55569/Cargo_Homepage_Banner/1.Badhao_Tarrakki_1920x1024-min.jpg" id="Intra-City" content="With our highly skilled and economical friendly means of transport system such as bikes or e-rickshaw, the service provides the same day delivery." heading="Intra-City Shipping" />
            <Footer />
        </div>
    )
}

export default Home;