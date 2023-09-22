const   btnSignIn = document.getElementById("Sign-in"),
        btnSignUp = document.getElementById("Sign-up"),
        formRegister = document.querySelector(".register"),
        formLogin = document.querySelector(".login");

btnSignIn.addEventListener("click", e => {
    formRegister.classList.add("hide");
    formLogin.classList.remove("hide");

})

btnSignUp.addEventListener("click", e => {
    formLogin.classList.add("hide");
    formLogin.classList.add("hide")
    formRegister.classList.remove("hide");


})
