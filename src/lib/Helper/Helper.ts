/**
 * 
 * @package Helper
 * @version 1.0.0
 * @author Tahazzot
 * @updated May 25, 2021
 * 
 * TypeScript Helper Library for DOM manipulation and Ajax request, AJax can
 * also be used with Axios
 */


/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



let
	version = "1.0.0",

	// Define a local copy of jQuery
	$: any = function( selector:string ) : any {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new $.fn( selector );
	};


$.fn = function ( selector : string ) {

    if ( typeof selector === 'undefined' ) {
        throw new Error('Selector must be defined!')
    }

    if ( selector.trim() === '' ) {
        this.list = []
    } else if ( typeof selector === 'string' ) {
        try {
            this.list = document.querySelectorAll(selector);
        } catch (err) {
            new TypeError('Invalid selector')
            this.list = []
        }
    } else {
        throw new Error('Invalid selector')
    }

    
    this.length = this.list.length;
    return this;
}

$.fn.prototype['add'] = function ( ){}

$.extend = $.fn.extend = function ( object: any ){
    for (const prop in object) {
        $.fn.prototype[prop] = object[prop];
    }
}


/**
 * 
 * @package DOM
 */
$.extend ( {
    addClass( className: string ) {
        this.list.forEach((element: HTMLElement) => {
            let getClassName = element.className;

            if ( getClassName.indexOf(className) < 0 ) {
                element.className = getClassName.concat( ' '+ className)
            }
        });

        return this;
    },

    removeClass( className: string ){

        const regx = new RegExp('(\\s|^)' + className + '(\\s|$)', "g")

        this.list.forEach((element: HTMLElement) => {
            let getClassName = element.className;

            if ( getClassName.indexOf(className) < 0 ) {
                element.className = getClassName.concat(className)
            } else {
                element.className = getClassName.replace(regx, ' ')
            }
        });

        return this;
    },

    toggleClass( className: string ) {

        return this;
    },


    on( event: string, callback: any ) {
        console.log(this);
        if (typeof event !== 'undefined' && typeof callback === 'function') {
            this.list.forEach((element: HTMLElement) => {
                // element.addEventListener(event, callback)
                element.addEventListener(event, callback)
            });
        }

        

        return this;
    }
} )


/**
 * 
 * @package Direct Add To The Helper
 */

$.version = '1.0.0';

$.log = function  ( message: string, style: any = { color: 'blue' } ) {
    let styled = '';

    for (let prop in style) {
        styled = styled.concat( `${prop}:${style[prop]};` )
    }
    setTimeout(console.log.bind(console, '%c' + message, styled.substr(0, styled.length - 1)), 0)
}
/**
 * 
 * @package Set to window
 */
if ( window ) {
    // @ts-ignore
    window.$ = $;
}

export default $;
