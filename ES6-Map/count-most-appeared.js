const mostAppearedString =(str)=>{
    const countMap = new Map();

    for(let chars of str){
        let newCount = (countMap.get(chars)||0)+1;
        countMap.set(chars,newCount);
    }
   // counting the most appeared the char
     let maxChar = null;
     let maxCount =0
   for([char,count] of countMap){
      if(count > maxCount){
        maxChar = char;
        maxCount = count;
      }
   }
    return maxChar
}

console.log(mostAppearedString("hello"))