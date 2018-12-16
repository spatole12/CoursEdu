var confirmPassword = document.getElementById("signUpConfirmInputPassword");
var inputPassword = document.getElementById("signUpInputPassword");

function validationPassword(){
    if(confirmPassword.value == inputPassword.value){
        document.getElementById("signUpConfirmInputPassword").setCustomValidity('');
    }else{
        document.getElementById("signUpConfirmInputPassword").setCustomValidity("Password do not match!");
    }
}

// inputPassword.onchange = validationPassword; 
// confirmPassword.onkeyup = validationPassword;



// (function(){
//     const signUpForm = document.getElementById("signup-form");
//     if(signUpForm){
//         var confrimPassword = document.getElementById("signUpConfirmInputPassword");
//         var inputPassword = document.getElementById("signUpInputPassword");
//         signUpForm.addEventListener("submit",event=>{
//             // alert(confrimPassword.value);
//             event.preventDefault();
//             try{
//                 if(confrimPassword.value == inputPassword.value){
//                     // confrimPassword.setCustomValidity("not true");
//                     alert("good");
//                 }else{
//                     // confrimPassword.setCustomValidity("");
//                     alert("bad");
//                 }

//             }catch(e){

//             }
//         })
//     }
// })();