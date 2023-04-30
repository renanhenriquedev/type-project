import React from "react";

import styles from './Button.module.css'

interface ButtonProps {
    type?: "button" | 'submit';
    children: React.ReactNode;
    red?: boolean;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ type = 'button', onClick,children , red}) => {
    return <button type={type} onClick={onClick} className={`${styles.button}  ${red && styles.redButton}`}>
        {children}
    </button>;
};

export default Button;