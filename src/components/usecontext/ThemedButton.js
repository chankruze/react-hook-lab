/*
Author: chankruze (chankruze@geekofia.in)
Created: Sat Sep 12 2020 16:19:05 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react'
import { ThemeContext } from '../../App';

function ThemedButton() {
    const theme = React.useContext(ThemeContext);
    
    return (
        <button style={{ background: theme.background,
        color: theme.foreground,
        padding: '10px 20px',
        outline: 'transparent',
        border: 'none',
        borderRadius: '10px',
        marginTop: '20%'}}>
            I am styled by theme context!
        </button>
    );
}

export default ThemedButton
