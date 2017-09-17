import React, { Component } from 'react'; 
import CharacterList from './CharacterList';
import HeroList from './HeroList';
import Stats from './Stats';
import '../styles/index.css';


export default class App extends Component {
    render(){
        return(
            <div className="App">
                <h2 className="heading">SuperSquad</h2>
                <div className="col-md-4">
                <CharacterList />
                </div>
                <div className="col-md-4">
                <HeroList />
                </div>
                <div className="col-md-4">
                    <Stats/>
                </div>
            </div>
        )
    }
}