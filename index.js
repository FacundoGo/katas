// scramblies
// not my solution, since it timed out
function scramble(strToBeChecked, strToCheckFor) {
    let numLetters = {}
  
    for (const letter of strToCheckFor) {
      if (numLetters[letter]) numLetters[letter]++
      else numLetters[letter] = 1
    }
  
    for (const letter of strToBeChecked) {
      if (numLetters[letter] && numLetters[letter] !== 0) numLetters[letter]--
    }
  
    for (const key in numLetters) {
      if (numLetters[key] !== 0) return false
    }
  
    // Only reaches this far if all good
    return true
  }