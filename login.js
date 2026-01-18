const validUsername = "admin";
const validPassword = "1234";

const form = document.getElementById("loginForm");
const error = document.getElementById("error");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(username === validUsername && password === validPassword){
        alert("Login successful!");
        window.location.href = "admin.html";
    } else {
        error.textContent = "Invalid username or password!";
    }
});
