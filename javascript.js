const sr= ScrollReveal({
    distance :'30%',
    duration: 2000,
    delay: 5,
    reset:true
  });
  
  sr.reveal('h1',{delay:-700, origin:'top'});
  sr.reveal('h2',{delay:-700, origin:'top'});
  sr.reveal('h3',{delay:-700, origin:'top'});
  sr.reveal('h4',{delay:-100, origin:'top'});
  sr.reveal('.linha2',{delay:-800, origin:'left'});
  sr.reveal('.linha3',{delay:-800, origin:'right'});
  sr.reveal('.text2',{delay:-600, origin:'left'});
  sr.reveal('.icone1',{delay:-200, origin:'top'});
  sr.reveal('.icone2',{delay:-300, origin:'top'});
  sr.reveal('.icone3',{delay:-500, origin:'top'});
  sr.reveal('.imgsomos',{delay:-400, origin:'left'});
 /* ------- FUNCAO ANCORA --------*/
var $doc = $('html, body');
$('.').click(function() {
  $doc.animate({
      scrollTop: $( $.attr(this,'href')).offset().top
  },500);
  return false;
});