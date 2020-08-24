// Create a date
let date = new Date(2012, 1, 20, 3, 12);

alert(date);


// Show a weekday
function getWeekDay(date) {
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

    return days[date.getDay()];
}

let date = new Date(2014, 0, 3); // 3 Jan 2014
alert(getWeekDay(date)); // FR


// European weekday
function getLocalDay(date) {

    let day = date.getDay();

    if (day == 0) { // weekday 0 (sunday) is 7 in european
        day = 7;
    }

    return day;
}

let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert(getLocalDay(date));    // tuesday, should show 2