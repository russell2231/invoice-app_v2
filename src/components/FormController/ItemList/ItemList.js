import { useGlobalContext } from '../../App/context';

import { ReactComponent as Delete } from '../../../assets/icon-delete.svg';
import styles from './ItemList.module.css';
import Button from '../../shared/Button/Button';

const ItemList = () => {
	const { items } = useGlobalContext();

	return (
		<fieldset>
			<legend>Item List</legend>
			<div>
				{items.map((item, index) => (
					<div>
						<div>
							<label htmlFor='name'>Item Name</label>
							<input type='text' name='name' id='name' value={item.name} />
						</div>
						<div>
							<label htmlFor='quantity'>Qty.</label>
							<input
								type='number'
								name='quantity'
								id='quantity'
								value={item.quantity}
							/>
						</div>
						<div>
							<label htmlFor='price'>Price</label>
							<input type='number' name='price' id='price' value={item.price} />
						</div>
						<div>
							<label>Total</label>
							<span>{item.total}</span>
						</div>
						<button type='button'>
							<Delete />
						</button>
					</div>
				))}
			</div>
			<Button edit>+ Add New Item</Button>
		</fieldset>
	);
};

export default ItemList;
