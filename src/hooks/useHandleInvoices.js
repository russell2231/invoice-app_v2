import { useReducer, useEffect } from 'react';
import invoicesReducer from '../store/reducers/invoicesReducer';
import data from '../data/data.json';

const getInvoicesFromLocalStorage = () => {
	return JSON.parse(localStorage.getItem('invoices'));
};

const postInvoicesToLocalStorage = (invoices) => {
	localStorage.setItem('invoices', JSON.stringify(invoices));
};

const initialState = {
	invoices: getInvoicesFromLocalStorage() || data,
};

const useHandleInvoices = () => {
	const [state, dispatch] = useReducer(invoicesReducer, initialState);

	useEffect(() => {
		postInvoicesToLocalStorage(state.invoices);
	}, [state.invoices]);

	return {
		state,
	};
};

export default useHandleInvoices;
