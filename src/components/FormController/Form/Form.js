import DatePicker from '../DatePicker/DatePicker';
import ItemList from '../ItemList/ItemList';
import Select from '../Select/Select';
import styles from './Form.module.css';

const Form = () => {
	return (
		<>
			<h1>New Invoice</h1>
			<form>
				<fieldset>
					<legend>Bill From</legend>
					<div>
						<label htmlFor='senderStreet'>Street Address</label>
						<input type='text' name='senderStreet' id='senderStreet' />
					</div>

					<div>
						<div>
							<label htmlFor='senderCity'>City</label>
							<input type='text' name='senderCity' id='senderCity' />
						</div>
						<div>
							<label htmlFor='senderPostCode'>Post Code</label>
							<input type='text' name='senderPostCode' id='senderPostCode' />
						</div>

						<div>
							<label htmlFor='senderCountry'>Country</label>
							<input type='text' name='senderCountry' id='senderCountry' />
						</div>
					</div>
				</fieldset>

				<fieldset>
					<legend>Bill To</legend>
					<div>
						<label htmlFor='clientName'>Client's Name</label>
						<input type='text' name='clientName' id='clientName' />
					</div>

					<div>
						<label htmlFor='clientEmail'>Client's Email</label>
						<input type='text' name='clientEmail' id='clientEmail' />
					</div>

					<div>
						<label htmlFor='clientStreet'>Street Address</label>
						<input type='text' name='clientStreet' id='clientStreet' />
					</div>

					<div>
						<div>
							<label htmlFor='clientCity'>City</label>
							<input type='text' name='clientCity' id='clientCity' />
						</div>
						<div>
							<label htmlFor='clientPostCode'>Post Code</label>
							<input type='text' name='clientPostCode' id='clientPostCode' />
						</div>

						<div>
							<label htmlFor='clientCountry'>Country</label>
							<input type='text' name='clientCountry' id='clientCountry' />
						</div>
					</div>
				</fieldset>

				<fieldset>
					<div>
						<div>
							<label>Invoice Date</label>
							<DatePicker />
						</div>
						<div>
							<label>Payment Terms</label>
							<Select />
						</div>
						<div>
							<label htmlFor='description'>Project Description</label>
							<input type='text' name='description' id='description' />
						</div>
					</div>
				</fieldset>
				<ItemList />
			</form>
		</>
	);
};

export default Form;
