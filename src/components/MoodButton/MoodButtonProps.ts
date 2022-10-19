import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from "react";

export interface MoodButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: ReactNode | number;
}