// code base for weather api
// https://openweathermap.org/api fetch forecast for 5 days

function getForecast(city,dateToday = new Date().toISOString().slice(0,10)) {
    const apiKey = "ad9ca655ad513633f73afcce5f7d7aad";
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&cnt=5&dt=${dateToday}`;
    return fetch(url);
}