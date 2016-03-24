$(document).ready(function() {
  // When click on submit record the query string
  $("#query-submit").click(function() {
    var query = $("#query-string").val();
    // Append query string to the URL
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" + query + "&limit=10&utf8=1";
    // Works until here
    // GET 10 relevant articles from Wikipedia API
    $.ajax( {
        url: url,
        dataType: 'jsonp',
        type: 'POST',
        headers: { 'Api-User-Agent': 'Example/1.0' },
        success: function(data) {
          // var titles = data[1];
          // var content = data[2];
          // var links = data[3];
          console.log("YAYYY");
          console.log(data);
        }
    } );
  });
});
