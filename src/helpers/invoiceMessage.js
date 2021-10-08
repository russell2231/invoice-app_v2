const invoiceMessage = (invoices, filter, window) => {
	const invoicesLength = invoices.length;
	const filterType = filter === 'all' ? 'total' : filter;
	const isMobile = window <= 768;

	if (invoicesLength === 0) {
		return 'No Invoices';
	} else if (invoicesLength === 1) {
		if (isMobile) {
			return `1 ${filterType} invoice`;
		} else {
			return `There is 1 ${filterType} invoice`;
		}
	} else if (invoicesLength > 1) {
		if (isMobile) {
			return `${invoicesLength} ${filterType} invoices`;
		} else {
			return `There are ${invoicesLength} ${filterType} invoices`;
		}
	}
};

export default invoiceMessage;
