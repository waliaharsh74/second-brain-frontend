import { ReactElement } from "react"

export interface ButtonProps {
    variant: "primary" | "secondary"
    size: "sm" | "md" | "lg"
    text: string
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick?: () => void
}
const variantStyles = {
    "primary": "bg-purple-600 text-black",
    "secondary": "bg-purple-400 text-white",
}
const sizeStyles = {
    "lg": "px-8 py-4 text-xl rounded-xl",
    "md": "px-4 py-2 text-md rounded-md",
    "sm": "px-2 py-1 text-sm rounded-sm",
}
const defaultStyle = "rounded-md p-2"
export const Button = (props: ButtonProps) => {
    const { variant, size, text, startIcon, endIcon, onClick } = props
    return <button className={`${variantStyles[variant]} ${sizeStyles[size]} ${defaultStyle}`} >{startIcon}{text}{endIcon}</button>
}