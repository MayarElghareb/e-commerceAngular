
export const ADD_TO_FAV = 'ADD_TO_FAV';

export class AddToFav  {
    readonly type = ADD_TO_FAV;
    constructor(public payload : any) {}
}

export const REMOVE__FROM__FAV = 'REMOVE__FROM__FAV';

export class RemoveFromFav  {
    readonly type = REMOVE__FROM__FAV;
    constructor(public payload : any) {}
}




