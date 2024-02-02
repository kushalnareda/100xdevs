import React from "react";

const Card = ({ name, description, socialMedia, interests, imageSrc})=> {
    return(
        <div className="card">
            <h2>{name}</h2>
            <img src = './assets/k.png'  className="profile-image" />
            <p>{description}</p>
            
            
            <div className="interests">
                <h3>Interests</h3>
                <ul>
                    {interests.map((interests ,index) => (
                        <li key={index}>{interests}</li>
                    ))}
                </ul>
            </div>
            <div className="social-media">
                <button
                    type ="button"
                    onClick={ function(){
                        window.open(socialMedia.linkedin, '_blank');
                    }}
                >
                    LinkedIn
                </button>
                <button
                    type ="button"
                    onClick={ function(){
                        window.open(socialMedia.twitter, '_blank');
                    }}
                >
                    Twitter
                </button>
            </div>
        </div>
    )
}

export default Card;