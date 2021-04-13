
//  login form validation

function validatelogin(){
    let logemail = document.getElementById("logemail").value;
    let emailerror = document.getElementById("emailerror");
    let logpwd = document.getElementById("logpwd").value;
    let passerror =  document.getElementById("passerror");
    if(logemail == "" || logpwd == ""){
        alert("Email Id and Password cannot be empty");
        return false
    }
    else if(logemail.length != 0 ){
        ValidateEmail();

    }
    else if(logpwd.length != 0){
        ValidatePwd();
    }
    else{
return true;
    }
        
    
}

// login email validadtion 

function ValidateEmail() {
    let logemail = document.getElementById("logemail").value;
    let emailerror = document.getElementById("emailerror");
    emailerror.innerHTML = "";
    var emailexpr = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
   if (!emailexpr.test(logemail)) {
     emailerror.innerHTML= '<span style="font-size: 14px;color:red" >Invalid email address!!</span>'
     return false;
    }
    else if(emailexpr.test(logemail)){
        return true;
    }  
}

// login form password validation
function ValidatePwd() {
    let logpwd = document.getElementById("logpwd").value;
 let passerror =  document.getElementById("passerror");
 passerror.innerHTML =";"
 var enoughRegex = new RegExp("(?=.{8,}).*", "g");
 if (!enoughRegex.test(logpwd)) {
    passerror.innerHTML= '<span style="font-size: 14px;color:red" >Password should contain at least 8 characters</span>'
    return false;
   }
   else if(emailexpr.test(logemail)){
       return true;
   }  
}

// sign up form validation

function validatesignup(){
    let username = document.getElementById("username").value;
    let usererr = document.getElementById("usererr");
    let mobile = document.getElementById("mobile").value;
    let mobileerr =  document.getElementById("mobileerr");
    let email = document.getElementById("email").value;
    let emailerr = document.getElementById("emailerr");
    let pwd = document.getElementById("pwd").value;
    let strength =  document.getElementById("strength");
    let pwdform =  document.getElementById("pwdform");
    if(username == "" || mobile == "" || email == "" || pwd ==""){
        alert("All Fields are mandatory. Please fill out all the fields!!");
        return false
    }
     else if(username.length != 0){
    Validateuser();
    }
   
    else if(mobile.length != 0){
        Validatesignmob();
        }
     
     else if(email.length != 0){
        ValidatesignEmail();
        }
    else if(pwd.length != 0){
        Validatesignpass();
        }
    else{
        return true;
    }
}



function firstfocus()
{
document.signup.username.focus();
return true;
}
// This function will validate User id.
function Validateuser() {
    let username = document.getElementById("username").value;
    let usererr = document.getElementById("usererr");
    usererr.innerHTML = "";
 if(username.length==0){
    document.getElementById("username").style.border="2px solid red";
    usererr.innerHTML= '<span style="font-size: 14px;color:red" >Username cannot be blank</span>'
    return false
 }
    else if(username.length<3){
        document.getElementById("username").style.border="2px solid red";
        usererr.innerHTML= '<span style="font-size: 14px;color:red" >Username must be between 3 and 12 characters</span>'
        return false
    }
    else if(username.length>=3){
        document.getElementById("username").style.border="2px solid green";
            return true;
    }
    
}

// validate signup form mobile

function Validatesignmob() {
    let mobile = document.getElementById("mobile").value;
    let mobileerr = document.getElementById("mobileerr");
    mobileerr.innerHTML = "";
    var mobileexpr = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
   if (!mobileexpr.test(mobile)) {
    document.getElementById("mobile").style.border="2px solid red";
     mobileerr.innerHTML= '<span style="font-size: 14px;color:red" >Valid Formats are [XXX-XXX-XXXX] [XXX.XXX.XXXX] [XXX XXX XXXX]</span>'
     return false;
   }
    else if(mobileexpr.test(mobile)){
        document.getElementById("mobile").style.border="2px solid green";
        return true;
    }
    
}

// This function will validate email.

function ValidatesignEmail() {
    let email = document.getElementById("email").value;
    let emailerr = document.getElementById("emailerr");
    emailerr.innerHTML = "";
    // var emailexpr = /^([\w\d\.\-]+)@([\w\d\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
     var emailexpr = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
    if (!emailexpr.test(email)) {
        document.getElementById("email").style.border="2px solid red";
        emailerr.innerHTML= '<span style="font-size: 14px;color:red" >Invalid email address!!</span>'
        return false;
       }
        else if(emailexpr.test(email)){
            document.getElementById("email").style.border="2px solid green";
            return true;
        }
    
}

// This function will validate password.

function Validatesignpass(){
    let pwd = document.getElementById("pwd").value;
    let strength =  document.getElementById("strength");
    let pwdform =  document.getElementById("pwdform");
    strength.innerHTML = "";
    pwdform.innerHTML = "";
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
    
    if(strongRegex.test(pwd)) {
        strength.innerHTML = '<span style="font-size: 14px;color:green">Strong!</span>';
        document.getElementById("pwd").style.border="2px solid green";
        return true;
    } else if(mediumRegex.test(pwd)) {
        strength.innerHTML = '<span style="font-size: 14px;color:orange">medium!</span>';
        document.getElementById("pwd").style.border="2px solid orange";
        pwdform.innerHTML = '<span style="color: white;">Password must have at least 8 characters that include atleast 1 lowercase character, 1 uppercase character, 1 number and 1 special character in (!@#$%&*)</span>'
        return false;
    } else {
        strength.innerHTML = '<span style="font-size: 14px;color: red;">Weak!</span>';        
        document.getElementById("pwd").style.border="2px solid red";
        pwdform.innerHTML = '<span style="color: white;">Password must have at least 8 characters that include atleast 1 lowercase character, 1 uppercase character, 1 number and 1 special character in (!@#$%&*)</span>';
        return false;
    }
}






