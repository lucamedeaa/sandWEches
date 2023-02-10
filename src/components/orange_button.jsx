import React from "react";

const OrangeButton = ({ text, onClick, height }) => {
    const radius = height / 2;
    return(
        <button className="orange_button" onClick={ onClick } style={{ height: `${height}px`, borderRadius: `${radius}px` }}>
            {text}
        </button>
    );
}

export default OrangeButton;