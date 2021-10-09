import EmptyIcon from '../../../assets/illustration-empty.svg';

import styles from './NoInvoices.module.css';

const NoInvoices = () => {
	return (
		<div className={styles.container}>
			<img className={styles.image} src={EmptyIcon} alt='no invoices' />
			<h2 className={styles.title}>There is nothing here</h2>
			<p className={styles.tagline}>
				Create an invoice by clicking the <span>New</span> button and get
				started
			</p>
		</div>
	);
};

export default NoInvoices;
