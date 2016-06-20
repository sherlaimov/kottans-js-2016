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
  
  position($this.rendered);
  function position(arr){
    return arr.map(function(el, i){
      if ( i === 0 ) {
        return el.css({
          left: - Math.floor(el.outerWidth()) / 2
        });
      } else if ( i === 1) {
        return el.css({
          left: Math.floor($this.input.outerWidth()) / 2 - Math.floor(el.outerWidth()) / 2
        }).addClass('selected');
      } else {
        // console.log($this.input);
        // console.log(Math.floor($this.input.outerWidth()) +  Math.floor(el.outerWidth()) / 2);
        return el.css({
          left:  Math.floor($this.input.outerWidth()) -  Math.floor(el.outerWidth()) / 2
        });
      }

    });
  }



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


  $('form').card({

    // a selector or DOM element for the container
    // where you want the card to appear
    container: '.card-wrapper', // *required*
    formSelectors: {
        numberInput: 'input#card-num', // optional — default input[name="number"]
        expiryInput: 'input#exp-date', // optional — default input[name="expiry"]
        cvcInput: 'input#ccv-code', // optional — default input[name="cvc"]
        nameInput: 'input#full-name' // optional - defaults input[name="name"]
      },

    width: 400, // optional — default 350px
    formatting: true, // optional - default true

    // Strings for translation - optional
    messages: {
        validDate: 'valid\ndate', // optional - default 'valid\nthru'
        monthYear: 'mm/yyyy', // optional - default 'month/year'
      },

      placeholders: {
        number: '**** **** **** ****',
        name: 'Arya Stark',
        expiry: '**/****',
        cvc: '***'
      }
    });

$('#card-num').focus(function(){
  $('.card-wrapper').show();
});

});

