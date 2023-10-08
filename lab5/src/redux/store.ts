import { AppState, Observer } from "../types/storeType";
import { reducer } from "./reducer";
import { Actions } from "../types/storeType";

export let appState: AppState = {
    top: ``,
    mid: ``,
    bottom: ``
}

let observers: Observer[] = [];

export const dispatch = (action: Actions) => {
    const clone = JSON.parse(JSON.stringify(appState))
    appState = reducer(action, clone);
    observers.forEach(o => o.render());
}

export const addObserver = (ref: Observer) => { observers = [...observers, ref]};