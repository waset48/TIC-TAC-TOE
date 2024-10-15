import React from "react";
import './app.css'
import Game from "./Component/game";

class App extends React.Component{
    render(){
        return(
            <div className="app">
                <h1>TIC TAC TOE</h1>
                <Game/>
            </div>
        )
    }

}
export default App