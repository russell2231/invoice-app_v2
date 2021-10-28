import { useHistory } from 'react-router-dom';
import { useGlobalContext } from '../App/context';
import Button from '../shared/Button/Button';
import styles from './Modal.module.css';

const ModalDelete = () => {
	const { state, toggleModal, deleteInvoice } = useGlobalContext();
	const history = useHistory();

	const reRoute = () => {
		let path = '/';
		history.push(path);
	};

	return (
		<div className={styles.modalContent}>
			<h1 className={styles.title}>Confirm Deletion</h1>
			<p className={styles.tagline}>
				Are you sure you want to delete invoice #{state.currInvoiceIndex}? This
				action cannot be undone.
			</p>
			<div className={styles.actions}>
				<Button edit onClick={toggleModal}>
					Cancel
				</Button>
				<Button
					del
					onClick={() => {
						deleteInvoice();
						reRoute();
					}}
				>
					Delete
				</Button>
			</div>
		</div>
	);
};

export default ModalDelete;
