$('.menu-button').on('click', function() {
  $(this).removeClass('show-menu-button');
  $('.overlay').slideDown('slow');
});

$('.close-button').on('click', function() {
	$('.overlay').slideUp('slow');
	$('.menu-button').addClass('show-menu-button');
});

/*add this into the html page to connect to the JS file: <script src="myscripts.js"></script>*/