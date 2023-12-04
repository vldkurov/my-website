const yearContainer = document.getElementById("year-container");

let currentYear = new Date().getFullYear();
yearContainer.innerHTML = currentYear.toString();