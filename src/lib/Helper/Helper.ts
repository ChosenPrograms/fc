import DOM from './DOM';
import Fnc from './Functions';

// Solid Clone Of Helper
const Helper: any = {
    name: 'Helper',
    extends: ( Arr: {}[] ) => {
        Arr.forEach( OBJ => {
            for (let name in OBJ) {
                // @ts-ignore
                Helper[name] = OBJ[name]
            }
        })
    }
}

Helper.extends(
    [
        Fnc,
        DOM
    ]
)

export default Helper;
