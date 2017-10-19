// Built by LucyBot. www.lucybot.com

$("#sections").on('change',function(){
  
  
  var value = $("#sections").val();
  // console.log(value);

var url = "https://api.nytimes.com/svc/topstories/v2/" + value + ".json";
url += '?' + $.param({
  'api-key': "5bce6c6ed27244808f1ac64af9f33203"
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(data) {
  $.each(data.results, function(index,value){
$('.story-grid').append(value.multimedia[0].url);

  });
  console.log(data.results[0].title);

}).fail(function(err) {
  throw err;
});

});



