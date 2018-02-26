//============================
//---- Giphtastic l(^_^l) ----
//============================
// $(document).ready(function() {
// var topics = ["chan wook park", "wes anderson", "quinton tarantino", "guillermo del toro", "hayao miyazaki", "jean pierre jeunet", "thomas alfredson", "denis villeneuve"]; 
// function diplayGifs() {

// import $ from 'jquery';

var topics = ["chan wook park", "wes anderson", "quinton tarantino", "guillermo del toro", "hayao miyazaki", "jean pierre jeunet", "denis villeneuve"]; 

$(function() {
    makeButtons();
});

function makeButtons() {
    $('#buttons').empty();
    for (let topic of topics) {
        var newBtn = $('<button>');
        newBtn.text(topic);
        newBtn.attr("data-person", topic);
        $('#buttons').append(newBtn);
    }
}

$('#add-gif').click( function(e) {
    e.preventDefault();
    
    var newButton = $('#gif-input').val();
    
    console.log(newButton);
    
    topics.push(newButton);
    makeButtons();
    $('#gif-input').val("");
});

$(".container").on("click", "button", function() {
  $("#gifs-appear-here").empty();

  var person = $(this).attr("data-person");
  console.log(person);

  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    person + "&api_key=TlINizHJq1QzuMIyFoZvWXvFsF6Tkegs&limit=10";

  $.ajax({
      url: queryURL,
      method: "GET"
    })
    .then(function(response) {
      var results = response.data;

      for (var i = 0; i < results.length; i++) {

        // if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
          var gifDiv = $("<div class='item'>")
              gifDiv.css("z-index", "1")
          var rating = results[i].rating;

          var p = $("<p>").text("Rating: " + rating);
          p.css("color", "#ffffff");
          
          var personImage = $("<img>");

          personImage.attr("src", results[i].images.fixed_height_still.url);
          personImage.attr("data-animated", results[i].images.fixed_height.url);
          personImage.attr("data-still", results[i].images.fixed_height_still.url);
          personImage.attr("data-is-animated", "still");

          gifDiv.append(p);
          gifDiv.append(personImage);

          $("#gifs-appear-here").prepend(gifDiv);
        // }
      }
    });
});


$('.container').on("click", "img", function() {
    var still = $(this).attr("data-still");
    var animated = $(this).attr("data-animated")
    var isAnimated = $(this).attr("data-is-animated");
    
    if (isAnimated === "animated") {
       // make it a still image
        $(this).attr("src", still);
        $(this).attr("data-is-animated", "still");
    } else {
       // make it an animated gif
        $(this).attr("src", animated);
        $(this).attr("data-is-animated", "animated");
    }
    
});





































// }); //closes document.ready