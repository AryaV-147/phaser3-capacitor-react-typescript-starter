import React, { useEffect} from 'react';
import { initGame } from '../game/game'
import { useLocation } from 'react-router-dom';


export const GameScene = () => {

      const location = useLocation();
      const currentScene = location.state;

      useEffect(() => {
    // Call initGame when the component mounts
    const game = initGame('game-root',currentScene);

    // Clean up the game when the component unmounts
    // return () => {
    //   game.destroy(true);
    // };
  }, [currentScene]); // Include currentScene as a dependency to reinitialize the game when it changes

  return (
    <div >
    </div>
  )
}
