
  let loginsUsers = new Set();

function logIn(userID){
  
  
        loginsUsers.add(userID);
        console.log(`The ${userID} is logged in`);
        return loginsUsers
    
}

function logOut(userID){
    if(loginsUsers.has(userID)){
        loginsUsers.delete(userID);
        console.log(`the user ${userID} has log out`);
        return loginsUsers
    }else{
        console.log(`the user ${userID} hasn't log in`);
    }
};

console.log(logIn("user2"));
console.log(logIn("user1"));
console.log(logOut("user2"))

// console.log(loginsUsers)

function checkExistence(userID){
    if(loginsUsers.has(userID)){
        console.log(`The ${userID} exists`);
    }else{
        console.log(`the ${userID} doesn't exist`)
    }
}

console.log(checkExistence("user3"))

