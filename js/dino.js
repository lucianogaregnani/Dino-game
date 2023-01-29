
import { removeCactus } from "./cactus.js";
import  {play} from "./index.js"

const floor = document.querySelector('.floor')
let isJumping = false;
let dinoImage = document.querySelector('.dino');
let isDead = false;

const handleKeyJump = (e) =>{
        if(e.keyCode === 32)
            jump();
            isJumping = true;
    }
    
const jump = () => {
        if (!isJumping) {    
            dinoImage.classList.add('dino-jumping')
            setTimeout(() => {
                dinoImage.classList.remove('dino-jumping')
                isJumping = false;  
            }, 555)
        }
    }

const toDie = () => {

    isDead = true;

    dinoImage.classList.add('dino-dead');
    dinoImage.classList.remove('dino-running')
    floor.classList.remove('floor-moving')

    document.removeEventListener('keyup', handleKeyJump)

    gameOver();

}

const gameOver = () => {

    setTimeout(() => {

        const over = document.createElement('div');
        over.classList.add('game-over');
        over.textContent = 'PRESS ANY KEY TO CONTINUE';

        game.appendChild(over);

        document.addEventListener('keyup', start);

    },1000)

}

const start = (key) => {

    if(key.keyCode >= 0) {

        isDead = false;

        document.querySelector('.game-over').remove()
        document.querySelector('.dino').classList.remove('dino-dead')
        document.removeEventListener('keyup', start)

        removeCactus()
        play()
    }

}


export {isJumping, toDie, handleKeyJump, isDead}