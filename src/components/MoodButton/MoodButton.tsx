import React from 'react';
import {MoodButtonProps} from "./MoodButtonProps";
import './MoodButton.css';

export default function MoodButton({children, ...props}: MoodButtonProps): JSX.Element {

    return (
        <button className="mood-button"
                {...props}>
            {children}
        </button>

    );
}
