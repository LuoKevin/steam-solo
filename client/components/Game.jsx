import React, { Component } from 'react';
import GameInfo from './GameInfo.jsx'

class Game extends Component {
    render() {
        return(
        <div className='gameBox'>
            <img className='gamePic' src={this.props.pic} onClick={() => this.props.renderInfo(this.props.appid) } />
            {this.props.render ? 
            <GameInfo storepage={this.props.storepage} appid={this.props.appid} key={this.props.appid} name={this.props.name} playtime={this.props.playtime} />
            :null
        }
        </div>
    )}
}

export default Game;