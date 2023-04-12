import { useState, useEffect } from 'react'

function DarkModeToggle() {
    const [theme, setTheme] = useState('light')

    useEffect(() => {
        document.documentElement.classList.remove(
            theme === 'light' ? 'dark' : 'light'
        )
        document.documentElement.classList.add(theme)
    }, [theme])

    return (
        <div>
            <input
                type="checkbox"
                name="toggle"
                id="toggle"
                className=""
                onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                checked={theme === 'dark'}
            />
            <label htmlFor="toggle" className=""></label>
        </div>
    )
}

export default DarkModeToggle

//to-do: Add styling and animation
