const canConstruct = (ransomNote, magazine) => {
  if(ransomNote.length > magazine.length) return false;
  let letterMap = {};
  for(let letter = 0; letter < magazine.length; letter++) {
    if(!letterMap[magazine[letter]]) {
      letterMap[magazine[letter]] = 1;
    } else {
      letterMap[magazine[letter]]++;
    }
  }
  console.log(letterMap);
  for(let ransomLet = 0; ransomLet < ransomNote.length; ransomLet++) {
    if(Object.hasOwnProperty.call(letterMap, ransomNote[ransomLet])) {
      if(letterMap[ransomNote[ransomLet]] === 0) {
        console.log('false');
        return false;
      }
      letterMap[ransomNote[ransomLet]]--;
    } else {
      console.log('false');
      return false;
    }
  }
  console.log('true')
  return true;
}

canConstruct('ab', 'ba');
canConstruct('aa', 'bba');
