import React, { createContext, useContext, useMemo, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const ColorModeProvider = ({ children }) => {
    const [mode, setMode] = useState('light');  // Default theme is light

    const colorMode = useMemo(() => ({
        toggleColorMode: () => {
            setMode((prevMode) => {
                const newMode = prevMode === 'light' ? 'dark' : 'light';
                console.log('Toggling mode:', prevMode, 'to', newMode); // This will log the mode change
                return newMode;
            });
        }
    }), []);
    

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: mode,
                    background: {
                        default: mode === 'light' ? '#ffffff' : '#121212',
                        paper: mode === 'light' ? '#ffffff' : '#121212',
                    },
                    text: {
                        primary: mode === 'light' ? '#000' : '#fff',
                    },
                },
            }),
        [mode],
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};

export const useColorMode = () => useContext(ColorModeContext);
