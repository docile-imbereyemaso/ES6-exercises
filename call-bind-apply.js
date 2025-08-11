function calculateArea(){
    return this.width * this.height;
}

const triangle = {width:20, height:30};

const area = calculateArea.bind(triangle);

//With help of apply find maximum number in array using apply

const numbers =[34, 12, 57, 28, 91];

const maximum = Math.max.apply(null,numbers);

// console.log(maximum)

// with help of call method, capitalize the first letter on john;

function capitalize(){
    return this.charAt(0).toUpperCase()+this.slice(1);
}

const name ="john";

const capitalizeLetter = capitalize.call(name);
// console.log(capitalizeLetter);

// function that calculates the discounted price of products with fixed percentage

function calculateDiscount(){

    return `$${Math.round(this.initialPrice *10/100)}`;

}

const price ={initialPrice:50};

const discountedPrice = calculateDiscount.bind(price);
// console.log(discountedPrice())

//convert array-like-object into regular array

function convertArrayLikeObject(arrayLike){

    return Array.prototype.slice.apply(arrayLike)
}
const arrayLikeObject = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
console.log(arrayLikeObject)
const result = convertArrayLikeObject(arrayLikeObject);


console.log(result)