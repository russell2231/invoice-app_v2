import * as ACTION_TYPES from './action_type';
import generateUniqueId from '../../helpers/generateUniqueId';
import generatePaymentDueDate from '../../helpers/generatePaymentDueDate';

export const create = () => {
	return { type: ACTION_TYPES.CREATE };
};

export const discard = () => {
	return { type: ACTION_TYPES.DISCARD };
};

export const add = (invoice, state, type) => {
	return {
		type: ACTION_TYPES.ADD_INVOICE,
		payload: {
			invoice: invoice,
			id: generateUniqueId(state.invoices),
			paymentDue: generatePaymentDueDate(
				invoice.createdAt,
				invoice.paymentTerms
			),
			status: type === 'new' ? 'pending' : 'draft',
		},
	};
};

export const edit = (index) => {
	return {
		type: ACTION_TYPES.EDIT,
		payload: { id: index },
	};
};

export const modal = (index, name) => {
	return {
		type: ACTION_TYPES.TOGGLE_MODAL,
		payload: { name: name ? name : '', id: index ? index : '' },
	};
};
