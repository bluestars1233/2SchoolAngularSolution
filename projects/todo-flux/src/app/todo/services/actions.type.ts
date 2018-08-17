export enum FluxActionTypes {
    Add,
    Load,
    Check,
    Uncheck,
    Reset
}

export class FluxAction {
    constructor(public type: FluxActionTypes, public id?: number, public description?: string) {

    }
}
