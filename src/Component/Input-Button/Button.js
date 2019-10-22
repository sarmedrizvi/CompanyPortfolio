import React from 'react';
import './Button.scss'


export const InputButton=({children,isGoogleButton,...otherProps})=>(

    <button
    className={`${isGoogleButton? 'GoogleButton' : ''} inputButton`}
    {...otherProps}
    >
    {children}
    </button>
)