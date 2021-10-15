import { forwardRef } from 'react';
import { useGlobalContext } from '../../App/context';
import ReactDatePicker from 'react-datepicker';

import { ReactComponent as Icon } from '../../../assets/icon-calendar.svg';

import styles from './DatePicker.module.css';

const dateToString = (date) => {
	const displayOptions = {
		day: '2-digit',
		month: 'short',
		year: 'numeric',
	};
	const newDate = new Date(date).toLocaleString('en-US', displayOptions);

	return newDate;
};

const CustomInput = forwardRef(({ isDisabled, value, onClick }, ref) => (
	<button
		type='button'
		disabled={isDisabled}
		onClick={onClick}
		value={value}
		ref={ref}
	>
		{dateToString(value)} <Icon />
	</button>
));

const DatePicker = () => {
	const { invoice } = useGlobalContext();

	return (
		<ReactDatePicker
			selected={new Date(invoice.createdAt)}
			minDate={new Date()}
			CustomInput={<CustomInput />}
		/>
	);
};

export default DatePicker;
