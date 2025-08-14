const countRepeatingChar = (str)=>{
    let countMap = new Map();

    for(let chars of str){
        const newCount = (countMap.get(chars)||0)+1;
        countMap.set(chars,newCount)
    }

     // count in countMap

     for(let [char,count] of countMap){
        if(count ===1){
            return char;
        }
     }
    return null;
}

console.log(countRepeatingChar('hello'))