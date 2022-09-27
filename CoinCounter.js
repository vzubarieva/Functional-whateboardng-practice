// Coin Counter
// Create a coin counter application that takes X amount of money (such as $4.99) and determines the exact amount of change needed in quarters, dimes, nickels and pennies. Do not worry about adding a user interface to the application. Instead, focus on writing good tests and functional code.

// Part 1
// Create a coin counter function that uses recursion to solve the problem.

const coinCounter = (num)  => {
if(isNaN(num)) {
  throw new Error('Please enter the number')
};

if(num === 0){
  return "";

} else if (num > 25){
  return `${Math.floor(num/25)} quarter(s) ${coinCounter(num % 25)}`;
} else if (num >10){
  return `${Math.floor(num/10)} dime(s) ${coinCounter(num % 10)}`;
}else if (num >5){
  return `${Math.floor(num/5)} nickel(s) ${coinCounter(num % 5)}`;
}else{
  return `${num} cent(s)`
}}

// Part 2
// Create a coin counter function that uses a closure that can be used with functions for each type of change (quarters, nickels, dimes and pennies). You can use recursion if you like.

const coinCounterClosure = (num) => {
  const quarters = Math.floor(num/25);
  const dimes = Math.floor((num - quarters*25)/10);
  const nickels = Math.floor((num - quarters*25 - dimes*10)/5);
  const pennies = Math.floor((num - quarters*25 - dimes*10 - nickels*5));
    return `${quarters} quarters ${dimes} dimes ${nickels} nickels ${pennies} pennies`;

}