import React, { Component } from 'react';
import Game from './Game.jsx';

class GamesDisplay extends Component {
    componentDidMount() {
        //fetching list of games from the backend
        fetch('/api/games')
        .then(raw => raw.json())
        .then(data => {
            // const gameList = data.games.map(game => {
            //     const appid = game.appid;
            //     return {
            //         appid,
            //         playtime : game.playtime_forever,
            //         pic : `https://steamcdn-a.akamaihd.net/steam/apps/${appid}/header.jpg`,
            //     }
            // })
            this.props.getGames(data);
        })
    }
    render () {
        const gameArr = this.props.games ? (this.props.games.map(game => {
             return <Game renderInfo={this.props.renderInfo} render={game.render} storepage={game.storepage} appid={game.appid} key={game.appid} name={game.name} playtime={game.playtime} pic={game.pic} />;
        }
        )) : null;

        return(
            <div className='gamesDisplay'>
                {gameArr}
            </div>
        )
    }
}

export default GamesDisplay;