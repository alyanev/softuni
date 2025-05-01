// Write a function that takes two numbers (hours and minutes) as input, adds 15 minutes to the given time, and returns the new time in the format "hh:mm".
// Ensure that the hours wrap around after 23 and the minutes are always displayed with two digits.

function timePlus(hh, mm) {

    mm += 15;

    if (mm > 59) {
        mm -= 60;
        hh++;
    }
    if (hh > 23)
        hh = 0;
    if (mm < 10)
        mm = '0' + mm;

    return `${hh}:${mm}`;
}

console.log(timePlus(23, 59)); 