import { useGlobalContext } from '../../App/context';
import DatePicker from '../DatePicker/DatePicker';
import ItemList from '../ItemList/ItemList';
import Select from '../Select/Select';
import styles from './Form.module.css';

const Form = () => {
	const { invoice, handleInvoiceChange, state } = useGlobalContext();
	const isInvoiceEdited = state.isInvoiceEdited;

	return (
		<>
			{!isInvoiceEdited && <h1 className={styles.title}>New Invoice</h1>}
			{isInvoiceEdited && (
				<h1 className={styles.title}>
					Edit <span>#</span>
					{invoice.id}
				</h1>
			)}
			<form className={styles.form}>
				<fieldset className={styles.formGroup}>
					<legend className={styles.formGroupTitle}>Bill From</legend>
					<div className={styles.inputWrapper}>
						<label htmlFor='senderStreet' className={styles.label}>
							Street Address
						</label>
						<input
							type='text'
							name='street'
							value={invoice.senderAddress.street}
							id='senderStreet'
							className={styles.input}
							onChange={(e) => handleInvoiceChange(e, 'senderAddress')}
						/>
					</div>

					<div className={styles.inputGroupAddress}>
						<div className={styles.inputWrapper}>
							<label htmlFor='senderCity' className={styles.label}>
								City
							</label>
							<input
								type='text'
								name='city'
								value={invoice.senderAddress.city}
								id='senderCity'
								className={styles.input}
								onChange={(e) => handleInvoiceChange(e, 'senderAddress')}
							/>
						</div>
						<div className={styles.inputWrapper}>
							<label htmlFor='senderPostCode' className={styles.label}>
								Post Code
							</label>
							<input
								type='text'
								name='postCode'
								value={invoice.senderAddress.postCode}
								id='senderPostCode'
								className={styles.input}
								onChange={(e) => handleInvoiceChange(e, 'senderAddress')}
							/>
						</div>

						<div className={`${styles.inputWrapper} ${styles.country}`}>
							<label htmlFor='senderCountry' className={styles.label}>
								Country
							</label>
							<input
								type='text'
								name='country'
								value={invoice.senderAddress.country}
								id='senderCountry'
								className={styles.input}
								onChange={(e) => handleInvoiceChange(e, 'senderAddress')}
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
							value={invoice.clientName}
							onChange={(e) => handleInvoiceChange(e, 'invoice')}
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
							value={invoice.clientEmail}
							onChange={(e) => handleInvoiceChange(e, 'invoice')}
						/>
					</div>

					<div className={styles.inputWrapper}>
						<label htmlFor='clientStreet' className={styles.label}>
							Street Address
						</label>
						<input
							type='text'
							name='street'
							id='clientStreet'
							className={styles.input}
							value={invoice.clientAddress.street}
							onChange={(e) => handleInvoiceChange(e, 'clientAddress')}
						/>
					</div>

					<div className={styles.inputGroupAddress}>
						<div className={styles.inputWrapper}>
							<label htmlFor='clientCity' className={styles.label}>
								City
							</label>
							<input
								type='text'
								name='city'
								id='clientCity'
								className={styles.input}
								value={invoice.clientAddress.city}
								onChange={(e) => handleInvoiceChange(e, 'clientAddress')}
							/>
						</div>
						<div className={styles.inputWrapper}>
							<label htmlFor='clientPostCode' className={styles.label}>
								Post Code
							</label>
							<input
								type='text'
								name='postCode'
								id='clientPostCode'
								className={styles.input}
								value={invoice.clientAddress.postCode}
								onChange={(e) => handleInvoiceChange(e, 'clientAddress')}
							/>
						</div>

						<div className={`${styles.inputWrapper} ${styles.country}`}>
							<label htmlFor='clientCountry' className={styles.label}>
								Country
							</label>
							<input
								type='text'
								name='country'
								id='clientCountry'
								className={styles.input}
								value={invoice.clientAddress.country}
								onChange={(e) => handleInvoiceChange(e, 'clientAddress')}
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
								value={invoice.description}
								onChange={(e) => handleInvoiceChange(e, 'invoice')}
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
