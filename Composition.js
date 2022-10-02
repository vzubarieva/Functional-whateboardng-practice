// Problem #1
// Compose a function called paint() and then add it to three different painters. Each painter can only paint with one color. This should be the end result:

// > painter1.paints()
// "Paints green!"
// > painter2.paints()
// "Paints yellow!"
// > painter3.paints()
// "Paints red!"

const paint = function(color) {
  const obj ={
    paints: function() {
      return `Paints ${color}!`
    }
  }
  return obj;
}

const painter1 = paint("green");
const painter2 = paint("yellow");
const painter3 = paint("red");

painter1.paints()
painter2.paints()
painter3.paints()

//Problem #2
//Compose a function called sound(). You should be able to add the following functionality to the objects listed:

// > faucet.sound()
// "Drip drip drip."
// > oldCar.sound()
// "Grumble grumble"
// > sleepyBear.sound()
// "Grrr...yawn"

const sound =  function(soundOfThing) {
  const obj = {
    makeSound: function() {
      return `${soundOfThing}`
    }
  }
  return obj;
}

const faucet = sound("Drip drip drip");
const oldCar = sound("Grumble grumble");
const sleepyBear = sound("Grrr...yawn");

faucet.makeSound();
oldCar.makeSound();
sleepyBear.makeSound();

//Problem #3
//Compose a function called throw(). The throw() function should determine the distance and speed a battle robot can throw a spear. This function should be unary, so you will need to use currying.

//Next, add the throw() function to multiple battle robots. A result might look something like this:

//> battleRobot1.throw();
//"The battle robot throws the spear 100 yards at 200 miles per hour!"

const throwFn = function(spear){
  const obj = {
    distance: function(yards) {
      return `The battle robot throws the spear ${yards} at ${miles} per hour!`
    },
    speed: function(miles) {
      return `The battle robot throws the spear ${yards} at ${miles} per hour!`
    }
  }
  return obj;
}

const battleRobot1 = throw(spear);

const battleRobot1 = function() {}

// Problem #4
//First use closures to create three dance moves. For instance, a dancer should be able to do the following:

// > dancer.samba()
// "The dancer sambas!"
// > dancer.tango()
// "The dancer tangos!"

// Then add the dance moves to a dancer.

function danceMove(move) {
    return function(){
      return `${move}`;
    }
}

const dancer = function(){
  obj = {
    samba: danceMove('The dancer sambas!'),
    tango: danceMove('The dancer tangos!')
  }
  return obj;
}

> dancer.samba()
"The dancer sambas!"
> dancer.tango()
"The dancer tangos!"



