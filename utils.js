export function defineProperty(obj, prop, descriptor) {
    if(obj[prop] != null) console.warn(`[PROTO] Property '${prop}' is already defined on ${obj.constructor.name}`);
    //
    Object.defineProperty(obj, prop, descriptor); // [!] Catch errors
}