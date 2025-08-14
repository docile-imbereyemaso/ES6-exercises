const fruits = ['apple', 'banana', 'apple', 'orange', 'banana'];
const uniqueFruits = [...new Set(fruits)];
const uniqueFruit = Array.from(new Set(fruits));
console.log(uniqueFruit)
console.log(uniqueFruits);