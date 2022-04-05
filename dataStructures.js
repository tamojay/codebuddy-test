// level {1/2/3}
// Level 2
// Q:1

const removeEven = (arr) => {
   return arr.filter(x => x % 2 !== 0)
};

// console.log(removeEven([1, 3, 4, 6, 7, 8]));

// Q:2

const replaceVowels = (str) => {
   const upStr = str.split("").map(s => (s === 'a' || s === 'e' || s === 'i' || s === 'o' || s === 'u') ? s.toUpperCase() : s)
   return upStr.join("");
}

// console.log(replaceVowels("Elie"));

// Q:3

const maxNo = (arr) => {
   return arr.sort((a, b) => b - a)[0]  //sorts the array in descending order and returns the 0th element
};

// console.log(maxNo([1, 3, 4, 6, 7, 8, 2, 5]))
