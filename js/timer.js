const timeContainer = document.getElementById("time-container");
const START_DAY = "02-24-2022";
const START_DAY_DATE = new Date(START_DAY);
const intlNumberFormatter = new Intl.NumberFormat("en-UK");

setInterval(() => {
    const now = new Date();
    const difference = Math.floor(
        (now.getTime() - START_DAY_DATE.getTime()) / 1000
    );

    timeContainer.innerHTML = intlNumberFormatter.format(difference);
}, 1000);