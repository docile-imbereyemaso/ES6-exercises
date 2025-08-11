const convertNullableValues=obj=>{
 let resultObject ={}
   for(let key in obj){
    if(obj[key] ===null){
        obj[key]=0;
    }else if(obj[key]===undefined){
        obj[key] =''
    }

    resultObject[key] = obj[key]
   } 

   return resultObject
}

console.log(convertNullableValues({name:undefined,age:null}))