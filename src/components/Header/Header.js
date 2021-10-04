import LogoIcon from './LogoIcon/LogoIcon';
import { IoMoon } from 'react-icons/io5';
import ProfileImage from '../../assets/image-avatar.jpg';

import styles from './Header.module.css';

const Header = () => {
	return (
		<header className={styles.header}>
			<LogoIcon />
			<div className={styles.actions}>
				<div className={styles['theme-icon']}>
					<IoMoon />
				</div>
				<div className={styles.profile}>
					<img src={ProfileImage} alt='' />
				</div>
			</div>
		</header>
	);
};

export default Header;
