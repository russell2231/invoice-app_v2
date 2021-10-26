import { useEffect, useState } from 'react';
import { useGlobalContext } from '../../App/context';

import { IoIosArrowDown } from 'react-icons/io';

import styles from './Filter.module.css';

const Filter = ({ isDesktop }) => {
	const { filterType, changeFilterType } = useGlobalContext();
	const [isFilterOpen, setIsFilterOpen] = useState(false);

	useEffect(() => {
		const clickedOutside = (e) => {
			const target = e.target.nodeName;

			if (target !== 'BUTTON' && target !== 'UL') {
				setIsFilterOpen(false);
			}
		};

		isFilterOpen && document.addEventListener('click', clickedOutside);

		return () => {
			document.removeEventListener('click', clickedOutside);
		};
	}, [isFilterOpen]);

	return (
		<div className={styles.container}>
			<div
				className={styles.filter}
				onClick={() => setIsFilterOpen(!isFilterOpen)}
			>
				<span>Filter {isDesktop && 'by status'}</span>
				<IoIosArrowDown />
			</div>
			{isFilterOpen && (
				<ul className={styles.list}>
					<li className={styles.item}>
						<button
							onClick={(e) => changeFilterType(e)}
							className={`${styles.option} ${
								filterType === 'draft' ? styles.active : ''
							}`}
							value='draft'
						>
							Draft
						</button>
					</li>
					<li className={styles.item}>
						<button
							onClick={(e) => changeFilterType(e)}
							className={`${styles.option} ${
								filterType === 'pending' ? styles.active : ''
							}`}
							value='pending'
						>
							Pending
						</button>
					</li>
					<li className={styles.item}>
						<button
							onClick={(e) => changeFilterType(e)}
							className={`${styles.option} ${
								filterType === 'paid' ? styles.active : ''
							}`}
							value='paid'
						>
							Paid
						</button>
					</li>
				</ul>
			)}
		</div>
	);
};

export default Filter;
