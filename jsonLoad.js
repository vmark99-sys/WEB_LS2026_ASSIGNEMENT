// JSON Load
document.addEventListener("DOMContentLoaded", function () {
    const tableBody = document.getElementById("dogsTableBody");

    if (!tableBody) {
        console.log("Table body with id dogsTableBody was not found.");
        return;
    }

    const xhttp = new XMLHttpRequest();

    xhttp.onload = function () {
        console.log("Status:", this.status);
        console.log("Response:", this.responseText);

        if (this.status === 200) {
            const data = JSON.parse(this.responseText);
            const dogs = data.kennel.dogs;

            let output = "";

            for (let i = 0; i < dogs.length; i++) {
                output += "<tr>";
                output += "<td>" + dogs[i].name + "</td>";
                output += "<td>" + dogs[i].breed + "</td>";
                output += "<td>" + dogs[i].age + "</td>";
                output += "<td>" + dogs[i].coat.color + "</td>";
                output += "<td>" + dogs[i].coat.length + "</td>";
                output += "<td>" + dogs[i].training.level + "</td>";
                output += "<td>" + dogs[i].training.exam.name + "</td>";
                output += "<td>" + dogs[i].training.exam.status + "</td>";
                output += "</tr>";
            }

            tableBody.innerHTML = output;
        } else {
            tableBody.innerHTML = "<tr><td colspan='8'>Could not load dogs.json</td></tr>";
        }
    };

    xhttp.onerror = function () {
        tableBody.innerHTML = "<tr><td colspan='8'>Request failed</td></tr>";
        console.log("Request failed.");
    };

    xhttp.open("GET", "dog.json", true);
    xhttp.send();
});