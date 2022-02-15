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

// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

function findHumanCatDogYears(humanYears){
  let catYears = 15 + (humanYears > 1 ? 9 : 0) + (humanYears > 2 ? 4*(humanYears-2) : 0);
  let dogYears = 15 + (humanYears > 1 ? 9 : 0) + (humanYears > 2 ? 5*(humanYears-2) : 0);
  return [humanYears, catYears, dogYears];
}

//In this kata, the toFreud() function will take a string as its argument, and return a string with every word replaced by the explanation to everything, according to Freud. Note that an empty string, or no arguments, should result in the ouput being ""(empty string).

function toFreud(str){
  arr= str.split(' ')
  arr.forEach((name, index) => arr[index] = 'sex');
  return newStr=arr.join(' ')
}

// Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.

// Task Overview:
// You have to write a function that accepts three parameters:

// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus excluding the driver.
// wait is the number of people waiting to get on to the bus excluding the driver.
// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

function enough(cap, on, wait) {
  return (cap-on >= wait) ? 0 : (on + wait) - cap;  
}

//Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

function invert(array) {
  return array.map( x => x === 0 ? x : -x);
}

//You get an array of numbers, return the sum of all of the positives ones.

function positiveSum(arr) {
  let sum=0;
  arr.map(x => (x > 0) ? sum = sum+x : 0)
  return sum;
}

// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

function betterThanAverage(classPoints, yourPoints) {
  let avg = 0;
  for (let i=0; i < classPoints.length; i++){
    avg = avg + classPoints[i] / classPoints.length
  }
  return avg > yourPoints ? false : true
}

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.

//initial
function likes(names) {
  if (names.length === 0) {
    return "no one likes this";
  } else if (names.length === 1) {
    return `${names[0]} likes this`
  } else if (names.length === 2){
    return `${names[0]} and ${names[1]} like this`
  }else if (names.length <= 3) {
    return `${names[0]}, ${names[1]}, and ${names[2]} like this`
  } else {
    return `${names[0]}, ${names[1]}, and ${names.length - 2} others like this`
  }
}
//preferred

function likes(names) {
  names = names || [];
  switch(names.length){
    case 0: return 'no one likes this'; break;
    case 1: return names[0] + ' likes this'; break;
    case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
    case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
    default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
  }
}

// Given an input of an array of digits, return the array with each digit incremented by its position in the array: the first digit will be incremented by 1, the second digit by 2, etc. Your result can only contain single digit numbers, so if adding a digit with its position gives you a multiple-digit number, only the last digit of the number should be returned.

//submitted

function incrementer(nums) {
  let newNums = [] 
  nums.map(function(num, idx) {
    if (num+ (idx+1) < 10) {
      newNums.push(num + (idx+1))
    } else {
      newNums.push((num + (idx +1)) % 10)
    }
  })
  return newNums;
}

//preferred

function incrementer(num) { 
  return num.map((n,i) => (n+i+1)%10);
}

// Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.
// This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);
// This function should return a number (final grade). There are four types of final grades:
// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases

function finalGrade (exam, projects) {
  return (exam > 90 || projects > 10) ? 100 : (exam > 75 && projects >=5) ? 90 : (exam > 50 && projects >=2) ? 75 : 0
}

// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

//submitted

function smallEnough(arr, limit){
  let maxReached = []
  arr.map(function(val, idx){
    return (val > limit) ? maxReached.push(val): 0;
  })
  return (maxReached.length > 0) ? false: true;
}

//preferred

function smallEnough(a, limit){
  return Math.max(...a) <= limit
}

// Given two arrays of integers m and n, test if they contain at least one identical element. Return true if they do; false if not.

// Your code must handle any value within the range of a 32-bit integer, and must be capable of handling either array being empty (which is a false result, as there are no duplicated elements).

function duplicateElements(m, n) {
  return m.some(val => n.includes(val))
}

// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

function well(x){
  let goodArr = []
  x.map(function(val, idx){
    return (val === 'good') ? goodArr.push(val) : null;
  })
  return (goodArr.length > 2) ? 'I smell a series!' : (goodArr.length > 0) ? 'Publish!' : 'Fail!'
}

// function getCount(str){
//   const vowels = ["a", "e", "i", "o", "u"]
//   let vowelCount = 0;
//   for (let i = 0; i < str.length; i++){
//     if (vowels.includes(str.charAt(i))){
//       vowelCount++;
//     }
//   }
//   return vowelCount;
// }

function getCount(str){
  return (str.includes('a' || 'e' || 'i' || 'o' || 'u')) ? str.match(/[aeiou]/g).length : 0;
}

// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.
// All letters will be lowercase and all inputs will be valid.

function high(str){
  let strArr = str.split(' ');
  let highestScore = 0;
  let bestWord = 0;
  for (let i = 0; i < strArr.length; i++){
    let wordScore = 0;
    for (let j = 0; j < strArr[i].length; j++){
      wordScore += (strArr[i][j].charCodeAt()-96)
    }
    if (wordScore > highestScore){
      highestScore = wordScore
      bestWord = i;
    }
  }
  return strArr[bestWord]
}

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.
// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:
// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
  return a.filter(elem => !b.includes(elem))
}

// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

function comp(arr1, arr2){
  if (!arr1 || !arr2 || arr1.length !== arr2.length){
    return false;
  } else {
    return arr1.reduce((prevVal, currVal) => prevVal+currVal, 1) === arr2.reduce((prevVal, currVal) => prevVal + Math.sqrt(currVal), 1)
  }
}

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

function persistence(num) {
  let count=0;
  num = num.toString()
  let numArr=num.split('')
  while (numArr.length > 1){
    num = numArr.reduce((prevVal, currVal) => (prevVal * currVal))
    num = num.toString()
    numArr=num.split('')
    count++;
  }
    return count;
}

// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

function basicOp(op, val1, val2){
  return (op==='+') ? val1 + val2 
    : (op==='-') ? val1-val2
    : (op==='*') ? val1*val2
    : (op==='/') ? val1/val2
    : 0
}

