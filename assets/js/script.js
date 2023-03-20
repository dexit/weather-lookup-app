// initial correct file

// add form submit handler to grab the input, add the submitted value to the local storage, and clear the input, then display the weather for the next 5 days
// using the weatherapi.js file and cards.js file

jQuery(document).ready(function($) {
   // setting a local storage key to store an array of strings
var searches = JSON.parse(localStorage.getItem('searches')) || [];
var searchValue;

    $("#weatherLookup").on('submit',function(event) {
        event.preventDefault();
        var emptyCardResults;
        var searchValue = $("#city").val();
        localStorage.setItem('searches', JSON.stringify(searches));
        searches.push(searchValue);
        if(searchValue){
        var dateToday = new Date().toISOString().slice(0,10);
            var weatherResult = getForecast5day(searchValue);

            weatherResult.then(function(response) {
                if(response.ok) {
                    response.json().then(function (data) {
                        console.log(data);
                       for (var i = 0; i < data.list.length; i++) {
                        let cardBase = {
                            header: data.city.name,
                            title: data.list[i].weather[0].main,
                            content: data.list[i].weather[0].description
                        }
                            let  carded = generateCard(cardBase);
                            emptyCardResults += carded;
                        } 
                       
                      // var carded = generateCard(cardBase);
                     //  emptyCardResults += carded;
                        }).catch(function(error) {
                            console.error(error);
                        })
                   // var cardBase = generateCard(data);
                   // $(".card-deck").append(cardBase);
                } else {
                    // error thrown if the text enterred returns an invalid api call
                    console.error('Please enter a valid country or city name');
                }           
            
                
            }).catch(function(error) {
                console.log(error);
            });
           
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
    
        $(".results").append(emptyCardResults);
});
});