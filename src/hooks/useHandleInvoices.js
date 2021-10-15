import { useReducer, useEffect, useState } from 'react';
import { invoicesReducer } from '../store/reducers/invoicesReducer';
import * as ACTIONS from '../store/actions/invoiceActions';
import data from '../data/data.json';

const getInvoicesFromLocalStorage = () => {
	return JSON.parse(localStorage.getItem('invoices'));
};

const postInvoicesToLocalStorage = (invoices) => {
	localStorage.setItem('invoices', JSON.stringify(invoices));
};

const INITIAL_ADDRESS = {
	street: '',
	city: '',
	postCode: '',
	country: '',
};

const INITIAL_ITEM = {
	name: '',
	quantity: 0,
	price: 0,
	total: 0,
};

const INITIAL_INVOICE = {
	createdAt: new Date(),
	paymentDue: '',
	description: '',
	paymentTerms: 30,
	clientName: '',
	clientEmail: '',
	senderAddress: INITIAL_ADDRESS,
	clientAddress: INITIAL_ADDRESS,
	items: [],
	total: 0,
};

const INITIAL_STATE = {
	invoices: getInvoicesFromLocalStorage() || data,
	isFormOpen: false,
};

const useHandleInvoices = () => {
	const [state, dispatch] = useReducer(invoicesReducer, INITIAL_STATE);
	const [invoice, setInvoice] = useState(INITIAL_INVOICE);
	const [items, setItems] = useState([]);

	useEffect(() => {
		postInvoicesToLocalStorage(state.invoices);
	}, [state.invoices]);

	// Reducers

	const createInvoice = () => {
		dispatch(ACTIONS.create());
	};

	const discard = () => {
		dispatch(ACTIONS.discard());
	};

	return {
		state,
		invoice,
		items,
		createInvoice,
		discard,
	};
};

export default useHandleInvoices;
