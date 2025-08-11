//array statistics

const arrayStats =inputArray=>{
    const sum = inputArray.reduce((acc,curr)=>acc+curr,0);
    const average = Math.round(sum/inputArray.length);
    const min = Math.min(...inputArray);
    const max = Math.max(...inputArray);
    
    return{sum,average,min,max}
}

console.log(arrayStats([1, 2, 3, 4, 5]))