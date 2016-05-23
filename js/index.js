$( document ).ready(function() {
  // When click on submit record the query string
  $( "#query-submit" ).click(function( event ) {
    event.preventDefault();
    // Empty HTML
    $( ".results" ).empty();
    var query = $("#query-string").val();
    $("#query-string").val('');
    // Append query string to the URL
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" + query + "&limit=10&utf8=1";
    // GET 10 relevant articles from Wikipedia API
    $.ajax( {
        url: url,
        dataType: 'jsonp',
        type: 'POST',
        headers: { 'Api-User-Agent': 'Example/1.0' },
        success: function(data) {
          var titles = data[1];
          var content = data[2];
          var links = data[3];
          // Insert Wikipedia articles
          for (i = 0; i < data.length; i++) {
            $( ".results" ).append("<h3>" + i + ". " + titles[i] + "</h3>" + "<p>" + content[i] + " - see more at: " + links[i] + "</p>");
            // And one content
          }
        },
        fail: function(data) {
          alert( "Oops... Something went wrong!");
        }
    } );
  });
});
