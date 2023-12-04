const timeContainer = document.getElementById("time-container");
const START_DAY = "2022-02-24";
const START_DAY_DATE = new Date(START_DAY);


function formatSeconds(seconds) {
    // Check if the input is a valid number
    if (isNaN(seconds)) {
        return "Invalid input";
    }
    // Convert the number to a formatted string
    return seconds.toLocaleString();
}

setInterval(() => {
    const now = new Date();
    // console.log(now);
    const difference = Math.floor(
        (now.getTime() - START_DAY_DATE.getTime()) / 1000
    );
    timeContainer.innerHTML = formatSeconds(difference);
}, 1000);

