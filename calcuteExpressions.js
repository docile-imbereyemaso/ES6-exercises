const calculateExpression =(str)=>eval(str);

console.log(calculateExpression("5 + 4 * 3 / 2 - 1"));
console.log(calculateExpression("( 2 + 3 ) * ( 4 - 1 )"));