import { ImagesActions } from "../types/storeType";
import { Actions } from "../types/storeType";
import { AppState } from "../types/storeType";
import { Observer } from "../types/storeType";


export const changeHead = (payload: any) => {
	return {
		action: ImagesActions.CHANGEHEAD,
		payload
	};
};

export const changeFace = (payload: any) => {
	return {
		action: ImagesActions.CHANGEFACE,
		payload
	};
};

export const changeHands = (payload: any) => {
	return {
		action: ImagesActions.CHANGEHANDS,
		payload
	};
};


