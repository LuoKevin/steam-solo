/**
 * @name Header.jsx
 * @description nav bar for the user to navigate through their homepage, the signin page, etc.
 */


import { Link } from "react-router-dom";
import React, { Component } from "react";

class Header extends Component {
    render () {
        return(
        <ul className='menu'>
            <li>
                <Link to='/'>Home</Link>
            </li>{ !this.props.authed ? (
                <li onClick={this.handleSignIn}>
                    <img src='client/assets/steam_signin.png'/>
                </li>
            ) : (
                <li onClick={this.props.logout}>Log out</li>
            )

            }
        </ul>
    )}

    handleSignIn(){
        //  directs user to Steam signin page via the back end
        //  cookie session should be crated at front end
        window.open('http://localhost:3000/auth/signin', '_self');
    }
}

export default Header;