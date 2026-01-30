// Homework 1: JavaScript Fundamentals
// Name: Henry Tang
// Date: 1/29/2026

// ============ PART 1: ARRAY FUNCTIONS ============
const numbers = [10, 5, 8, 12, 3, 7, 15, 2, 9, 6];

function sum(arr) {
  // TODO: Return the sum of all numbers
  // Hint: Use a for loop or arr.reduce()
  let total = 0;
  for (const i of arr) {
    total += i;
  }
  return total;
}

function average(arr) {
  // TODO: Return the average
  // Hint: Use your sum function!
  return sum(arr) / arr.length;
}

function min(arr) {
  // TODO: Return the smallest number
  // Hint: Use Math.min(...arr)
  return Math.min(...arr);
}

function max(arr) {
  // TODO: Return the largest number
  let most = arr[0];
  for (const i of arr) {
    if (i > most) {
        most = i;
    }
  }
  return most;
}

// ============ PART 2: STRING FUNCTIONS ============
function capitalize(str) {
  // TODO: Return string with first letter capitalized
  // "hello" -> "Hello"
  const firstLetter = str.charAt(0).toUpperCase(); 
  const remainingLetters = str.substring(1);
  return firstLetter.concat(remainingLetters);
}

function reverse(str) {
  // TODO: Return the string reversed
  // "hello" -> "olleh"
  // Hint: str.split("").reverse().join("")
  return str.split("").reverse().join("");
}

function countVowels(str) {
  // TODO: Return count of vowels (a, e, i, o, u)
  // "hello" -> 2
  let numOfVowels = 0;
  for (const s of str.toLowerCase().split("")) {
    if (s === "a" || s === "e" || s === "i" || s === "o" || s === "u") {
        numOfVowels++;
    }
  }
  return numOfVowels;
}

// ============ PART 3: OBJECT ============
const student = {
  name: "Your Name",
  age: 20,
  grades: [85, 92, 78, 90, 88],
  
  getAverage: function() {
    // TODO: Return average of this.grades
    return average(this.grades);
  },
  
  isHonorRoll: function() {
    // TODO: Return true if average > 85
    if (this.getAverage() > 85) {
        return true;
    } else {
        return false;
    }
  }
};

// ============ TEST YOUR CODE ============
console.log("=== Part 1: Arrays ===");
console.log("Numbers:", numbers);
console.log("Sum:", sum(numbers));
console.log("Average:", average(numbers));
console.log("Min:", min(numbers));
console.log("Max:", max(numbers));

console.log("\n=== Part 2: Strings ===");
console.log("capitalize('hello'):", capitalize("hello"));
console.log("reverse('hello'):", reverse("hello"));
console.log("countVowels('hello'):", countVowels("hello"));

console.log("\n=== Part 3: Object ===");
console.log("Student:", student.name);
console.log("Grades:", student.grades);
console.log("Average:", student.getAverage());
console.log("Honor Roll:", student.isHonorRoll());


// ============ Test Output ============
// === Part 1: Arrays ===
// Numbers: [
//   10,  5, 8, 12, 3,
//    7, 15, 2,  9, 6
// ]
// Sum: 77
// Average: 7.7
// Min: 2
// Max: 15
// 
// === Part 2: Strings ===
// capitalize('hello'): Hello
// reverse('hello'): olleh
// countVowels('hello'): 2
// 
// === Part 3: Object ===
// Student: Your Name
// Grades: [ 85, 92, 78, 90, 88 ]
// Average: 86.6
// Honor Roll: true