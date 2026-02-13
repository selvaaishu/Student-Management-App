const authBaseUrl = "/students";

// LOGIN
function login() {

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    fetch(authBaseUrl + "/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, password: password })
    })
    .then(res => res.json())
    .then(data => {

        if (data.email) {
            localStorage.setItem("userEmail", data.email);
            alert("Login Successful");
            window.location.href = "index.html";
        } else {
            alert("Invalid Credentials");
        }
    });
}


// SIGNUP
function signup() {

    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    fetch(authBaseUrl + "/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name, email: email, password: password })
    })
    .then(res => res.json())
    .then(data => {
        alert("Signup Successful");
        window.location.href = "login.html";
    });
}

function goToSignup() {
    window.location.href = "signup.html";
}

function goToLogin() {
    window.location.href = "login.html";
}
