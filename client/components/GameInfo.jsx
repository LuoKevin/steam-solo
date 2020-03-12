import React from 'react';

const GameInfo = (props) => {
    return (
        <div className='gameInfo'>
            <ul>
                <li onClick={()=>{window.open(props.storepage)}}><b>{props.name}</b></li>
                <li>Playtime: {Math.floor(props.playtime/60)} hours</li>
            </ul>
        </div>
    )
}







export default GameInfo;