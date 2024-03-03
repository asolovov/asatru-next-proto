export type Err = {
    err: Error
    clientMsg: string
    debug: string
}

export const internalErr = new Error("encyclopedia internal error");
export const unknownErr = new Error("encyclopedia unknown error");
export const notFoundErr = new Error("encyclopedia not found error");
export const unAuthorisedErr = new Error("unauthorised error");

export function getInternalErr(msg: string, debug: string): Err {
    return {err: internalErr, clientMsg: msg, debug}
}

export function getUnknownErr(msg: string, debug: string): Err {
    return {err: unknownErr, clientMsg: msg, debug}
}

export function getNotFoundErr(msg: string, debug: string): Err {
    return {err: notFoundErr, clientMsg: msg, debug}
}

export function getUnauthorisedErr(msg: string, debug: string): Err {
    return {err: unAuthorisedErr, clientMsg: msg, debug}
}