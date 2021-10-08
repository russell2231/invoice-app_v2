import Filter from './Filter/Filter';
import Button from '../shared/Button/Button';
import List from './List/List';
import { useGlobalContext } from '../App/context';

import styles from './Invoices.module.css';

const Invoices = () => {
	const { filteredInvoices, windowWidth } = useGlobalContext();
	const isDesktop = windowWidth >= 768;

	return (
		<section className={styles.container}>
			<header className={styles.header}>
				<div className={styles.info}>
					<h1>Invoices</h1>
					<span>
						{windowWidth >= 768
							? `There are ${filteredInvoices.length} total invoices`
							: `${filteredInvoices.length} invoices`}
					</span>
				</div>
				<Filter isDesktop={isDesktop} />
				<Button primary newInvoice>
					New {isDesktop && 'Invoice'}
				</Button>
			</header>
			<List />
		</section>
	);
};

export default Invoices;
