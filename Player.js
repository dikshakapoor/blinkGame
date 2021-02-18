import {PER_CLICK_SCORE_INCREMENT} from "../game.constants";

class Player{
    constructor() {
        this.score = 0 ;
    }
    
    compute_score(){
        this.score = this.score + PER_CLICK_SCORE_INCREMENT ;
    }
}
export default Player 