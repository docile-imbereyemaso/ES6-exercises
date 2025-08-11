const countingZeros =num=>{

let arr =[];
for(let i=1;i<=num;i++){
 if(i %10===0){
    arr.push(i);
 }
}
return arr.map(num=>{
    return [...String(num)].map(num=>Number(num)).filter(num=>num==0)
}).flat().length;
}

console.log(countingZeros(7))