import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <center><h1>Header Title Here</h1></center>
            <nav>
                <Link className="pageLinks" to="/">Home</Link>
                <Link className="pageLinks" to="/charts">Charts</Link>
                <Link className="pageLinks" to="/information">Information</Link>
            </nav>
        </header>
    )
}

export default Header
