import { useGlobalContext } from '../../App/context';

import { IoIosArrowDown } from 'react-icons/io';
import styles from './Select.module.css';

const Select = () => {
	const { invoice } = useGlobalContext();

	return (
		<div>
			<button type='button'>
				Net {invoice.paymentTerms} Days <IoIosArrowDown />
			</button>
		</div>
	);
};

export default Select;
