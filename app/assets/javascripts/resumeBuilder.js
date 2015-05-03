SC.initialize({
  client_id: "69443d2b3a72b56dd44f849ed235735b"
});

var track_url = "http://soundcloud.com/arek-gazdziak/little-wing-intro-005"

$(document).ready(function() {

  SC.oEmbed(track_url, document.getElementById('player'));
  console.log(track_url);

});






