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

	// Define a local copy of Helper
	$: any = function( selector:string ) : any {

		// The Helper object is actually just the init constructor 'enhanced'
		// Need fn if Helper is called (just allow error to be thrown if not included)
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
                element.className = getClassName.concat( ' '+ className).replace(/\s+/g, ' ').trim()
            }
        });

        return this;
    },

    removeClass( className: string ){

        const regx = new RegExp('(\\s|^)' + className + '(\\s|$)', "g")

        this.list.forEach((element: HTMLElement) => {
            let getClassName = element.className;

            if ( getClassName.indexOf(className) < 0 ) {
                element.className = getClassName.concat(className).replace(/\s+/g, ' ').trim()
            } else {
                element.className = getClassName.replace(regx, ' ').replace(/\s+/g, ' ').trim()
            }
        });

        return this;
    },

    toggleClass( className: string ) {
        // let getAttr: string | null = element.getAttribute('class');
        const regx = new RegExp('(\\s|^)' + className + '(\\s|$)', "g")

        this.list.forEach((element: HTMLElement) => {
            let getClassName = element.className;

            if ( ! regx.test(getClassName) ) {
                element.className = getClassName.concat( ' ' + className).replace(/\s+/g, ' ').trim()
            } else {
                element.className = getClassName.replace(regx, ' ').replace(/\s+/g, ' ').trim()
            }
        });
        return this;
    },

    hasClass( className: string ) {
        const regx = new RegExp('(\\s|^)' + className + '(\\s|$)', "g");
        if ( this.list[0] ) {
            let getClassName : string = this.list[0].className;
            return regx.test(getClassName)
        }

        return false;
    },

    attr( name: string, value: string | number | boolean | null = null ): string {
        let getAttr: string = this.list[0].getAttribute( name );

        //check value is exit or not
        if ( value){
            this.list[0].setAttribute(name, value);
            return 'changed';
        }

        return getAttr;
    },

    remove() {
        this.list.forEach((element: HTMLElement) => {
            let parent = element.parentElement;
            parent?.removeChild(element);
        });
    },


    on( event: string, callback: any ) {
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
