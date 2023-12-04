const timeContainer = document.getElementById("time-container");
// const START_DAY = "02-24-2022";
const START_DAY = "2022-02-24";
const START_DAY_DATE = new Date(START_DAY);
// console.log(START_DAY_DATE);
const intlNumberFormatter = new Intl.NumberFormat("en-UK");


function formatSeconds(seconds) {
    // Convert the string to a number
    // let seconds = Number(secondsString);

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
    // console.log(typeof difference);

    // console.log(typeof intlNumberFormatter.format(difference));
    // timeContainer.innerHTML = intlNumberFormatter.format(difference);
    // timeContainer.innerHTML = String(difference);
    timeContainer.innerHTML = formatSeconds(difference);
}, 1000);




// // Example usage:
// let originalString = "123456789";
// let formattedString = formatSeconds(originalString);
// console.log(formattedString); // Output: "123,456,789"
