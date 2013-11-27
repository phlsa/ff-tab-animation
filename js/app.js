$(document).ready(function() {
	$('button.optimal').click(function() {
		$('.new-tab').show();
		$('.text').css({'transition-property': 'all'});
		_.delay(function() { $('.new-tab').removeClass('closed') }, 20);
		_.delay(function() {
			$('.text').removeClass('closed');
		}, 250);
	});

	$('button.ok').click(function() {
		$('.new-tab').show();
		$('.text').css({'transition-property': 'none'});
		_.delay(function() { $('.new-tab').removeClass('closed') }, 20);
		_.delay(function() {
			$('.text').removeClass('closed');
		}, 300);
	});
});