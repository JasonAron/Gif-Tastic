//============================
//---- Giphtastic l(^_^l) ----
//============================
// $(document).ready(function() {


// var topics = ["chan wook park", "wes anderson", "quinton tarantino", "guillermo del toro", "hayao miyazaki", "jean pierre jeunet", "thomas alfredson", "denis villeneuve"]; 
// function diplayGifs() {

$("button").on("click", function() {
	var person = $(this).attr("data-name");
	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        person + "&api_key=dc6zaTOxFJmzC&limit=10";

  $.ajax({
      url: queryURL,
      method: "GET"
    })
    // After the data comes back from the API
    .then(function(response) {
      // Storing an array of results in the results variable
      var results = response.data;

      // Looping over every result item
      for (var i = 0; i < results.length; i++) {

        // Only taking action if the photo has an appropriate rating
        if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
          // Creating a div with the class "item"
          var gifDiv = $("#gifs-appear-here");

          // Storing the result item's rating
          var rating = results[i].rating;

          // Creating a paragraph tag with the result item's rating
          var p = $("#rating").text("Rating: " + rating);

          // Creating an image tag
          var personImage = $("#gif-view");

          // Giving the image tag an src attribute of a proprty pulled off the
          // result item
          personImage.attr("src", results[i].images.fixed_height.url);

          // Appending the paragraph and personImage we created to the "gifDiv" div we created
          gifDiv.append(p);
          gifDiv.append(personImage);

          // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
          $("#gifs-appear-here").prepend(gifDiv);
        }
      }
    });
};






































}); //closes document.ready