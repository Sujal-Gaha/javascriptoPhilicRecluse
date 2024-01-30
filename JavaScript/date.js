// Creating a new Date object, representing the current date and time.
const date = new Date();

// Get
// Getting the day of the month (1-31).
date.getDate();

// Getting the month (0-11).
date.getMonth();

// Getting the year (four digits).
date.getFullYear();

// Getting the hour of the day (0-23).
date.getHours();

// Getting the minutes (0-59).
date.getMinutes();

// Getting the seconds (0-59).
date.getSeconds();

// Getting the milliseconds (0-999).
date.getMilliseconds();

// Getting the numeric value of the date; equivalent to getTime().
date.getTime();


// Set
// Setting the day of the month to the specified value (30 in this case).
date.setDate(30);

// Setting the month to the specified value (1 for February in this case).
date.setMonth(1);

// Setting the year to the specified value (2024 in this case).
date.setFullYear(2024);

// Setting the hour to the specified value (9 in this case).
date.setHours(9);

// Setting the minutes to the specified value (58 in this case).
date.setMinutes(58);

// Setting the seconds to the specified value (35 in this case).
date.setSeconds(35);

// Setting the milliseconds to the specified value (439 in this case).
date.setMilliseconds(439);

// Setting the date and time value using the provided timestamp (1939475028953 in this case).
date.setTime(1939475028953);