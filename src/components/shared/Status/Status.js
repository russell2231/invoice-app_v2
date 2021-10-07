import styles from './Status.module.css';

const Status = ({ status }) => {
	return (
		<div
			className={`${styles.status} ${
				status === 'paid'
					? styles.paid
					: status === 'pending'
					? styles.pending
					: styles.draft
			}`}
		>
			<span className={styles.circle}></span>
			<p className={styles.text}>{status}</p>
		</div>
	);
};

export default Status;
