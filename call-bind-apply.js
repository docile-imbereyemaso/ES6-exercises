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
console.log(capitalizeLetter)
