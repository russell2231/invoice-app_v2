import * as ACTION_TYPES from '../actions/action_type';

export const invoicesReducer = (state, action) => {
	if (action.type === ACTION_TYPES.CREATE) {
		return { ...state, isFormOpen: true };
	}

	if (action.type === ACTION_TYPES.DISCARD) {
		return { ...state, isFormOpen: false };
	}
};
