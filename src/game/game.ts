import Phaser from 'phaser'
import MainScene from './scenes/MainScene'
import 'phaser/plugins/spine/dist/SpinePlugin';


import SignAndCommunicate from './g-sign-and-communicate/scenes/SignAndCommunicate';
import PathDrawingScene from './scenes/PathDrawingScene ';
import ShadersExample from './scenes/ShadersExample';
import DragDrop from './scenes/DragDrop';
import FirstPage from './scenes/FirstPage';
import FlickFunctionality from './scenes/FlickFunctionality';
import Timeline from './scenes/Timeline';
import IsoGrid from './scenes/IsometricGrid';


export const initGame = (parent: string, gameName: any) => {

  let sceneArray: any = [];

  if (gameName === 'FirstPage') {
    sceneArray.push(FirstPage);

  }

  if (gameName === 'Timeline') {
    sceneArray.push(Timeline);

  }

  if (gameName === 'FlickFunctionality') {
    sceneArray.push(FlickFunctionality);

  }

  if (gameName === 'DragDrop') {
    sceneArray.push(DragDrop);

  }
  if (gameName === 'ShadersExample') {
    sceneArray.push(ShadersExample);

  }
  if (gameName === 'PathDrawingScene') {
    sceneArray.push(PathDrawingScene);

  }
  if (gameName === 'SignAndCommunicate') {
    sceneArray.push(SignAndCommunicate);

  }

  console.log(gameName)
  console.log(sceneArray)

  const game = new Phaser.Game({
    parent,
    type: Phaser.AUTO,
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    // parent: 'phaser-container',
    width: 1920,
    height: 1080,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 0 },
        debug: false,
      },

    },
    // scene: [DragDrop, PathDrawingScene, ShadersExample, SignAndCommunicate],
    scene: sceneArray,



    plugins: {
      scene: [
        { key: SpinePlugin.name, plugin: SpinePlugin, mapping: 'spine' },

      ],

    }

  })
  return game
}
