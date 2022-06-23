import React, { createContext, ReactNode, useCallback, useContext, useMemo, useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'

type Mode = 'light' | 'dark'

interface Context {
    toggleColorMode: () => void,
    mode: Mode
}

const ColorModeContext = createContext<Context>({ mode: 'light', toggleColorMode: () => {} })

const ColorModeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [mode, setMode] = useState<Mode>('light')

    const toggleColorMode = useCallback(() => setMode((prev) => (prev === 'light' ? 'dark' : 'light')), [])

    const theme = useMemo(
        () =>
        createTheme({
            palette: {
            mode,
            },
        }),
        [mode],
    )

    return (
        <ColorModeContext.Provider value={{ toggleColorMode, mode }}>
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
        </ColorModeContext.Provider>
    )
}

export const useContextTheme = () => useContext(ColorModeContext)

export default ColorModeProvider