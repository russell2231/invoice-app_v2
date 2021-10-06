import { IoIosArrowDown } from 'react-icons/io';

import styles from './Filter.module.css';

const Filter = () => {
	return (
		<div className={styles.container}>
			<div className={styles.filter}>
				<span>Filter</span>
				<IoIosArrowDown />
			</div>
		</div>
	);
};

export default Filter;
