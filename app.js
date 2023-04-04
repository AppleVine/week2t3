// update this function so that it passes all of the tests
function countCapitalLetters(inputString) {
    let capitalLettersCount = 0
  
    for (let letter of inputString) {
        if (/[a-zA-Z]/.test(letter)) {
            if (letter.toUpperCase() === letter) {
                capitalLettersCount += 1
                console.log(letter)
            }
        }
    }
    return capitalLettersCount
  }
  
  

  console.log(countCapitalLetters("aBcDeFg"))
  
  
  module.exports = {
    countCapitalLetters
  }
  