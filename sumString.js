function count (string) {  
  
  result = {}

  if(string){
    characters = string.split('')
    countCharacters = (x) => string.split(x).length-1
    for(i = 0; i < characters.length; i++){
      characterCount = countCharacters(characters[i])
      result[characters[i]]=characterCount
    }
    return result
  } 
  else{return {}}
  ;
}

module.exports = count