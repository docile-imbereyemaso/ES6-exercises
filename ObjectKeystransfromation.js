const keysCapitalization = keys=>keys.toUpperCase();
const transformedKeys =(inputObject,callback)=>{
    let result ={};
    for(let keys in inputObject){
        result[callback(keys)] = inputObject[keys]
    }
    return result
} 
const inputObject = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

console.log(transformedKeys(inputObject,keysCapitalization))