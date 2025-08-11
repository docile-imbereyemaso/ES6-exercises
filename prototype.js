function Person(name,age,gender){
    this.name = name;
    this.age = age;
    this.gender = gender
}

Person.prototype.displayDetails=function(){
    return `My name is ${this.name} and I am ${this.age}years old and  my gender is ${this.gender}`
}
const person = new Person("Docile",30,"Male");

console.log(person.displayDetails());

const proto ={
    name:"Docile",
    age:20
}
// Object.create() is used to create the object using the existing object as prototype of exisiting object
const obj = Object.create(proto);
obj.name="Ishimwe";
obj.age =30;
console.log(obj)