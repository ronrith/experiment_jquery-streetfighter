$(document).ready(function () {

	$('.ryu').mouseenter(function(){
		$('.ryu-still').hide();
		$('.ryu-throwing').hide();
		$('.ryu-cool').show();
	})
	.mouseleave(function(){
		$('.ryu-ready').hide();
		$('.ryu-throwing').hide();
		$('.ryu-still').hide();
		$('.ryu-cool').show();
	})
	.mousedown(function() {
		playHadouken();
		// play hadouken sound
		$('.ryu-ready').hide();
		$('.ryu-cool').hide();
		$('.ryu-still').hide();
		$('.ryu-throwing').show();
		// animate hadouken to the right of the screen
		$('.hadouken').finish().show().animate(
			{'left': '1020px'},500,
			function(){
				$(this).hide();
				$(this).css('left', '520px');
			}
		);
	})
	.mouseup(function() {
	    $('.ryu-throwing').hide();
	    $('.ryu-ready').hide();
	    $('.ryu-cool').show();
	});	


	$(document).keydown(function(event){
		if (event.which==88){
			playHadouken();
			$('.ryu-still').hide();
			$('.ryu-ready').hide();
			$('.ryu-throwing').show();
			// animate hadouken to the right of the screen
			$('.hadouken').finish().show().animate(
				{'left': '1020px'},500,
				function(){
					$(this).hide();
					$(this).css('left', '520px');
				}
			);
		}
	})
	.keyup(function(event) {
	    $('.ryu-throwing').hide();
	    $('.ryu-cool').show();
	});	



});


function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}