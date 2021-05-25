import $ from "../../lib/Helper/Helper";


$('input').on('input', (e: any) => {

    $('h1').text(e.target.value)
} ) 