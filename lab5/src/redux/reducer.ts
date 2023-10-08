import { AppState } from "../types/storeType"
import { Actions } from "../types/storeType";
import { ImagesActions } from "../types/storeType";

export const reducer  = (currentAction: Actions, currentState: AppState): AppState => {
	const { action, payload } = currentAction;

	switch (action) {
		case ImagesActions.CHANGEHEAD:
			return {
				...currentState,
				top: payload,
			};
		case ImagesActions.CHANGEFACE:
			return {
				...currentState,
				mid: payload,
			};
		case ImagesActions.CHANGEHANDS:
			return {
				...currentState,
				bottom: payload,
			};

		default:
			return currentState;
	}
}