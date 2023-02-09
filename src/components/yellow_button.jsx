import React from "react";

const YellowButton = ({ text, onClick, height }) => {
    const radius = height / 2;
    return(
        <button className="yellow_button" onClick={ onClick } style={{ height: `${height}px`, borderRadius: `${radius}px` }}>
            {text}
        </button>
    );
}

export default YellowButton;