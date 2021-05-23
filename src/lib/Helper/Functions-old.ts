// interface Functions {
//     isString: ( arg: any ) => Boolean;
//     isNumber: ( arg: any ) => Boolean;
//     // anonymous console log
//     log: ( message: string, style: any) => void;

//     // dom selection
//     on: <T extends HTMLElement | NodeList | String>( 
//         event: string,
//         element: T,
//         callback: Function
//     ) => T
// }
// // @ts-ignore
// const Fn: Functions = {}

// Fn.isString = function ( arg: any ) {
//     return typeof arg === 'string'
// },

// Fn.isNumber = function ( arg: any ) {
//     return typeof arg === 'number'
// },

// Fn.log = function  ( message: string, style: any = { color: 'blue' } ) {
//     let styled = '';

//     for (let prop in style) {
//         styled = styled.concat( `${prop}:${style[prop]};` )
//     }
//     setTimeout(console.log.bind(console, '%c' + message, styled.substr(0, styled.length - 1)), 0)
// }

// Fn.select = (selector: string) => {
//     try {
//         return document.querySelectorAll(selector);
//     } catch (err) {
//         throw new Error(err);
//     }
// };

// Fn.on = (
//     event: string,
//     element: string | HTMLElement | NodeList,
//     callback: Function
// ) => {
//     if ($.isString(element)) {
//         //@ts-ignore
//         document.querySelectorAll(element).forEach((elm) => {
//             //@ts-ignore
//             elm.addEventListener(event, callback);
//         });

//         return false;
//     }

//     if (element instanceof HTMLElement) {
//         //@ts-ignore
//         element.addEventListener(event, callback, false);
//         return false;
//     }

//     if (element instanceof NodeList) {
//         //@ts-ignore
//         element.forEach((elm) => {
//             //@ts-ignore
//             elm.addEventListener(event, callback, false);
//         });
//         return false;
//     }

//     console.log(typeof element);

//     console.log(element);
// };


// export default Fn
