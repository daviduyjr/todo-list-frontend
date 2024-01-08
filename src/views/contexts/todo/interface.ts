/* eslint-disable no-unused-vars */

export interface IParentStateContext {
    get: (key: string, defaultValue?: any) => any;
    set: (key: string, value: any) => void;
}
