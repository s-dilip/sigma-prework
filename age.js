let iAge = prompt("Please Enter a Date: ");

let currentDate = new Date();

//Below is code to get the current date
const day = Number(currentDate.getDate());
const month = Number(currentDate.getMonth() + 1); //January is returned as 0 initially
const year = Number(currentDate.getFullYear());

const iYear = Number(iAge.slice(0, 4));
const iMonth = Number(iAge.slice(5, 7));
const iDay = Number(iAge.slice(8));

let yearDiff = (year - iYear) * 12 * 30; //Converting years to number of days
let monthDiff = (month - iMonth) * 30; //Converting months to number of days
let dayDiff = day - iDay;

let age = Math.round((dayDiff + monthDiff + yearDiff) / 365); //Final Age in years

console.log(age);
