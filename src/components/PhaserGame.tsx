import Phaser from 'phaser'
import React, { useState , useEffect} from 'react';
import { initGame } from '../game/game'
import './App.css';


const PhaserGame = () => {

  const [currentScene, setCurrentScene] = useState('FirstPage'); // Initially load Scene1

  const switchToScene1 = () => {

    setCurrentScene('PathDrawingScene');
  }
  
  const switchToScene2 = () => {
    setCurrentScene('ShadersExample');

  }

   const switchToScene3 = () => {
    setCurrentScene('DragDrop');

  }

  const switchToScene4 = () => {
    setCurrentScene('SignAndCommunicate');

  }

  const switchToScene5 = () => {
    setCurrentScene('FlickFunctionality');

  }

  const switchToScene6 = () => {
    setCurrentScene('Timeline');

  }

  const switchToScene7 = () => {
    setCurrentScene('IsoGrid');

  }


   useEffect(() => {
    // Call initGame when the component mounts
    const game = initGame('game-root',currentScene);

    // Clean up the game when the component unmounts
    return () => {
      game.destroy(true);
    };
  }, [currentScene]); // Include currentScene as a dependency to reinitialize the game when it changes


  return(
    
    <div style={{display: 'block',  justifyContent:'center', alignItems:'center',position: 'fixed', margin: 'auto'}} >
    
      <div> <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Scenes</button>
    
    <div className="offcanvas offcanvas-start" data-bs-scroll="true"  id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Phaser Example</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">

        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link  " aria-current="page" data-bs-dismiss="offcanvas" onClick={switchToScene1}>Path Drawing Scene</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-dismiss="offcanvas" onClick={switchToScene2}>Render Texture</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-dismiss="offcanvas" onClick={switchToScene3}>Drag And Drop</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-dismiss="offcanvas" onClick={switchToScene4}>Sign and Communicate Game</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-dismiss="offcanvas" onClick={switchToScene5}>Flick an object</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-dismiss="offcanvas" onClick={switchToScene6}>Timeline</a>
          </li>
           <li className="nav-item">
            <a className="nav-link" data-bs-dismiss="offcanvas" onClick={switchToScene7}>Timeline</a>
          </li>
        </ul>     
         </div>
    </div></div>
    </div>
     
     );
};





export default PhaserGame;
