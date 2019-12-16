import React from 'react'
import useDarkMode from '../hooks/useDarkMode'
import User from './User'
const Display = (props) => {
    const [darkMode, setDarkMode] = useDarkMode();
    
    const toggleDarkMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode)
    }
    return (
        <div>
            <span onClass = 'dark-mode-button'>
                <button onClick = {toggleDarkMode}>DarkMode</button>
            </span>
            {props.users.map(user => {
                return (
                    <User
                
                    key = {user.id}
                    name = {user.name}
                    country = {user.country}
                    search = {user.searches} />
                )
            })}
        </div>
    )
}

export default Display