type isCheck = ( arg: any ) => boolean;

const isString: isCheck = ( arg: any ) => typeof arg === 'string';
const isNumber: isCheck = ( arg: any ) => typeof arg === 'number';
const isArray: isCheck  = ( arg: any ) => arg.constructor === Array;
const isObject: isCheck = ( arg: any ) => arg.constructor.toString.call(arg) === '[object Object]';

export {
    isString,
    isArray,
    isNumber,
    isObject
}