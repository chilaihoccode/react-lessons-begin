import { createContext,useState } from "react"
import Context from "./Content"

export const themeContext = createContext()
function GlobalState () {
    const [theme,setTheme] = useState('light')
    const handleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    return (
        <div style={{padding : 20}}>
            <themeContext.Provider value={theme}>
                <button onClick={handleTheme}>Toggle Color</button>
                <Context  />

            </themeContext.Provider>
        </div>
    )

}

export default GlobalState