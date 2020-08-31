let Product={
    ID:"",
    Name:"",
    Price:"",
    display:function(){
        console.log("Product ID :",this.ID)
        console.log("Product Name :",this.Name)
        console.log("Product Price :",this.Price)
    }
}
var List=new Array()
function submit(){
   let id=document.getElementById("id").value
   let name=document.getElementById("name").value
    let price=document.getElementById("price").value

 let obj=Object.create(Product)
 obj.ID=id
 obj.Name=name
 obj.Price=price
//  let str=JSON.stringify(obj) // converts objects to string format
// let obj2=JSON.parse(str)     // converts string to object format
 List.push(obj)
//  localStorage.setItem("k",str)
 
obj.display()
//  console.log(typeof obj2)
 console.log(List)

}
