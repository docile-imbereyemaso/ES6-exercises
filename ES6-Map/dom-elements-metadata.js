let element1 ={tag:"div",id:1};
let element2 = {tag:"div",id:2};

const weakMap = new WeakMap();

weakMap.set(element1,{clicked:true,color:"red"});
weakMap.set(element2,{clicked:true,color:"red"});

element1 =null;

console.log(weakMap.has(element1));