import React from "react";

const Button = ({text, color, change}) => {
    return (
        <>
            <button style={{backgroundColor: color, border: color}} className='btn btn-success' onClick={change}>
                {text}
            </button>
        </>
    );
}

export default Button;