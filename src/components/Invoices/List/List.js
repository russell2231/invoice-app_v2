import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../App/context';
import Status from '../../shared/Status/Status';

import styles from './List.module.css';

const List = () => {
	const { state, windowWidth } = useGlobalContext();
	const isEmpty = state.invoices.length === 0;

	return (
		<ul className={styles.list}>
			{state.invoices.map(({ id, paymentDue, clientName, total, status }) => (
				<li className={styles.item} key={id}>
					<Link className={styles.link} to={`/invoice/${id}`}>
						<p className={styles.id}>
							<span className={styles.hash}>#</span>
							{id}
						</p>
						<p className={styles['payment-due']}>Due {paymentDue}</p>
						<p className={styles['client-name']}>{clientName}</p>
						<p className={styles.total}>${total.toFixed(2)}</p>
						<Status status={status} />
					</Link>
				</li>
			))}
		</ul>
	);
};

export default List;
