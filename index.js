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


  // mumbling - make each letter in s repeat the number of times its index
  function accum(s) {
    let smallS = s.toLowerCase()
    let ans = []
      for (let i = 0; i < smallS.length ; i ++){
        let tempStr = smallS[i].toUpperCase()
        for (let j = 0; j < i ; j++){
          tempStr += smallS[i]
        }
        ans.push(tempStr)
      }
    
    return ans.join('-')
    }

    // set alarm - answers true if employed and not on holiday
    function setAlarm(employed, vacation){
      let ans = ''
       employed && !vacation ? ans = true : ans = false 
        return ans
      }

      // separate a string that is camecases using a regex
      function solution(string) {
        return(string.replace(/([A-Z])/g, ' $1'));
      
      }

      // number of people on a bus
      // array of arrays , first number indicate how many people get on, and second number indicate how many get off
      var number = function(busStops){
        let res = 0
        for (let stop of busStops){
          res += stop[0] - stop[1]
        }
        
        return res
      }
      
      