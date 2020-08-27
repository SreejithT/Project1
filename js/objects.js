// // let student={
// //     rollno:1,
// //     name:"amal",
// //     age:20,
// //     marks:[80,90,70],
// //     display:function(){
// //         console.log(this.rollno)
// //     },
// //     average:function(){
// //         return this.marks.reduce((x,y)=>x+y)/this.marks.length
// //     }

// // }

// // // student.average()
// // console.log(student.average())





// // let obj={
// //     name:"anna",
// //     age:22

// // }
// // console.log(obj,typeof obj)

// // let obj1={
// //     name:"Steve",
// //     age:25
// // }

// // obj1.address="B-12"
// // obj1['city']="Ernakulam"
// // console.log(obj1)
// // console.log(obj1['name'])

// let person={
//     name:"Joe",
//     age:22,
//     address:"B-13"
// }
// let student1=Object.create(person)
// // console.log(student1)
// // console.log(person.isPrototypeOf(student1))
// // console.log(person.hasOwnProperty("name"))
// // console.log(student1.hasOwnProperty("name"))
// student1.rollno=1
// student1.batch="CSE"
// student1.name="Sree"
// console.log(student1)
// student1.__proto__.name="Rose"
// console.log(student1)
// let student3=Object.assign(person)
// console.log(student3)
// // Object.freeze(student1) // object now becomes immutable 
// // student1.name="Srj"
// // console.log(Object.isFrozen(student1))
// // console.log(student1)

// // Object.seal(student1) // properties can be updated but cannot be added to an object
// student1.branch='EEE'
// student1.rollno=2 
//     console.log(student1)

// function Employee(id,name,salary){
//     this.Id=id
//     this.ename=name
//     this.salary=salary
//     this.incSalary=function (amount){
//         this.salary+=amount
//     }

// }

// let obj=new Employee("E101","Allen",4000)
// obj.incSalary(8000)
// console.log(obj)

// function Person(name,age,address){
//     this.Name=name
//     this.age=age
//     this.address=address
//     this.display=function(){
//         console.log("Name :",this.Name)
//         console.log("Age :",this.age)
//         console.log("Address :",this.address)
//     }
// }
// let person1=new Person("Joe",22,"A-12")
// person1.display()   

// console.log("\u00A9") // unicode characters

var numarray=[10,19,30,40,50,60,70] //Array destruction
var [a,b,c,d,e,f,g]=numarray
console.log(a)
console.log(b)
console.log(numarray.every((x)=>x%2==0)) // all elements should satisy the condition  o/p-boolean
console.log(numarray.some((x)=>x%2==0))     // some element should satisy the condition o/p-boolean
