

export type Observer = ({ render: () => void } & HTMLElement)

export type AppState = {
    top:string
    mid: string;
    bottom: string;
}
export enum ImagesActions {
    "CHANGEHEAD" = "CHANGEHEAD",
    "CHANGEFACE" = "CHANGEFACE",
    "CHANGEHANDS" = "CHANGEHANDS"
}

export interface ChangeHeadActions{
    action: ImagesActions.CHANGEHEAD
    payload: ``
}

export interface ChangeFaceActions{
    action: ImagesActions.CHANGEFACE
    payload: ``
}

export interface ChangeHandsActions{
    action: ImagesActions.CHANGEHANDS
    payload: ``
}



export type Actions = ChangeHeadActions | ChangeFaceActions | ChangeHandsActions