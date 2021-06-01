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

import {  isFunction, isString, isUndefined } from "./Functions";


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


$.fn = function ( selector : string | HTMLElement | NodeList ) {
    this.list = []

    if ( isUndefined(selector) ) {
        throw new Error('Selector must be defined!')
    }

    if ( isString(selector) ) {
        //@ts-ignore
        if ( selector.trim() === '' ) {
        } else if ( isString(selector) ) {
            try {
                      //@ts-ignore
                this.list = document.querySelectorAll(selector);
            } catch (err) {
                new TypeError('Invalid selector')
                this.list = []
            }
        } else {
            throw new Error('Invalid selector')
        }
    }

    if ( selector instanceof HTMLElement) {
        this.list.push(selector); // selector is a htmlElement
    }

    if ( selector instanceof NodeList ) {
        this.list.push(selector); // selector is a NodeList
    }

    if ( ! isString(selector) &&  !(selector instanceof NodeList) && !(selector instanceof HTMLElement )) {
        console.log('error');
    }
    
    // this.length = this.list.length;
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
                let newName: string = getClassName.concat( ' '+ className).replace(/\s+/g, ' ').trim();
                element.className = newName
            }
        });

        return this;
    },

    removeClass( className: string ){

        const regx = new RegExp('(\\s|^)' + className + '(\\s|$)', "g")

        this.list.forEach((element: HTMLElement) => {
            let getClassName = element.className;
            element.className = getClassName.replace(regx, ' ').replace(/\s+/g, ' ').trim()
            // if ( getClassName.indexOf(className) < 0 ) {
            //     element.className = getClassName.concat(className).replace(/\s+/g, ' ')
            // } else {
                
            // }
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

    attr( name: string, value: string): string {
        let getAttr: string = this.list[0].getAttribute( name );

        //check value is exit or not
        if ( value === 'false' && ! isUndefined(value) ){
            this.list[0].setAttribute(name, value);
            return 'changed';
        }

        return getAttr;
    },

    closest( selector: string ) {
        let el : HTMLElement | null = this.list[0];

        //@ts-ignore
        const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
        
        while (el) {
            if (matchesSelector.call(el, selector)) {
                this.list = [el];
                return this;
            } else {
                el = el.parentElement;
            }
        }

        return this;
    },

    remove() {
        this.list.forEach((element: HTMLElement) => {
            let parent = element.parentElement;
            parent?.removeChild(element);
        });
    },

    prev( ) {
        const prevE: Element[] = []
        this.list.forEach((element: HTMLElement) => {
            if ( element.previousElementSibling ) {
                prevE.push(  element.previousElementSibling )
            }
        });

        this.list = prevE; //new list items

        return this;
    },

    next( ) {
        const nextE: Element[] = []
        this.list.forEach((element: HTMLElement) => {
            if ( element.nextElementSibling ) {
                nextE.push(  element.nextElementSibling )
            }
        });
        this.list = nextE; //new list items
        return this;
    },

    val( value: string ) {
        if (this.list[0]){
            if ( value !== '' &&  ! isUndefined(value) ) {
                this.list[0].value = value;
                return false;
            }

            return this.list[0].value.trim();
        }
    },

    html( html: 'string') {

        if (this.list[0]) {
            this.list[0].innerHTML = escape(html);
        }
    },

    text( text: 'string'){
        if (this.list[0]) {
            this.list[0].innerText = text;
        }
    },

    on( event: string, callback: any ) {
        if ( !isUndefined(event) && isFunction(callback)) {
            this.list.forEach((element: HTMLElement) => {
                // element.addEventListener(event, callback)
                element.addEventListener(event, callback)
            });
        }
        return this;
    }
} );


/////////////////// STYLE
// $.extend({
//     css( obj: {} ){
        
//     }
// })


/**
 * 
 * @package Direct Add To The Helper
 */

$.version = version;

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
