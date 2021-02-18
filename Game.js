import {GAME_STATE, GRID_SIZE } from '../game.constants';
import Player from './Player';
import Cell from './Cell';
import Board from "./Board";

const getRandomCoordinate = () => Math.floor(Math.random()*GRID_SIZE);

class Game {
    constructor(blinkTimeAndScore) {
        this.player = new Player;
        this.cell = new Cell;
        this.board = new Board;
        this.state = GAME_STATE.IN_PROGRESS;
        this.speed =  10; 
        this.speed_counter = 0;
        this.currentLevel =  0;
        this.blinkTimeAndScore = blinkTimeAndScore;
    }

    incrementSpeed () {
        this.speed = Math.max(this.speed-1,0)
    }

    fillBlinkerPosition(){
        const  blinkBoxIcoordinate  = getRandomCoordinate();
        const blinkBoxJcoordinate =getRandomCoordinate();
        return [blinkBoxIcoordinate, blinkBoxJcoordinate]
    }

  blink_process(){
    let blinkTimeSpeed  = this.blinkTimeAndScore[this.currentLevel].time/100;
    this.speed = blinkTimeSpeed;
    if(this.speed_counter < this.speed){
        this.speed_counter = this.speed_counter+1;
        return false;
    }
    this.speed_counter = 0;
    return true;
}

  }

export default Game;


    