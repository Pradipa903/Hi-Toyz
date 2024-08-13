function validate(){
    const username = document.getElementById("username").value
    const email = document.getElementById("email").value
    const age = document.getElementById("age").value
    const password = document.getElementById("password").value
    const male = document.getElementById("male")
    const female = document.getElementById("female")
    const agreement = document.getElementById("agreement")

    if(username.length < 8){
        alert("Username must be at least 8 characters long")
        // document.getElementById("error").innerHTML = "Username Must be at least 8 characters long<br>"
    }
    else if(!email.endsWith("@gmail.com")){
        alert("Email must be @gmail.com")
    }
    else if(age < 13){
        alert("Age must be bigger than 13")
    }
    else if(isAlphaNum(password) == false){
        alert("Password must be at least 1 alphabet and 1 number")
    }
    else if(!male.checked && !female.checked){
        alert("You must select the gender")
    }
    else if(!agreement.checked){
        alert("You must agree with the terms and conditions")
    }
    var confirm = confirm("Do you want to continue")
    // else window.location.href = "home.html"
    
    // if(confirm == true){
    //     document.getElementById("error").innerHTML = "Welcome"
    // }
    // else document.getElementById("error").innerHTML = "Registration Aborted"
    var prompt = prompt("Type human if youre human")
    if(prompt == "human"){
        document.getElementById("error").innerHTML = "You must be human to regiester"
    }
    else{
        document.getElementById("error").innerHTML = "Welcome"
    }
}

function isAlphaNum(password){
    var isAlpha = false
    var isNum = false
    for(let i = 0; i<password.length; i++){
        if(isNaN(password[i])){//isnotanumber
            isAlpha = true
        }
        else {
            isNum = true
        }
    }
    if(isAlpha == false || isNum == false){
        return false
    }
    return true
}
