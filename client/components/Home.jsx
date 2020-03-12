import React, { Component } from 'react';
import Header from './Header.jsx';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/actions.js';
import GamesDisplay from './GamesDisplay.jsx';

const MSTP = state => ({
    authed : state.steam.authenticated,
    id : state.steam.id,
    games : state.steam.games
})

const MDTP = dispatch => ({
    auth : (id) => dispatch(actions.authenticate(id)),
    getGames : (games) => dispatch(actions.getGames(games)),
    renderInfo : (appid) => dispatch(actions.renderInfo(appid)),
    logout : () => dispatch(actions.logOut())
})
class Home extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount() {
        //  fetch user login status from server side
        fetch('/api/auth/validate', {
            credentials:'include',
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true
          }
        })
        .then(response => {
            if(response.status === 200) return response.json();
            else throw new Error('Failed to authenticate');
        }).then(data => {
            this.props.auth(data.id);
        }).catch(err => {
            console.log('Error in signing in: '+err);
        })
    }

    render () {
        return (
        <div id='home'>
            <div>
                <Header authed={this.props.authed} logout={this.props.logout} />
            </div>
            <Switch>
                <Route path='/games'>
                    <GamesDisplay renderInfo={this.props.renderInfo} getGames={this.props.getGames} games={this.props.games} />
                </Route>
                <Route path='/'>

                </Route>
            </Switch>

        </div>
        )
    }
}


export default connect(MSTP, MDTP)(Home);