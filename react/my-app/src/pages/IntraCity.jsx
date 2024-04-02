import React from "react";
import Navbar from "../components/Navbar.jsx";
import "../components/CSS/checkout.css";
import Collapsible from "react-collapsible";

function IntraCity() {
    return (
        <div>
            <div style={{ 
                backgroundImage: "url(https://www.hdwallpapers.in/download/freedom_park_buildings_cityscape_road_bangalore_hd_travel-2560x1440.jpg)",
                backgroundSize: "cover",
             }}>
                <Navbar />
            </div>
            <h1 className="Checkout-Heading">CHECKOUT</h1>
            <div className="Checkout-Container">
                <div className="Checkout-Items">
                    <h2 style={{ textAlign: "center", fontSize: "4.5vh" }}>Checkout Items</h2>
                    <div className="collapse">
                        <Collapsible trigger="Document">
                            File Document
                        </Collapsible>
                    </div>
                </div>
                <div className="Checkout-Bill">
                    <h2 style={{ textAlign: "center", fontSize: "4.5vh" }}>Checkout Bill</h2>
                </div>
            </div>
        </div>
    )
}

export default IntraCity;