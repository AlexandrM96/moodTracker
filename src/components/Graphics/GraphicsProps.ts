import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from "react";

export interface GraphicsProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode | [];
}