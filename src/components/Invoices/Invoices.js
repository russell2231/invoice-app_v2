import Filter from './Filter/Filter';
import Button from '../shared/Button/Button';

import styles from './Invoices.module.css';

const Invoices = () => {
	return (
		<section className={styles.container}>
			<div className={styles.info}>
				<h1>Invoices</h1>
				<span>7 invoices</span>
			</div>
			<Filter />
			<Button primary newInvoice>
				New
			</Button>
		</section>
	);
};

export default Invoices;
