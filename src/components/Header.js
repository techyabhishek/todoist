import React from 'react'
import logo from '../assets/images/logo.jpg'

export default function Header() {
    return (
        <header className="header">
            <nav>
                <div className="logo">
                    <img src={logo} alt="Todoist"></img>
                </div>
            </nav>
        </header>
    )
}
