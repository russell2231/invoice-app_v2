import Button from '../../shared/Button/Button';
import styles from './SubmitController.module.css';

const SubmitController = ({ discard, submit }) => {
	return (
		<div className={styles.container}>
			<Button type='button' edit small onClick={discard}>
				Discard
			</Button>
			<Button type='submit' draft small onClick={(e) => submit(e, 'save')}>
				Save as Draft
			</Button>
			<Button type='submit' primary small onClick={(e) => submit(e, 'add')}>
				Save & Send
			</Button>
		</div>
	);
};

export default SubmitController;
