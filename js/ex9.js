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
    id=document.getElementById("id").value
    name=document.getElementById("name").value
    price=document.getElementById("price").value

 let obj=Object.create(Product)
 obj.ID=id
 obj.Name=name
 obj.Price=price
 List.push(obj)
 
obj.display()
//  console.log(obj)
 console.log(List)

}
