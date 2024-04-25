import React from 'react';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';  // Icon for dark mode
import Brightness7Icon from '@mui/icons-material/Brightness7';  // Icon for light mode
import { useColorMode } from './theme-context';  // Import the context hook

function ToggleColorMode() {
    const context = useColorMode();
    console.log(context);  // This should log { toggleColorMode: [Function: toggleColorMode] }
    return (
        <IconButton onClick={context.toggleColorMode} color="inherit">
            {context.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
    );
}


export default ToggleColorMode;
