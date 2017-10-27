// Built by LucyBot. www.lucybot.com

$("#sections").on('change',function(){
    $('.loader').show();// When user clicks on menu loading gif appears
    var loadingGif = $('.loader');
    var value = $("#sections").val();
   
    var url = "https://api.nytimes.com/svc/topstories/v2/";
    url += value;
    url += ".json?";
    url += $.param({
      'api-key': "5bce6c6ed27244808f1ac64af9f33203"
    });

    $.ajax({
      url: url,
      method: 'GET',
    })
    .done(function(data){
      
      $('.story-grid').empty();
        
      $.each(data.results, function(index,value){
        var photos = value.multimedia[4].url;
  
      $('.story-grid').slice(0,11).append(
      
      '<li style="background-image: url('+photos+');"  class="stories"><span class="caption">"'+value.title+'"<span></li>' );
    
      })
    .fail(function(err) {
      throw err;
    })
    .always(function(){
    });
    })
})
