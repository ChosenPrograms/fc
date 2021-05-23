import $ from "../../lib/Helper/Helper";


$('button').on('click', function () {
    $('.target').removeClass( 'is-active' ).addClass('is-active-2').on('dblclick', function ( ){
        console.log('Clicked');
    })
})