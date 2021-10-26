const convertStringToDateInstance = (date) => {
	return typeof date === 'object' ? date : new Date(date.replaceAll('-', ','));
};

const generatePaymentDueDate = (createDate, terms) => {
	const daysToMilliseconds = parseInt(terms) * 24 * 60 * 60 * 1000;
	const paymentDue = new Date(
		convertStringToDateInstance(createDate).getTime() + daysToMilliseconds
	);
	return paymentDue;
};

export default generatePaymentDueDate;
