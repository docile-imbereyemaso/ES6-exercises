//odd squares

const oddSquares = inputArray=>inputArray.filter(num=>num%2 !==0).map(num=>num**2);

console.log(oddSquares([1, 2, 3, 4, 5, 6]))