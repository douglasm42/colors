import './Colors.css';

const colors = [
  'Red',
  'Green',
  'Blue',
  'Yellow',
  'Pink',
  'Purple',
  'Orange'
]

function getRandomColor() {
  let index = Math.floor(Math.random() * colors.length)
  return colors[index]
}

export { colors, getRandomColor};
