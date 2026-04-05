//code with desc


//Reverse a String

function reverse(str) {
  return str.split('').reverse().join('');
}


//Check Palindrome

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}




//Find Largest Number in Array
function max(arr) {
  return Math.max(...arr);
}




//Remove Duplicates from Array
function reomoveDuplicates(arr) {
return [...new Set(arr)];
}

//Fibonacci Sequence
function fib(n){
    if(n <=1) return n;
    return fib(n-1) + fib(n-2);
}

//Flatten Array
function flatten(arr){
    return arr.flate(Infinity);
}

// Count Frequency
function freq(arr){
    return arr.reduce((acc,val)=>{
        acc[val] = (acc[val] || 0 ) +1;
        return acc;
    }, {})
}



//Anagram Check => if two strings are anagrams, they will have the same characters in the same frequency, but in different order.

function isAnagram(a ,b){
    return a.split('').sort().join('') === b.split('').sort().join('');
}

//Debounce Function

function debounce(fn,delay){
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(()=> fn(...args), delay);
    }
}

//Promise.all Polyfill

function promiseAll(promises){ 
return new Promise((resolve, reject) => {
    let results = [];
    let count = 0;

    promiseAll.forEach((p,i)=>{
        Promise.resolve(p).then(res =>{
            results[i]=res;
            count++;
            if(count === promises.length){
                resolve(results);
            }
        }).catch(reject);
    })
})

}
