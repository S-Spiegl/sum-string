function count (string) {  
  
  result = {}

  if(string){
    //assign string split into array of constituent characters to variable
    characters = string.split('')
    //function to count characters
    countCharacters = (x) => string.split(x).length-1
    //loop through the array of characters 
    for(i = 0; i < characters.length; i++){
      //run the character count function on each character in the array and assign the result to characterCount
      characterCount = countCharacters(characters[i])
      //form a hashmap with the key being whichever character the loop is on at that time and the value being the count for that key
      result[characters[i]]=characterCount
    }
    return result
  } 
  else{return {}}
  ;
}

module.exports = count