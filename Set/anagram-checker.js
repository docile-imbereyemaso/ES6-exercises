const anagramChecker =(string1,string2)=>{

    let str1 = string1.replace(/\s+/g,"");
    let str2 = string2.replace(/\s+/g,"");

    //Check the length of strings lengths

    if(str1.length !== str2.length) return false;

    // Create the new sets

    const set1 = new Set(str1);
    const set2 = new Set(str2);

    // check if size of sets are the same

    if(set1.size !== set2.size) return false;

    //check if they have same characters

    for(let chars of set1){
        if(!set2.has(chars)) return false;
    }



    return true
}

console.log(anagramChecker("apple", "papel")); // true
console.log(anagramChecker("apple", "appee")); // false