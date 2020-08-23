function handleEvent()
{ console.log("Function called")
    document.getElementById("p1").innerText="Hello"
    document.getElementById("p2").style.color="red"
    document.getElementById("p2").style.fontSize="30px"
}

function getvalue()
{
    let name=document.getElementById("txt1").value
    console.log(name)

}

function change(){
    document.getElementById("p3").innerHTML="Changed"
}

function getdata(){
    var Name=prompt("Name")
    console.log(Name)
    var Age=prompt("Age")
    console.log(Age)
    document.getElementById("name").value=Name
    document.getElementById("age").value=Age
    
}