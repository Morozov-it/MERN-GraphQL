import React from 'react'
import { Button } from 'antd'
import { getTheme, toggleTheme } from '../theme-antd'
import { useState } from 'react'

const ToggleTheme: React.FC = () => {
    const [theme, setTheme] = useState(getTheme())

    const onClick = () => {
        setTheme(getTheme() === "dark" ? "light" : "dark")
        toggleTheme()
    }

    return <Button onClick={onClick}>{theme}</Button>
}
export default ToggleTheme