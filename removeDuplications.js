const removeDuplications=inputArray=>inputArray.filter((element,index,self)=>self.indexOf(element)==index);

console.log(removeDuplications([1,3,4,5,6,6]));