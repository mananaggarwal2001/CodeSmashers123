import React from 'react'
import '../CSS/Navbar.css'
import codeSmash from '../Images/codeSmashersLogo.jpg'
const Navbar = () => {
    return (
        <div id="header">
            <div class="container">
                <nav>
                    <img src={codeSmash} alt="Failed to reload!!" class="logo"/>
                        <ul id="sidemenu">
                            <li><a href="login_user.html" class="currentPage">Login</a></li>
                            <li><a href="SignUp.html">Sign in</a></li>
                        </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar