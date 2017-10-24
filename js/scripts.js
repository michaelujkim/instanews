// Built by LucyBot. www.lucybot.com

$("#sections").on('change',function(){

    var value = $("#sections").val();
      // console.log(value);
    var url = "https://api.nytimes.com/svc/topstories/v2/" + value + ".json";
        url += '?' + $.param({
        'api-key': "5bce6c6ed27244808f1ac64af9f33203"
});

// $.ajaxStart(function(){
// $('.loader').addClass('loading');
// });

$.ajax({
  url: url,
  method: 'GET',
})
.done(function(data){
  $('.story-grid').empty();
  // $.slice(1,12);
  $.each(data.results, function(index,value){
    var photos = value.multimedia[4].url;
    console.log(photos);
    $('.story-grid').slice(0,11).append(
  // '<ul><img class="stories" src="'+value.multimedia[4].url+'"></li>',
  '<li style="background-image: url('+photos+');"  class="stories"><span class="caption">"'+value.title+'"<span></li>' );

  })
 

.fail(function(err) {
  throw err;
})

.always(function(){
 
  
});
$('ul').slice(0,11);

})


});