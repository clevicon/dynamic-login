// let login = document.querySelector('.login');
// let register = document.querySelector('.register');
// let formTitle = document.querySelector('.form-title');
// let des = document.querySelector('.des');
// let login = form.querySelector('.login');


let loginBtn = document.querySelector(".login-btn");
let registerBtn = document.querySelector(".register-btn");
let auth = document.querySelector(".auth");
let tes = document.querySelector(".tes");




$(".login").click(function(){
    $(".des").css({"transform":"translateX(0px)"});
    
    $(".login-form").css({"transform":"translateX(-6px)"});
    // $(".login-form").css({" @media screen and (min-width:1500px)":"-800px"});
    
    $(".register-form").css({"transform":"translateX(200px)"});


});

$(".register").click(function(){
    $(".des").css({"transform":"translateX(85px)"});
    $(".register-form").css({"transform":"translateX(-283px)"});
    $(".login-form").css({"transform":"translateX(-350px)"});

});

loginBtn.addEventListener("click",function(){
    alert('not functional for now');
});

registerBtn.addEventListener("click",function(){
    alert('not functional for now');
});

// auth.addEventListener("click",function(){
//     let loginPassword = document.getElementById("password-login");
//     let registerPassword = document.getElementById("password-register");


//     if( loginPassword.type === "password" || registerPassword.type === "password"){

//         loginPassword.type = "text";
//         registerPassword.type = "text";
//         $(".auth").css({"color":"red"});
//         auth.innerText = "hide";

//     }
//     else{
//         loginPassword.type = "password";
//         registerPassword.type = "password";

//         $(".auth").css({"color":"green"});
//         auth.innerText = "show";
//     }
// });



$(".auth").click(function(){


    let loginPassword = document.getElementById("password-login");
        let registerPassword = document.getElementById("password-register");
    
    
        if( loginPassword.type === "password" || registerPassword.type === "password" ){
        
            loginPassword.type = "text";
            registerPassword.type = "text";

            $(".auth").css({"color":"red"});
            auth.innerText = "hide";
            tes.innerText = "hide";

    
        }
        else{
            loginPassword.type = "password";
            registerPassword.type = "password";

            $(".auth").css({"color":"green"});
            auth.innerText = "show";
            tes.innerText = "show";

        }
});

// $(".facebook").hover(function(){
    
//     $(".facebook").css({"transform":"translatey(-10px)"});
// },

// function(){

//     $(".facebook").css({"transform":"translatey(0px)"});


    
// });




