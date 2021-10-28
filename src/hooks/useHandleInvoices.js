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
	isInvoiceEdited: false,
	currInvoiceIndex: null,
	isModalOpen: { status: false, name: '' },
};

const useHandleInvoices = () => {
	const [state, dispatch] = useReducer(invoicesReducer, INITIAL_STATE);
	const [invoice, setInvoice] = useState(INITIAL_INVOICE);
	const [senderAddress, setSenderAddress] = useState(INITIAL_ADDRESS);
	const [clientAddress, setClientAddress] = useState(INITIAL_ADDRESS);
	const [items, setItems] = useState([]);

	useEffect(() => {
		setInvoice((prevState) => {
			return { ...prevState, senderAddress, clientAddress, items };
		});
	}, [senderAddress, clientAddress, items]);

	useEffect(() => {
		postInvoicesToLocalStorage(state.invoices);
	}, [state.invoices]);

	const handleInvoiceChange = (e, type, date, index) => {
		const name = e ? e.target.name : null;
		const value = e ? e.target.value : null;

		switch (type) {
			case 'invoice':
				setInvoice({ ...invoice, [name]: value });
				break;
			case 'senderAddress':
				setSenderAddress({ ...senderAddress, [name]: value });
				break;
			case 'clientAddress':
				setClientAddress({ ...clientAddress, [name]: value });
				break;
			case 'date':
				setInvoice((prevState) => {
					return { ...prevState, createdAt: date };
				});
				break;
			case 'items':
				const newItems = [...items];
				newItems[index] = { ...newItems[index], [name]: value };
				newItems[index]['total'] =
					newItems[index]['price'] * newItems[index]['quantity'];
				setItems(newItems);
				break;
			default:
				throw new Error('No Matching type');
		}
	};

	const handleAddItems = () => {
		setItems([...items, { ...INITIAL_ITEM }]);
	};

	const handleItemsRemove = (index) => {
		const newItems = [...items];
		newItems.splice(index, 1);
		setItems(newItems);
	};

	const handleSubmit = (e, type) => {
		e.preventDefault();

		if (type === 'add') {
			addInvoice(invoice, state, 'new');
			restoreToInitial();
		}
		if (type === 'save') {
			addInvoice(invoice, state, 'draft');
			restoreToInitial();
		}
	};

	// Helpers

	const setEditedInvoice = (index) => {
		const currInvoice = state.invoices.find((invoice) => invoice.id === index);
		setInvoice(currInvoice);
		setClientAddress(currInvoice.clientAddress);
		setSenderAddress(currInvoice.senderAddress);
		setItems(currInvoice.items);
	};

	const restoreToInitial = () => {
		setInvoice(INITIAL_INVOICE);
		setClientAddress(INITIAL_ADDRESS);
		setSenderAddress(INITIAL_ADDRESS);
		setItems([]);
	};

	// Dispatchers

	const createInvoice = () => {
		dispatch(ACTIONS.create());
	};

	const editInvoice = (index) => {
		dispatch(ACTIONS.edit(index));
		setEditedInvoice(index);
	};

	const addInvoice = (invoice, state, type) => {
		dispatch(ACTIONS.add(invoice, state, type));
	};

	const discard = () => {
		dispatch(ACTIONS.discard());
		restoreToInitial();
	};

	const toggleModal = (index, name) => {
		dispatch(ACTIONS.modal(index, name));
	};

	return {
		state,
		invoice,
		senderAddress,
		clientAddress,
		items,
		handleInvoiceChange,
		handleAddItems,
		handleItemsRemove,
		handleSubmit,
		createInvoice,
		editInvoice,
		discard,
		toggleModal,
	};
};

export default useHandleInvoices;
