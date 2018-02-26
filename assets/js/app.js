//============================
//---- Giphtastic l(^_^l) ----
//============================
// $(document).ready(function() {
// var topics = ["chan wook park", "wes anderson", "quinton tarantino", "guillermo del toro", "hayao miyazaki", "jean pierre jeunet", "thomas alfredson", "denis villeneuve"]; 
// function diplayGifs() {

$("button").on("click", function() {
  $("#gifs-appear-here").empty();

  var person = $(this).attr("data-person");

  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    person + "&api_key=dc6zaTOxFJmzC&limit=10";

  $.ajax({
      url: queryURL,
      method: "GET"
    })
    .then(function(response) {
      var results = response.data;

      for (var i = 0; i < results.length; i++) {

        if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
          var gifDiv = $("<div class='item'>")
              gifDiv.css("z-index", "1")
          var rating = results[i].rating;

          var p = $("<p>").text("Rating: " + rating);
          p.css("color", "#ffffff");
          var personImage = $("<img>");

          personImage.attr("src", results[i].images.fixed_height.url);

          gifDiv.append(p);
          gifDiv.append(personImage);

          $("#gifs-appear-here").prepend(gifDiv);
        }
      }
    });
});






































// }); //closes document.ready