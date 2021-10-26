import { useGlobalContext } from '../../App/context';

import { ReactComponent as Delete } from '../../../assets/icon-delete.svg';
import styles from './ItemList.module.css';
import Button from '../../shared/Button/Button';

const ItemList = () => {
	const {
		items,
		windowWidth,
		handleInvoiceChange,
		handleAddItems,
		handleItemsRemove,
	} = useGlobalContext();
	const isDesktop = windowWidth >= 768;

	return (
		<fieldset className={styles.container}>
			<legend className={styles.title}>Item List</legend>
			<div className={styles.itemList}>
				{isDesktop && items.length > 0 && (
					<div className={styles.header}>
						<label>Item Name</label>
						<label>Qty.</label>
						<label>Price</label>
						<label>Total</label>
					</div>
				)}
				{items.map((item, index) => (
					<div className={styles.item} key={index}>
						<div className={styles.wrapper}>
							{!isDesktop && <label htmlFor={`name${index}`}>Item Name</label>}
							<input
								type='text'
								name='name'
								id={`name${index}`}
								value={item.name}
								onChange={(e) => handleInvoiceChange(e, 'items', null, index)}
							/>
						</div>
						<div className={styles.group}>
							<div className={styles.wrapper}>
								{!isDesktop && <label htmlFor='quantity'>Qty.</label>}
								<input
									type='text'
									name='quantity'
									id='quantity'
									value={item.quantity}
									onChange={(e) => handleInvoiceChange(e, 'items', null, index)}
								/>
							</div>
							<div className={styles.wrapper}>
								{!isDesktop && <label htmlFor='price'>Price</label>}
								<input
									type='number'
									name='price'
									id='price'
									value={item.price}
									onChange={(e) => handleInvoiceChange(e, 'items', null, index)}
								/>
							</div>
							<div className={styles.wrapper}>
								{!isDesktop && <label htmlFor='total'>Total</label>}
								<input
									type='text'
									name='total'
									id='total'
									disabled
									value={item.total}
								/>
							</div>
							<button
								type='button'
								className={styles.delIcon}
								onClick={() => handleItemsRemove(index)}
							>
								<Delete />
							</button>
						</div>
					</div>
				))}
			</div>
			<Button type='button' edit onClick={handleAddItems}>
				+ Add New Item
			</Button>
		</fieldset>
	);
};

export default ItemList;
