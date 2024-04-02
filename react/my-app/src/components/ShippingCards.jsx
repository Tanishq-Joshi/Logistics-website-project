import React from "react";
import ".//CSS/shipping.css"

function ShippingCards(props) {
    return (
        <div className="Shipps" id={props.id}>
            <img className="Shipping-Image" src={props.link} alt="Image goes here" />    
            <div className="container">
                <img className="Border" src="https://i.ibb.co/Yk2dwKt/Border.png" />
                <h2 className="Shipping-Heading">{props.heading}</h2>
                <p className="Shipping-Content">{props.content}</p>
                <a href="/checkout">
                    <button className="Booking">Book an Estimate <img src="https://i.ibb.co/jT9Dpxy/appointment.png" className="appointment" /> </button>
                </a>
            </div>
        </div>
    )
}

export default ShippingCards;