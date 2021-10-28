import { useHistory } from 'react-router-dom';
import { useGlobalContext } from '../App/context';
import Button from '../shared/Button/Button';
import styles from './Modal.module.css';

const ModalStatus = () => {
	const { state, toggleModal } = useGlobalContext();
	const history = useHistory();

	const reRoute = () => {
		let path = '/';
		history.push(path);
	};

	return (
		<div className={styles.modalContent}>
			<h1 className={styles.title}>Confirm Change</h1>
			<p className={styles.tagline}>
				Are you sure you want to mark invoice #{state.currInvoiceIndex} as paid?
				This action cannot be undone.
			</p>
			<div className={styles.actions}>
				<Button edit onClick={toggleModal}>
					Cancel
				</Button>
				<Button primary>Mark as Paid</Button>
			</div>
		</div>
	);
};

export default ModalStatus;
