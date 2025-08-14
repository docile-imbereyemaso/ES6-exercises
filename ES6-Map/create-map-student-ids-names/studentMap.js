let students = new Map(
    [
        ["24RP05672","Docile"],
        ["24RP05673","Shami"],
        ["24RP05674","Valens"]
    ]
)
// console.log(students);
// console.log(students.get("24RP05672"));
console.log(students.has("24RP05672"))
console.log(students.delete("24RP05672"));

// example two with use of an object

const student = new Map(
    [
        ["24RP05672",{name:"Docile",age:20}]
    ]
)
console.log(student.get("24RP05672").age)

