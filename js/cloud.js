import { isDead } from "./dino.js";

const insertCloud = () => {

    let interval;
    let randomNum = Math.random() * 50;
    let cloud = document.createElement('div');

    cloud.classList.add('cloud');
    cloud.style.top = randomNum + 'px';

    document.getElementById('game').appendChild(cloud)
    
    interval = setTimeout(() => insertCloud, 10000)

    if(isDead) {
        clearTimeout(interval)
        removeClouds()
    }

}

const removeClouds = () => {

    let clouds = document.querySelectorAll('.cloud');

    clouds.forEach(cloud => cloud.remove())

}

export {insertCloud, removeClouds}