import React from 'react';
import {MoodButtonProps} from "./MoodButtonProps";
import './MoodButton.css';

export default function MoodButton({children, ...props}: MoodButtonProps): JSX.Element {

    const token: string | null = localStorage.getItem('tokenAuth');

    return (
        <button className="mood-button"
                {...props}>
            {children}
        </button>

    );
}
