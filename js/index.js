import {handleKeyJump} from './dino.js';
import { insertCloud } from './cloud.js';
import { insertCactusRandom } from './cactus.js'; 

const game = document.getElementById('game');

const play = (key) => {

        const evento = document.addEventListener('keyup', handleKeyJump)

        document.querySelector('.dino').classList.add('dino-running')
        document.querySelector('.floor').classList.add('floor-moving')

        insertCactusRandom()
    
}

play()

export {play}