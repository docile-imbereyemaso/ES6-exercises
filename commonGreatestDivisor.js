const findGCDIterative =(a,b)=>{
    while( b !==0){
        let temp = b;

        b = a% b;

        a = temp;
    }
    return a;
}
// Example usage:
let num1 = 48;
let num2 = 18;

console.log(findGCDIterative(num1,num2))