const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "william" && password === "william123") {
        window.location.replace("second.html");
 
    } 
    if (username === "safer" && password === "safer123") {
        window.location.replace("second.html");
 
    } 
    if (username === "noah" && password === "noah123") {
        window.location.replace("second.html");
 
    } 
    if (username === "hamood" && password === "hamood123") {
        window.location.replace("second.html");
 
    } 
})
