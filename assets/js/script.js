// initial correct file

// add form submit handler to grab the input, add the submitted value to the local storage, and clear the input, then display the weather for the next 5 days
// using the weatherapi.js file and cards.js file

jQuery(document).ready(function($) {
  localStorage.removeItem
   // setting a local storage key to store an array of strings
var searches = JSON.parse(localStorage.getItem('searches')) || [];
var searchValue;
var resultsSelector = $(".results .card-group");
var daysToView = 1;
 var emptyCardResults;
   var sorted = {}; 
      for (var i = 0; i < searches.length; i++) {
        var option = $("<option></option>");
        option.text(searches[i]);
        option.attr("value", searches[i]);
        $("#datalistOptions").append(option);
      }
$("#weatherLookup").on('submit',function(event) {
        event.preventDefault();
        resultsSelector.empty();

 
       // create a <options></options> entry for each available localstorage searches value parsed from json
     
        searchValue = $("#city").val();

        localStorage.setItem('searches', JSON.stringify(searches));
        // check if searchvalue exists in searches localstorage obj
        if (searches.indexOf(searchValue) === -1) {
          searches.push(searchValue);
         localStorage.setItem('searches', JSON.stringify(searches));
        }
       // searches.push(searchValue);
        if(searchValue){
        var dateToday = new Date().toISOString().slice(0,10);
           
        for(var i = 0; i < daysToView; i++){
               var getmeNextDay = new Date(
                 Date.parse(dateToday) +
                 24 * 60 * 60 * 1000 * i
               ).toISOString().slice(0, 10);

             var weatherResult = getForecast(searchValue, getmeNextDay);  
              
            weatherResult
              .then(function (response) {
                if (response.ok) {
                  response
                    .json()
                    .then(function (data) {
                      console.log(data);
                      for (var i = 0; i < data.list.length; i++) {
                        let mainObjData = data.list[i].main;
                        let weatherObjData = data.list[i].weather[0];
                        let cardBase = {
                          dt: data.list[i].dt,
                          dt_txt: data.list[i].dt_txt,
                          dt_notime: new Date(data.list[i].dt_txt)
                            .toISOString()
                            .slice(0, 10),
                          clouds: data.list[i].clouds.all,
                          feels_like: mainObjData.feels_like,
                          temp: mainObjData.temp,
                          temp_max: mainObjData.temp_max,
                          temp_min: mainObjData.temp_min,
                          weather_icon:
                            "https://openweathermap.org/img/wn/" +
                            weatherObjData.icon +
                            "@2x.png",
                          weather_main: weatherObjData.main,
                          weather_description: weatherObjData.description,
                        };
                        let groupedDB = data.list[i].dt_txt.split(" ")[0];
                        if(sorted[groupedDB] == null) sorted[groupedDB] = [];
                        sorted[groupedDB].push(cardBase);
                        
                      }
   
                      // var carded = generateCard(cardBase);
                      //  emptyCardResults += carded;
                    //   console.log(sorted);
                      for (var key in sorted) {
                        for (var i = 0; i < sorted[key].length - 1; i++) {
                          if(sorted[key] == null){
                            let meh = resultsSelector.html();
                           var resultee = '<div class="row">'+ meh;
                            sorted[key] = [];
                            //let carded = generateCard(sorted[key][i]);
                          
                            resultsSelector.html(meh + '</div>');
                          } else {
                            var carded = generateCard(sorted[key][i]);
                          }
                        
                          emptyCardResults += carded;
                        }
                        //var carded = generateCard(sorted[key]);
                        //emptyCardResults += carded;
                       // console.log(sorted[key]);

                      }
                      
                      resultsSelector.append(emptyCardResults);
                    })
                    .catch(function (error) {
                      console.error(error);
                    });
                  // var cardBase = generateCard(data);
                  // $(".card-deck").append(cardBase);
                } else {
                  // error thrown if the text enterred returns an invalid api call
                  console.error("Please enter a valid country or city name");
                }
              })
              .catch(function (error) {
                console.log(error);
              });
           
            
            }
 
              //  var weatherData = response;
        /* console.log(weatherResult);
                var data = weatherResult;
                console.log(data);
                var cardData = {
                    header: data.city.name,
                    title: data.list[0].weather[0].main,
                    content: data.list[0].weather[0].description
                }
                var cardBased = generateCard(cardData);
                $(".results").append(cardBased);
            */
        }else{
            alert("Please enter a city value");
        }

       // $(".results").append(emptyCardResults);
});
});