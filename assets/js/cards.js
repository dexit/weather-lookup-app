// base code for the cards

function generateCard(data) {

var cardBase = `<div class="card text-bg-primary">
    <img class="image card-img-top card-text" src="${data.weather_icon}">
  <div class="card-header">${data.dt_txt}</div>
  <div class="card-body">
    <h5 class="card-title">${data.weather_main} <small> ${data.weather_description}</small></h5> 
    <p class="card-text">Feels like:<span class="badge rounded-pill text-bg-light"> ${data.feels_like}</span></p>
    <p class="card-text">Temp:<span class="badge rounded-pill text-bg-light"> ${data.temp}</span></p>
    <p class="card-text">Temp Max:<span class="badge rounded-pill text-bg-light"> ${data.temp_max}</span></p>
    <p class="card-text">Temp Min:<span class="badge rounded-pill text-bg-light"> ${data.temp_min}</span></p>
    <p class="card-text">Clouds:<span class="badge rounded-pill text-bg-light"> ${data.clouds}</span></p>
  <div class="card-footer">
     <small class="text-muted">${data.temp_min}c - ${data.temp_max}c </small>
    </div>
  </div>
</div>
`;

  return cardBase;
}