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
