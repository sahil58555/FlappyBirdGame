import React, { useEffect, useState } from 'react'
import Phaser from 'phaser';
import '../Play.css'

import PreloadScene from '../scenes/PreloadScene'
import MenuScene from '../scenes/MenuScene'
import ScoreScene from '../scenes/ScoreScene'
import PlayScene from '../scenes/PlayScene'
import PauseScene from '../scenes/PauseScene'

import Button from '@mui/material/Button';
import Leaderboard from './Leaderboard';

const WIDTH = 800;
const HEIGHT = 600;
const BIRD_POSITION = {x: WIDTH * 0.1, y: HEIGHT / 2 };

let game;

function Play() {

  const SHARED_CONFIG = {
    width: WIDTH,
    height: HEIGHT,
    startPosition: BIRD_POSITION,
  }
  
  const Scenes = [PreloadScene, MenuScene, ScoreScene, PlayScene, PauseScene];
  const createScene = Scene => new Scene(SHARED_CONFIG)
  const initScenes = () => Scenes.map(createScene)
  
  const config = {
    type: Phaser.AUTO,
    ...SHARED_CONFIG,
    pixelArt: true,
    physics: {
      default: 'arcade',
      arcade: {
        // debug: true,
      }
    },
    scene: initScenes()
  }
  
  const style = {
    display: 'flex',
    flexDirection: 'column', // Set flex direction to column
    justifyContent: 'center',
    alignItems: 'center',
  };

  const innerStyle = {
    display: 'flex',
    flexDirection: 'column', // Set flex direction to column
    alignItems: 'center',
  };

  const leaderboardStyle = {
    textAlign: 'center', 
    marginTop: '20px'
  }

  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [showMenuBtn, setShowMenuBtn] = useState(false)

  const showBtns = () => {
    setShowLeaderboard(true);
    setShowMenuBtn(true)
  }

  const showCanvas = () => {
    setShowLeaderboard(false);
    game.canvas.style.display = 'block';
  }

  useEffect(() => {
    game = new Phaser.Game(config);

    return () => {
      game.destroy(true)
    }
  }, [])

  if(showLeaderboard) {
    
    game.canvas.style.display = 'none';
    
    return (
      <div style={leaderboardStyle}> 
        {showMenuBtn && <Button variant="contained" onClick={showCanvas}>Menu</Button>}
        <Leaderboard /> 
      </div>
    )
  }

  return (
    <div style={style}>
      <div style={innerStyle}>
        <h1>Flappy Game</h1>
        <Button variant="contained" onClick={showBtns}>Leaderboard</Button>
      </div>
      <div id="phaser-game-container"></div>
    </div>
  )
}

export default Play;