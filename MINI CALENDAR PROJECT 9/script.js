let date = document.getElementById("date");
let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");

const today = new Date();
console.log(today);

const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
const months = ["jan", "feb", "march", "apr", "may", "june", "july", "aug", "sep", "oct", "nov", "dec"]

date.innerHTML = (today.getDate() < 0 ? "0" : "") + today.getDate();
day.innerHTML = days[today.getDay()];
month.innerHTML = months[today.getMonth()];
year.innerHTML = today.getFullYear();