"use strict";
fetch("https://dummyjson.com/users")
    .then((res) => res.json())
    .then((data) => {
    const tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = data.users
        .map((user) => `
            <tr>
                <td>${user.id}</td>
                <td>${user.firstName}</td>
                <td>${user.lastName}</td>
                <td>${user.age}</td>
                <td>${user.address.city}</td>
            </tr>
        `)
        .join("");
})
    .catch((err) => console.error("Error:", err));
