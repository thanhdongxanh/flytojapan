 $(function(){
    $(".xuong, .kn").click(function() {
 	$("body,html").animate({scrollTop: $('#khoiedu').offset().top},800)
 	return false ;
  }) 
    $(".ct").click(function() {
 	$("body,html").animate({scrollTop: $('#khoiedu').offset().top},800)
 	return false ;
  })  
   $(".ph").click(function() {
 	$("body,html").animate({scrollTop: $('#phanhoi').offset().top},800)
 	return false ;
  }) 
   $(".up").click(function() {
 	$("body,html").animate({scrollTop: $('#toup').offset().top},200)
 	return false ;
  })  
   $(".tva").click(function() {
 	$("body,html").animate({scrollTop: $('#tvanh').offset().top},800)
 	return false ;
  }) 
   $(".ctr").click(function() {
 	$("body,html").animate({scrollTop: $('#vctrinh').offset().top},800)
 	return false ;
  }) 
 })