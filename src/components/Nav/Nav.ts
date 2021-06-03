import $ from "../../lib/Helper/Helper";

let input: any = $('.nav-search-input');
let inputPlaceholder: any = $('.nav-input-placeholder');


function add () {
	inputPlaceholder.addClass('is-active')
	input.addClass('focused')
	input.list[0].style.transition = '.1s padding-left linear, .1s width linear'
}

function remove () {
	
	inputPlaceholder.removeClass('is-active')
	input.removeClass('focused')
}

////////////////// activate
input.on('mousedown',  (e: any) => {
	e.stopPropagation();
	add ()
});

input.on('focus',  (e: any) => {
	e.stopPropagation();
	add ()
});

$(document.body).on('keydown', (e: any) => {
	if(e.key === '/') {
		add ()
		setTimeout( () => {
			input.list[0].focus();
		})
	}
})


////////////////// de activate
$(document.body).on('mousedown', () => {
	if ( input.val() === '' ) {
		remove ()
		input.val('');
	}
});

input.on('blur',  () => {
	// if ( input.val() === '' ) {
	// 	remove ()
	// 	input.val('');
	// }
	remove ()
});


let

	ini: number = 50,
	current: number = 0;

window.addEventListener('scroll', () => {
	current = window.pageYOffset
	// console.log({ini, current});
	if ( ini < current ) {
		$('.nav').addClass('is-active')
	} else {
		$('.nav').removeClass('is-active')
	}
})
