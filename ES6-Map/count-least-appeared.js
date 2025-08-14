const leastAppearedChar = (str)=>{
    let countMap = new Map();

    for(let chars of str){
        let newCount = (countMap.get(chars)||0)+1;
        countMap.set(chars,newCount);
    }

    // char and counts;

    let minChar = null;
    let minCount  = Infinity;

    for([char,count] of countMap){
       if(count < minCount){
        minChar = char;
        minCount = count;
       }
    }

    return minChar
}

console.log(leastAppearedChar("helloefeh"))