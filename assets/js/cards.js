// base code for the cards

function generateCard(data) {

var cardBase = `<div class="card text-bg-primary">
    <img class="image card-img-top card-text" src="${data.weather_icon}">
  <div class="card-header">${data.dt_txt}</div>
  <div class="card-body">
    <h5 class="card-title"> </h5> ${data.weather_main} ${data.weather_description}
    <p class="card-text">Feels like: ${data.feels_like}</p>
    <p class="card-text">Temp: ${data.temp}</p>
    <p class="card-text">Temp Max: ${data.temp_max}</p>
    <p class="card-text">Temp Min: ${data.temp_min}</p>
    <p class="card-text">Clouds: ${data.clouds}</p>
  <div class="card-footer">
     <small class="text-muted">${data.temp_min}c - ${data.temp_max}c </small>
    </div>
  </div>
</div>
`;

  return cardBase;
}