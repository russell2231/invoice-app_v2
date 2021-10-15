import Button from '../../shared/Button/Button';
import styles from './SubmitController.module.css';

const SubmitController = () => {
	return (
		<div className={styles.container}>
			<Button type='button' edit small>
				Discard
			</Button>
			<Button type='submit' draft small>
				Save as Draft
			</Button>
			<Button type='submit' primary small>
				Save & Send
			</Button>
		</div>
	);
};

export default SubmitController;
