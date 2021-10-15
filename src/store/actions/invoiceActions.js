import * as ACTION_TYPES from './action_type';

export const create = () => {
	return { type: ACTION_TYPES.CREATE };
};

export const discard = () => {
	return { type: ACTION_TYPES.DISCARD };
};
