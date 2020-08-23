function validate(){
    var name=document.getElementById("N1")
    if (name.value==""){
        alert("Name cant be empty")
        name.focus()
        return false
    }
    var email=document.getElementById("E1")
    if (email.value==""){
        alert("Email cant be empty")
        email.focus()
        return false
    }
    var password=document.getElementById("P1")
    if (password.value==""){
        alert("Password cant be empty")
        password.focus()
        return false
    }
    var mobile=document.getElementById("M1")
    if (mobile.value==""){
        alert("Number cant be empty")
        mobile.focus()
        return false
    }
    if(isNaN(mobile.value)){
        alert("invalid mobile number")
        mobile.focus()
        return false
    }
    if(mobile.value.length != 10){
        alert("Not 10 digits")
        mobile.focus()
        return false
    }

    if(password.value.length < 3 || password.value.length > 5){
        alert("Password is too short/long")
        password.focus()
        return false
    }


    

}