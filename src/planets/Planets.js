import './Planets.css';

import './img/earth.png'
import './img/jupiter.jpg'
import './img/mars.jpg'
import './img/mercury.jpg'
import './img/moon.jpg'
import './img/neptune.jpg'
import './img/saturn.jpg'
import './img/sun.jpg'
import './img/uranus.jpg'
import './img/venus.jpg'

// Mais fáceis de reconhecer
const planetsEasy = [
  'earth',
  'jupiter',
  'mars',
  'moon',
  'saturn',
  'sun',
]

const planetsHard = [
  'earth',
  'jupiter',
  'mars',
  'mercury',
  'moon',
  'neptune',
  'saturn',
  'sun',
  'uranus',
  'venus'
]

const planets = planetsEasy

function getRandomPlanet() {
  let index = Math.floor(Math.random() * planets.length)
  return 'Planets ' + planets[index]
}

export { planets, getRandomPlanet}
