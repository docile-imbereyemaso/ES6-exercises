const validatePhoneNumber=phoneNumber=>{
   // Using the reg expression 
    const regex = /^(\d{3}[-\s]?\d{3}[-\s]?\d{4})$/;

    return regex.test(phoneNumber)
}

console.log(validatePhoneNumber(1234567890))