const sr= ScrollReveal({
    distance :'20%',
    duration: 2000,
    delay: 5,
    reset:true
  });
  
  sr.reveal('h1',{delay:100, origin:'top'});
  sr.reveal('h2',{delay:100, origin:'top'});
  sr.reveal('h3',{delay:100, origin:'top'});
  sr.reveal('h4',{delay:-100, origin:'top'});
  sr.reveal('.linha1',{delay:100, origin:'top'});
  sr.reveal('.text1',{delay:-200, origin:'left'});
  sr.reveal('.text2',{delay:-100, origin:'top'});
  sr.reveal('.icone1',{delay:-100, origin:'top'});
  sr.reveal('.icone2',{delay:-100, origin:'top'});
  sr.reveal('.icone3',{delay:-100, origin:'top'});
 /* ------- FUNCAO ANCORA --------*/
var $doc = $('html, body');
$('.').click(function() {
  $doc.animate({
      scrollTop: $( $.attr(this,'href')).offset().top
  },500);
  return false;
});