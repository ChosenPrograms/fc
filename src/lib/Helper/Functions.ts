import InterfaceFnc from  './Functions.d'

// @ts-ignore
const Fnc: InterfaceFnc = {}

Fnc.isString = function ( arg: any ) {
    return typeof arg === 'string'
},

Fnc.isNumber = function ( arg: any ) {
    return typeof arg === 'number'
},

Fnc.log = function  ( message: string, style: any = { color: 'blue' } ) {
    let styled = '';

    for (let prop in style) {
        styled = styled.concat( `${prop}:${style[prop]};` )
    }
    setTimeout(console.log.bind(console, '%c' + message, styled.substr(0, styled.length - 1)), 0)
}

export default Fnc
