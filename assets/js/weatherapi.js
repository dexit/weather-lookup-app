// code base for weather api
// https://openweathermap.org/api fetch forecast for 5 days

function getForecast(city,dateToday = new Date().toISOString().slice(0,10)) {
    const apiKey = "ad9ca655ad513633f73afcce5f7d7aad";
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&dt=${dateToday}`;
   
    return fetch(url);
    }
    
   // return fetch(url);

   function getForecast5day(city) {
    const apiKey = "ad9ca655ad513633f73afcce5f7d7aad";
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&units=metric&cnt=5&appid=${apiKey}`; //dt=${dateToday}`;
   
    return fetch(url);
    }