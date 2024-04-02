import React from "react";
import ".//CSS/image-card.css";

function ImageCard(props) {
    let top = props.to;
    return (
        <div className="image-card">
            <img style={{ top: top }} className="image" src={props.link} />
            <img className="border" src="https://i.ibb.co/Yk2dwKt/Border.png" />
            <a href={props.href}>
                <div className="read-more">
                    READ MORE
                </div>
            </a>
            <div className="image-content">
                <h2 className="ImageCardHeading">{props.heading}</h2>
                <p className="ImageCardContent">{props.content}</p>
            </div>
        </div>
    )
}

export default ImageCard;