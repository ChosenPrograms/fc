export default interface Fnc {
    isString: ( arg: any ) => Boolean;
    isNumber: ( arg: any ) => Boolean;
    // anonymous console log
    log: ( message: string, style: any) => void;
}
