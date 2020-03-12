/**
 * @name Header.jsx
 * @description nav bar for the user to navigate through their homepage, the signin page, etc.
 */


import { Link } from "react-router-dom";
import React, { Component } from "react";

class Header extends Component {
    constructor(props){
        super(props);
        this.handleLogOut = this.handleLogOut.bind(this);
    }
    render () {
        return(
        <ul className='menu'>
            <li>
                <Link to='/'>Home</Link>
            </li>
            { !this.props.authed ? (
                <li onClick={this.handleSignIn}>
                    <img src='client/assets/steam_signin.png'/>
                </li>
            ) : (<div>
                <li><Link to='/games'>Games</Link></li>
                <li onClick={this.handleLogOut}>Log out</li>
                </div>
            )

            }
        </ul>
    )}

    handleSignIn() {
        //  directs user to Steam signin page via the back end
        //  cookie session should be crated at front end
        window.open('/api/auth/signin', '_self');
    }

    handleLogOut() {
        
        //Remember to invoke this.props.logout!
        //make a post? request to the backend to signout
        fetch('/api/auth/logout', 
        {
            method : 'POST'
        })
        //.then(raw => raw.json())
        .then(data => {
            console.log(data);
            this.props.logout();
        });
    }
}

export default Header;