import React from 'react';

const Profile = (props) => {
    return(
    <div class='profile'>
        <div>
            <span>Welcome {props.profile.displayname}!</span>
            <br />
            <br />
            <a onClick={() => window.open(props.profile.url)}>Steam profile link</a>
        </div>
        <img src={props.profile.avatar} />
    </div>
)}

export default Profile;