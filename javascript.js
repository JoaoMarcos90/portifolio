const sr= ScrollReveal({
    distance :'10%',
    duration: 2000,
    delay: 5,
    reset:true
  });
  
  sr.reveal('h1',{delay:100, origin:'top'});
  sr.reveal('h2',{delay:100, origin:'top'});
  sr.reveal('h3',{delay:100, origin:'top'});
  sr.reveal('h4',{delay:-100, origin:'top'});
  sr.reveal('.img1',{delay:100, origin:'right'});
  sr.reveal('.img3',{delay:100, origin:'right'});
  sr.reveal('.img4',{delay:100, origin:'right'});
  sr.reveal('.logo',{delay:100, origin:'right'});
  sr.reveal('.texto2',{delay:100, origin:'top'});
 /* ------- FUNCAO ANCORA --------*/
var $doc = $('html, body');
$('.').click(function() {
  $doc.animate({
      scrollTop: $( $.attr(this,'href')).offset().top
  },500);
  return false;
});