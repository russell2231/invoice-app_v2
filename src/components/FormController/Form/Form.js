import DatePicker from '../DatePicker/DatePicker';
import ItemList from '../ItemList/ItemList';
import Select from '../Select/Select';
import styles from './Form.module.css';

const Form = () => {
	return (
		<>
			<h1 className={styles.title}>New Invoice</h1>
			<form className={styles.form}>
				<fieldset className={styles.formGroup}>
					<legend className={styles.formGroupTitle}>Bill From</legend>
					<div className={styles.inputWrapper}>
						<label htmlFor='senderStreet' className={styles.label}>
							Street Address
						</label>
						<input
							type='text'
							name='senderStreet'
							id='senderStreet'
							className={styles.input}
						/>
					</div>

					<div className={styles.inputGroupAddress}>
						<div className={styles.inputWrapper}>
							<label htmlFor='senderCity' className={styles.label}>
								City
							</label>
							<input
								type='text'
								name='senderCity'
								id='senderCity'
								className={styles.input}
							/>
						</div>
						<div className={styles.inputWrapper}>
							<label htmlFor='senderPostCode' className={styles.label}>
								Post Code
							</label>
							<input
								type='text'
								name='senderPostCode'
								id='senderPostCode'
								className={styles.input}
							/>
						</div>

						<div className={`${styles.inputWrapper} ${styles.country}`}>
							<label htmlFor='senderCountry' className={styles.label}>
								Country
							</label>
							<input
								type='text'
								name='senderCountry'
								id='senderCountry'
								className={styles.input}
							/>
						</div>
					</div>
				</fieldset>

				<fieldset className={styles.formGroup}>
					<legend className={styles.formGroupTitle}>Bill To</legend>
					<div className={styles.inputWrapper}>
						<label htmlFor='clientName' className={styles.label}>
							Client's Name
						</label>
						<input
							type='text'
							name='clientName'
							id='clientName'
							className={styles.input}
						/>
					</div>

					<div className={styles.inputWrapper}>
						<label htmlFor='clientEmail' className={styles.label}>
							Client's Email
						</label>
						<input
							type='text'
							name='clientEmail'
							id='clientEmail'
							className={styles.input}
						/>
					</div>

					<div className={styles.inputWrapper}>
						<label htmlFor='clientStreet' className={styles.label}>
							Street Address
						</label>
						<input
							type='text'
							name='clientStreet'
							id='clientStreet'
							className={styles.input}
						/>
					</div>

					<div className={styles.inputGroupAddress}>
						<div className={styles.inputWrapper}>
							<label htmlFor='clientCity' className={styles.label}>
								City
							</label>
							<input
								type='text'
								name='clientCity'
								id='clientCity'
								className={styles.input}
							/>
						</div>
						<div className={styles.inputWrapper}>
							<label htmlFor='clientPostCode' className={styles.label}>
								Post Code
							</label>
							<input
								type='text'
								name='clientPostCode'
								id='clientPostCode'
								className={styles.input}
							/>
						</div>

						<div className={`${styles.inputWrapper} ${styles.country}`}>
							<label htmlFor='clientCountry' className={styles.label}>
								Country
							</label>
							<input
								type='text'
								name='clientCountry'
								id='clientCountry'
								className={styles.input}
							/>
						</div>
					</div>
				</fieldset>

				<fieldset className={styles.formGroup}>
					<div className={styles.inputGroupOptions}>
						<div className={styles.inputWrapper}>
							<label className={styles.label}>Invoice Date</label>
							<DatePicker />
						</div>
						<div className={styles.inputWrapper}>
							<label className={styles.label}>Payment Terms</label>
							<Select />
						</div>
						<div className={`${styles.inputWrapper} ${styles.description}`}>
							<label htmlFor='description' className={styles.label}>
								Project Description
							</label>
							<input
								type='text'
								name='description'
								id='description'
								className={styles.input}
							/>
						</div>
					</div>
				</fieldset>
				<ItemList />
			</form>
		</>
	);
};

export default Form;
