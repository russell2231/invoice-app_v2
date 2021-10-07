import { IoIosArrowDown } from 'react-icons/io';

import styles from './Filter.module.css';

const Filter = ({ isDesktop }) => {
	return (
		<div className={styles.container}>
			<div className={styles.filter}>
				<span>Filter {isDesktop && 'by status'}</span>
				<IoIosArrowDown />
			</div>
		</div>
	);
};

export default Filter;
