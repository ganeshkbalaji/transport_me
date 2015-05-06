$(document).on("page:change", function(){


// $('body').on('submit','.finder',function(e){
// e.preventDefault();
// $.ajax({
//   url: 'https://maps.googleapis.com/maps/api/distancematrix/output?parameters',
//   data: {key:'AIzaSyAJRdCnfMpc0uWT8bBlRAJ_VCLQroTSuVo', origins:$("input:text[name=origins]").val(),destinations:$("input:text[name=destinations]").val()}
// })
// .done(function(data) {
//   console.log(data)
//   console.log("success");
// })
// .fail(function() {
//   console.log("error");
// })
// .always(function() {
//   console.log("complete");
// });



// })



$('body').on('submit', '.finder', function(event) {
  event.preventDefault();

  var origin1 = $("input:text[name=origins]").val();
  var destinationA = $("input:text[name=destinations]").val();

  var service = new google.maps.DistanceMatrixService();
  service.getDistanceMatrix(
  {
    origins: [origin1],
    destinations: [destinationA],
    travelMode: google.maps.TravelMode.DRIVING,
  }, callback);

  function callback(response, status) {
    console.log(response.rows[0].elements[0].distance.value)
    console.log(response.rows[0].elements[0].distance.text)
    var dist_in_km=response.rows[0].elements[0].distance.value

    console.log(dist_in_km*0.621371)
    dist_in_miles=dist_in_km*0.621371

    $("#distance").text(dist_in_miles/1000+" mi")
  }


});

})

