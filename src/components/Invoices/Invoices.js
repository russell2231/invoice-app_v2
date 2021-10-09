import Filter from './Filter/Filter';
import Button from '../shared/Button/Button';
import List from './List/List';
import { useGlobalContext } from '../App/context';
import invoiceMessage from '../../helpers/invoiceMessage';
import NoInvoices from './NoInvoices/NoInvoices';

import styles from './Invoices.module.css';

const Invoices = () => {
	const { filteredInvoices, filterType, windowWidth } = useGlobalContext();
	const isDesktop = windowWidth >= 768;
	const isEmpty = filteredInvoices.length === 0;

	return (
		<section className={styles.container}>
			<header className={styles.header}>
				<div className={styles.info}>
					<h1>Invoices</h1>
					<span>
						{invoiceMessage(filteredInvoices, filterType, windowWidth)}
					</span>
				</div>
				<Filter isDesktop={isDesktop} />
				<Button primary newInvoice>
					New {isDesktop && 'Invoice'}
				</Button>
			</header>
			{isEmpty && <NoInvoices />}
			{!isEmpty && <List />}
		</section>
	);
};

export default Invoices;
