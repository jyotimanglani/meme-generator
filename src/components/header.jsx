import React from 'react'
import AppLogo from '../images/Troll Face.png'
export default function Header () {
    return(
        <header className="app-header">
            <img src={AppLogo}/>
            <h2>Meme Generator</h2>
        </header>
    )
}