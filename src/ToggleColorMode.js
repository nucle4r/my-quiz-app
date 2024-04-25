import React from 'react';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';  // Icon for dark mode
import Brightness7Icon from '@mui/icons-material/Brightness7';  // Icon for light mode
import { useColorMode } from './theme-context';  // Import the context hook

function ToggleColorMode() {
    const { toggleColorMode } = useColorMode();

    return (
        <IconButton onClick={toggleColorMode} color="inherit">
            <Brightness4Icon />
        </IconButton>
    );
}

export default ToggleColorMode;
