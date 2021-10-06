import styles from './Button.module.css';

const Button = ({ children, primary, newInvoice, ...otherProps }) => {
	return (
		<button
			className={`${styles.button} ${primary ? styles.primary : ''} ${
				newInvoice ? styles.newInvoice : ''
			} `}
			{...otherProps}
		>
			{children}
		</button>
	);
};

export default Button;
