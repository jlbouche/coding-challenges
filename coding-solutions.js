//Vasya and System of Equations problem: 
//https://www.codewars.com/kata/556eed2836b302917b0000a3
//Solution:

function solution(n, m){
    let counter = 0;
    for (let a = 0; a< Math.sqrt(n) + 1; a++) {
      for (let b = 0; b< Math.sqrt(m) + 1; b++) {
        if (a**2 + b === n) {
          if (a + b**2 === m) {
            counter++;
          }
        }
      }
    }
    return counter;
}

//Detect Pangram problem:
//https://www.codewars.com/kata/545cedaa9943f7fe7b000048/
//Solution:

function isPangram(str){
  let alphabet = new Set("abcdefghijklmnopqrstuvwxyz")
    for (let char of str.toLowerCase()){
        alphabet.delete(char)
        if (alphabet.size == 0) return true
    }
    return false
}

//Sum of two lowest positive integers (guaranteed only positive integers)
//https://www.codewars.com/kata/558fc85d8fd1938afb000014/
//Solution:

function sumTwoSmallestNumbers(numbers){
  let sortNum = numbers.sort(function(a,b){return a-b})
  let smallestNum = sortNum.slice(0, 2)
  let sum = smallestNum.reduce(function(a, b){return a + b})
  return sum
}

//Regex Validate PIN Code
//https://www.codewars.com/kata/55f8a9c06c018a0d6e000132
//Solution:
function validatePIN(pin){
  return /^(\d{4}|\d{6})$/.test(pin)
}

//Square Every Digit
//https://www.codewars.com/kata/546e2562b03326a88e000020/
//Solution:
function squareDigits(num){
  let numString = num.toString();
  let arrNum = numString.split('');
  let squaredArr = [];
  for (let i = 0; i < arrNum.length; i++){
    squaredArr.push(arrNum[i] ** 2);
  } 
  return parseInt(squaredArr.join(''))
}

//Bouncing Balls (recursion problem)
//https://www.codewars.com/kata/5544c7a5cb454edb3c000047
//Solution:

function bouncingBall(h,  bounce,  window) {
  if (h > 0 && bounce > 0 && bounce < 1 && window < h){
    return h < window ? -1 : 2 + bouncingBall((h * bounce), bounce, window);
  } else {
    return -1;
  }
}

//Replace with Alphabet Position (without  REGEX)
//https://www.codewars.com/kata/546f922b54af40e1e90001da/
//Solution:

function alphabetPosition(text) {
  let lowText = text.toLowerCase().split('')
  let alphNum = [];
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  for (let i = 0; i < lowText.length; i++) {
    let j = alphabet.indexOf(lowText[i]) + 1;
    if (j) alphNum.push(j);
  }
  return alphNum.join(' ');
}

//Directions Reduction
//https://www.codewars.com/kata/550f22f4d758534c1100025a/
//Solution:

function dirReduc(arr){
  const opposites = {"NORTH": "SOUTH", "EAST": "WEST", "SOUTH": "NORTH", "WEST": "EAST"}
  return arr.reduce((acc, val) => (opposites[acc.slice(-1)] === val ? acc.pop() : acc.push(val), acc), [])
}

//It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

//Return the average of the given array rounded down to its nearest integer.

//The array will never be empty.

function getAverage(marks){
  return Math.floor(marks.reduce((a, b) => a + b) / marks.length);
}

// While making a game, your partner, Greg, decided to create a function to check if the user is still alive called checkAlive/CheckAlive/check_alive. Unfortunately, Greg made some errors while creating the function.

// checkAlive/CheckAlive/check_alive should return true if the player's health is greater than 0 or false if it is 0 or below.

// The function receives one parameter health which will always be a whole number between -10 and 10.

function checkAlive(health){
  return health > 0;
}