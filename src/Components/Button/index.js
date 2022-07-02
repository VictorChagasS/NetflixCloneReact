import React, { useState } from 'react';
const Button = ({background, color, children}) => {
    const [isHover, setIsHover] = useState(false)

    const HoverActive = () => {
        setIsHover(true)
    }
    const HoverInactive = () => {
        setIsHover(false)
    }
    const buttonStyle = {
        fontSize:'20px',
        padding: '12px 25px',
        fontWeight: 'bold',
        marginRight:'10px',
        borderRadius:'5px',
        cursor:'pointer',
        color,
        background,
    }
    return (
        <button onMouseEnter={HoverActive} onMouseLeave={HoverInactive} style={{...buttonStyle, opacity: isHover ? 0.7 : 1}}>{children}</button>
    )}


export default Button