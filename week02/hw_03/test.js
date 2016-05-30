$(function(){

  var legend = ['I got time', 'Average', 'Yesterday'];
  var input = $('input[type=range]');
  var $this = this;
  $this.input = input;

  $this.rendered = legend.map(function(el){
    var $elArr = $('<span></span>')
    .addClass('range-legend')
    .html(el);

// WHY DO I HAVE TO APPEND IT HERE TO BE ABLE TO GET THE WIDTHs AFTERWARDS?
$('#range').append($elArr);
return $elArr;

});

  function position(arr){
    return arr.map(function(el, i){
      if ( i === 0 ) {
        return el.css({
          left: - Math.floor(el.outerWidth()) / 2
        });
      } else if ( i % 2 !== 0) {
        return el.css({
          left: Math.floor($this.input.outerWidth()) / 2 - Math.floor(el.outerWidth()) / 2
        }).addClass('selected');
      } else {
        console.log(Math.floor($this.input.outerWidth()) +  Math.floor(el.outerWidth()) / 2);
        return el.css({
          left:  Math.floor($this.input.outerWidth()) -  Math.floor(el.outerWidth()) / 2
        });
      }

    });
  }

position($this.rendered);

input.on('change', function(e){
 var spans = $('.range-legend').removeClass('selected');
    $(spans[input.val() - 1]).addClass('selected');

})

  window.debug = {
    input: input,
    el:null,
    trackLen:null,
    elLen: null,
    pos:null,
    rendered: $this.rendered
  };

});

