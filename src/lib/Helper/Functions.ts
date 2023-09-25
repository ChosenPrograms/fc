type TypeCheck = (arg: any) => boolean;

const isString: TypeCheck = (arg: any): arg is string => typeof arg === 'string';
const isNumber: TypeCheck = (arg: any): arg is number => typeof arg === 'number';
const isArray: TypeCheck = (arg: any): arg is any[] => Array.isArray(arg);
const isObject: TypeCheck = (arg: any): arg is Record<string, any> => typeof arg === 'object' && !isArray(arg);
const isFunction: TypeCheck = (arg: any): arg is Function => typeof arg === 'function';
const isUndefined: TypeCheck = (arg: any): arg is undefined => typeof arg === 'undefined';

export {
    isString,
    isArray,
    isNumber,
    isObject,
    isUndefined,
    isFunction
}
