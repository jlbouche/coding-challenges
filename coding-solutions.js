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