const baseUrl = "/students";

// CHECK LOGIN FIRST
window.onload = function() {
    const userEmail = localStorage.getItem("userEmail");

    if (!userEmail) {
        window.location.href = "login.html";
    }
};

// ADD STUDENT
function addStudent() {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const ownerEmail = localStorage.getItem("userEmail");

    const student = {
        name: name,
        email: email,
        ownerEmail: ownerEmail
    };

    fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(student)
    })
    .then(response => response.json())
    .then(data => {
        alert("Student Added Successfully");
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
    });
}


// GET ONLY LOGGED IN USER STUDENTS
function getStudents() {

    const ownerEmail = localStorage.getItem("userEmail");

    fetch(baseUrl)
    .then(response => response.json())
    .then(data => {

        const tableBody = document.querySelector("#studentTable tbody");
        tableBody.innerHTML = "";

        data.forEach(student => {
            const row = `
                <tr>
                    <td>${student.id}</td>
                    <td>${student.name}</td>
                    <td>${student.email}</td>
                </tr>
            `;
            tableBody.innerHTML += row;
        });
    });
}

// LOGOUT
function logout() {
    localStorage.removeItem("userEmail");
    window.location.href = "login.html";
}
