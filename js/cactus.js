import { isJumping } from "./dino.js";
import { toDie } from "./dino.js";

let timer;
let generateCactus;

const insertCactusRandom = () => {
    let randomNum = Math.round(Math.random());

    randomNum === 0 ? insertCactus('easyCactus') : insertCactus('hardCactus')
}

const insertCactus = (typeOfCactus) => {
    const cactus = document.createElement('div')
    let position = 800
    let randomTime = 500 + Math.random() * 3000

    cactus.classList.add(typeOfCactus);
    cactus.style.left = position + 'px'
    document.getElementById('game').appendChild(cactus);

    timer = setInterval(() => {

        if(position === 100 && !isJumping) { 
            clearInterval(timer);
            clearTimeout(generateCactus);
            toDie();
        }
        
        if(position === -70)
            cactus.remove();

        position -= 10;
        cactus.style.left = position + 'px'
        
    }, 20)

    generateCactus = setTimeout(insertCactusRandom, randomTime)

}

const removeCactus = () => {
    let cactus = document.querySelectorAll('.easyCactus, .hardCactus');

    cactus.forEach(cactus => {
        cactus.remove();
    })
}

export {insertCactusRandom, removeCactus}