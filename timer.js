const timeContainer = document.getElementById("time-container");
// const START_DAY = "02-24-2022";
const START_DAY = "2022-02-24";
const START_DAY_DATE = new Date(START_DAY);
// console.log(START_DAY_DATE);
const intlNumberFormatter = new Intl.NumberFormat("en-UK");

setInterval(() => {
    const now = new Date();
    // console.log(now);
    const difference = Math.floor(
        (now.getTime() - START_DAY_DATE.getTime()) / 1000
    );
    // console.log(difference);

    // console.log(typeof intlNumberFormatter.format(difference));
    // timeContainer.innerHTML = intlNumberFormatter.format(difference);
    timeContainer.innerHTML = String(difference);
}, 1000);