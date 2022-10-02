// Problem #1
// Write a recursive function that reverses the order of words in a sentence. For instance, "I am a cat" should become "cat a am I"

const reversedSentence = (string) => {      // ["I am a cat"]
  let splittedString = string.split(" ");   // ["I", "am", "a", "cat"]
  const isOneWordLeft = splittedString.length === 1;
  if (isOneWordLeft){   
    // if we have one word left - break recursion and return last word
    return splittedString[0]                  //[0] - means first word in array ["I"]
  } else {
    const lastWordIndex = splittedString.length - 1;
    const lastWord = splittedString[lastWordIndex];
    const stringWithoutLastWord = splittedString.slice(0, lastWordIndex).join(" ");
    return lastWord + " " + reversedSentence(stringWithoutLastWord);
  }
}


// Problem #2
// Write a recursive function that concatenates "red green refactor" to a string X number of times, 
// where X is the argument passed into the function. rgr(3) should return the following:

// "red green refactor red green refactor red green refactor"

const rgr = (x) =>{
  if(x === 0){
    return '';
  } else{
    return `red,green,refactor ${rgr(x-1)}`
  }
}

