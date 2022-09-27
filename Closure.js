// Problem #1
// Use a closure to create multiple functions for adding a prefix to a name. The prefix could be Doctor, Duchess, Sir, and so on.

// It should be possible to create a new prefix function like this:

// const prefixSir = addPrefix("Sir");

function prefix(prefix) {
  return function(yourName) {
    return `${prefix} ${yourName}`
  }
}
const prefixSir = prefix("Sir")
const prefixDoctor = prefix("Doctor")

// Problem #2
// Use a closure to create multiple functions for making various animal noises. For example, it should be possible to do the following:

// const lionSound = soundMaker("roar");
// const mouseSound = soundMaker("squeak");

function soundMaker(sound) {
  return function(animal) {
    return `${animal} ${sound}`;
  }
}

const lionSound = soundMaker("roar");
const mouseSound = soundMaker("squeak");

console.log(soundMaker("lion"));
console.log(soundMaker("mouse"));


// Problem #3 (Harder)
// Use closures to create multiple functions for adding both a prefix and a suffix to a name. For example, it should be possible to do the following:

// const misterJunior = nameEnhancer("Mister")("Junior");
// const duchessThird = nameEnhancer("Duchess")("The Third");

function nameEnhancer(prefix) {
  return function(suffix) {
    return function(yourName)   {
      return `${prefix} ${yourName} ${suffix}`
    }
  }
}

const misterJunior = nameEnhancer("Mister")("Junior");
const duchessThird = nameEnhancer("Duchess")("The Third");

console.log(misterJunior("William"));
console.log(duchessThird("William"));


// Problem #4 (Harder)
// Use closures to create multiple functions to first add to and then multiply a value. It should be possible to do the following:

function addaMult(addNumber) {
  return function(multiplyNumber){
    return (addNumber + addNumber) * multiplyNumber;
}
}

const addTwoMultiplyByThree = addaMult(2)(3);
const addFiveMultiplyByNine = addaMult(5)(9);

