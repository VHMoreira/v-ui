import {  MouseEventHandler } from "react"

type ButtonColor = 'principal' | 'secondary';

interface ButtonProps {
    text: string,
    color?: ButtonColor,
    outlined?: boolean,
    disabled?: boolean,
    fullWidth?: boolean,
    onClick?: MouseEventHandler<HTMLButtonElement>
}

export default ButtonProps;
