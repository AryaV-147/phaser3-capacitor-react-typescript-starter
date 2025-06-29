/// <reference types="../../custom_typings/index" />

import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Routes , Route, BrowserRouter as Router} from "react-router-dom";
import PhaserGame from './PhaserGame'
type AppProps = {}
type AppState = {}


class App extends React.Component<AppProps, AppState> {

  constructor(props: {}) {
    super(props)
  }
  
  render() {
    return (
      <div  >
        <Router>

        {/* <div style={{display: 'block',  justifyContent:'center', alignItems:'center',position: 'fixed', margin: 'auto'}} id="game-root"></div> */}
        <div className='App'>
      <Routes>
        
            <Route path="/" element={<PhaserGame/> } />

      </Routes> 
      </div>     
      </Router>

      </div>
    )
  }
}


export default App
