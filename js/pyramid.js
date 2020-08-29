// let pyramid={
//     show:function(){
//     // var x=document.getElementById("n1").value
//     for (let i=1;i<=5;i++){
//         for (let j=1;j<=i;j++){
//         console.log("*")
//         }
//         // console.log("\n")   
//     }

//     }
// }

// pyramid.show()

function pyramid(){
    var x=document.getElementById("n1").value
    for (let i=1;i<=x;i++){
        for (let j=1;j<=i;j++){
        console.log("*")
        
        }
        console.log("\n")   
    }
    
}