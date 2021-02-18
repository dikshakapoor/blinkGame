import Cell from './Cell';

class Board {
    constructor(){
        this.grid = new Array(3).fill(null).map(()=>{return Array(3).fill(null)})
        for(let i = 0 ; i<this.grid.length; i++) {
            for (let j= 0; j <this.grid.length; j++){
                this.grid[i][j] = new Cell;
            }
        }
        this.i = undefined;
        this.j =undefined;
    }

    setCellBlinking(blinkBoxIcoordinate,blinkBoxJcoordinate){
        if (this.i || this.j){
            this.grid[this.i][this.j].blink = false;
        }
        this.i = blinkBoxIcoordinate;
        this.j = blinkBoxJcoordinate;
        this.grid[this.i][this.j].blink = true;
    }
}

export default Board;