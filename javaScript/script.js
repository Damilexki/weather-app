"use strict";
// ifStatement
// if (new Date().getHours() < 18);{
// document.getElementById ('greet') . innerHTML = 'Good day'

// }
// elseStatement
// const hour = (new date (). getHours() < 18);
// if (hour < 18) {
//   greetings = 'good day';
// } else {
//   greetings = 'good evening';
// }

//  elseIf statement
// const time = new Date().getHours();
// let greeting;
// if (time < 12) {
//   greeting = "Good morning";
// } else if (time < 17) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }
// document.getElementById("greet").innerHTML = greeting;

// switch statement
// let days;
// switch (new Date(). getDay());{
//   case 0:
//     day = 'Sunday';
//     break;
//     case 1:
//     day = 'Monday';
//     break;
//     case 2:
//     day = 'Tuesday';
//     break;
//     case 3:
//     day = 'Wednessday';
//     break;
//     case 4:
//     day = 'Tursday';
//     break;
//     case 5:
//     day = 'Friday';
//     break;
//     case 6:
//     day = 'Saturday';
//     break;

// }
// // document.getElementById(greet).innerHTML = day;

// let days;
// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
// }
// document.getElementById("greet").innerHTML = day;
//  var x = 65
//  if (x >= 50 ) {
//   console.log('passed');
//  }
// else {console.log
// ('fail');
//  }
// let mark = prompt("Enter number");
// if (mark >= 40) {
//   if (mark >= 80) {
//     console.log("brilliant");
//   } else {
//     console.log("good");
//   }
// } else {
//   console.log("fail");
// }
const apiKey = "916cfbc8b8d500f394c80d63577a4473";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();
  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
}
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
