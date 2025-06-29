import React, {useEffect} from 'react'
import { initGame } from '../game/game'

const Scene = (sceneName:any) => {

      useEffect(() => {
    // Call initGame when the component mounts
    const game = initGame('game-root',sceneName);

    // Clean up the game when the component unmounts
    // return () => {
    //   game.destroy(true);
    // };
  }, [sceneName]); // Include currentScene as a dependency to reinitialize the game when it changes
  return (
    <div id='gameroot'></div>
  )
}

export default Scene