// Built by LucyBot. www.lucybot.com

$("#sections").on('change',()=>{
  $('#header-change').removeClass("headernyt").addClass("newheader");
    $('.loader').show();// When user clicks on menu loading gif appears
    let loadingGif = $('.loader');
    let value = $("#sections").val();

     
      $('.loader').show(); 
    let url = `https://api.nytimes.com/svc/topstories/v2/${value}.json`;
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
.done((data)=>{
  $('.story-grid').empty();
  let storiesWithPicture = data.results.filter(function(article) {
    return article.multimedia.length;
  }).slice(0,12);
  
  $.each(storiesWithPicture, function(index,value){
    let photos = value.multimedia[4].url;
    let photoUrl = value.url;
    let abstract = value.abstract;
    console.log(photos);
    $('.story-grid').append(
  // '<ul><img class="stories" src="'+value.multimedia[4].url+'"></li>',
  `<a href= ${photoUrl} ><li style="background-image: url(${photos});"  class="stories"><span class="caption">${abstract}<span></li>` );

  })
 

.fail((err)=> {
  throw err;
})

.always(()=>{
 
  $('.loader').hide();
})})})
