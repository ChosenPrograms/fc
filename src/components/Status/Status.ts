import $ from "../../lib/Helper/Helper";

let

	prev: number = 0,
	current: number = 0;

prev = window.pageYOffset

window.addEventListener('scroll', () => {
	current = window.pageYOffset

	if ( prev > current ) {
		$('#default-status').addClass('is-active')
		console.log('Up');
		
	} else {
		$('#default-status').removeClass('is-active')
		console.log('Down');
		
	}

	prev = current
})