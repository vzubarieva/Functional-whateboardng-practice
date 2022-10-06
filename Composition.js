// Problem #1
// Compose a function called paint() and then add it to three different painters. Each painter can only paint with one color. This should be the end result:

// > painter1.paints()
// "Paints green!"
// > painter2.paints()
// "Paints yellow!"
// > painter3.paints()
// "Paints red!"

const paint = function (color) {
  const obj = {
    paints: function () {
      return `Paints ${color}!`;
    },
  };
  return obj;
};

const painter1 = paint("green");
const painter2 = paint("yellow");
const painter3 = paint("red");

painter1.paints();
painter2.paints();
painter3.paints();

//Problem #2
//Compose a function called sound(). You should be able to add the following functionality to the objects listed:

// > faucet.sound()
// "Drip drip drip."
// > oldCar.sound()
// "Grumble grumble"
// > sleepyBear.sound()
// "Grrr...yawn"

const sound = function (soundOfThing) {
  const obj = {
    makeSound: function () {
      return `${soundOfThing}`;
    },
  };
  return obj;
};

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

const throwFn = function (robot) {
  const obj = {
    throw: function (distance) {
      return function (speed) {
        return `The battle ${robot} throws the spear ${distance} at ${speed} per hour!`;
      };
    },
  };
  return obj;
};
const robot1 = throwFn("robot1");

// const canThrow = (robot) => ({
//   throw : function(strength){
//     return function(height){
//       return ${robot.name} throws the spear ${height * 10} yards at ${strength * 20} miles per hour!
//     }
//   }
// });

// const robot = (name) => {
//   let battleRobot = {
//     name
//   }
//   return {...battleRobot, ...canThrow(battleRobot)};
// };
// const bigRobot = robot("Big robot");
// console.log(superBee.throw(5)(20));

// Problem #4
//First use closures to create three dance moves. For instance, a dancer should be able to do the following:

// > dancer.samba()
// "The dancer sambas!"
// > dancer.tango()
// "The dancer tangos!"

// Then add the dance moves to a dancer.

function danceMove(move) {
  return function () {
    return `${move}`;
  };
}

const dancer =
  function () {
    obj = {
      samba: danceMove("The dancer sambas!"),
      tango: danceMove("The dancer tangos!"),
    };
    return obj;
  } > dancer.samba();
"The dancer sambas!" > dancer.tango();
("The dancer tangos!");
