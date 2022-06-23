import React from "react"
import { useTheme } from '@mui/material/styles'
import { useContextTheme } from "../ColorModeProvider"
import { Box, IconButton } from '@mui/material'
import { MdBrightness7, MdBrightness4 } from 'react-icons/all'

export const ToggleButton: React.FC = () => {
    const theme = useTheme()
    const colorMode = useContextTheme()

    return (
        <Box
            sx={{
                display: 'flex',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: 'background.default',
                color: 'text.primary',
                borderRadius: 1,
                p: 3,
            }}
        >
            {theme.palette.mode} mode
            <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ? <MdBrightness7 /> : <MdBrightness4 />}
            </IconButton>
        </Box>
    )
}