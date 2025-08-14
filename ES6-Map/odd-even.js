const numbers = Array.from({ length: 50 }, (_, i) => i + 1);
// console.log(numbers)

const number = Array.from({length:50},(_,i)=>i+1);
// console.log(number);


const numberMap = new Map();
numberMap.set("even",[]);
numberMap.set("odd",[]);

number.forEach((num)=>{
    if(num % 2 ===0){
        numberMap.get("even").push(num);
    }
    else{
        numberMap.get("odd").push(num);
    }
});

console.log(numberMap.get("even"));

