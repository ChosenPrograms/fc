const isString = ( arg: any ) => typeof arg === 'string';
const isNumber = ( arg: any ) => typeof arg === 'number';
const isArray  = ( arg: any ) => arg.constructor === Array;
const isObject = ( arg: any ) => arg.constructor.toString.call(arg) === '[object Object]';

export {
    isString,
    isArray,
    isNumber,
    isObject
}