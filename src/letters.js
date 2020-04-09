const letters = [
  'A','B','C','D','E',
  'F','G','H','I','J',
  'K','L','M','N','O',
  'P','Q','R','S','T',
  'U','V','W','X','Y',
  'Z'
]

function getRandomLetter() {
  let index = Math.floor(Math.random() * letters.length)
  return letters[index]
}

export { letters, getRandomLetter }
