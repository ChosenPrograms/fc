import $ from "../../lib/Helper/Helper";

const btns = '[data-toggle="modal"]';
const closeBtn = '.modal-close-btn';

$(btns).on('click', (e: any) => {
    e.stopPropagation();
    const target: HTMLElement | null = e.target.getAttribute('data-target');

    $(target).addClass('is-active');
} )

$(closeBtn).on('click', (e: any) => {

    console.log($(e.target).closest('.modal'));
    $(e.target).closest('.modal').removeClass('is-active');
} )

$('.modal').on('click', () => {
    $('.modal.is-active').removeClass('is-active');
} )

$('.modal-inner').on('click', (e: any) => {
    e.stopPropagation();
})