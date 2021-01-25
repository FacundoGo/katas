// scramblies
// not my solution, since mine timed out, the below works
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

  // consecutive strings

  function longestConsec(strarr, k) {
    if (strarr.length == 0 || k > strarr.length || k <= 0) return '';
    
    let longStr = '';
    let newStr = '';
    
    // loop over the array, check what is the longest string + K number of consecutive strings
    for (let i = 0; i < strarr.length; i++){
      newStr = strarr.slice(i, i+k);
      if (newStr.join('').length > longStr.length ){
        longStr = newStr.join('');
      }
    }
    
    return longStr;
}

// find the unique number - actually finds all unique values
// if the first index of a number is equal to the last index of, then it's filtered
function findUniq(arr) {
  const filt = arr.filter(el => {
  return arr.indexOf(el) === arr.lastIndexOf(el)
  });
    return filt[0]
  }