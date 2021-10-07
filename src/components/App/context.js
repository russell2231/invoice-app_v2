import React, { useState, useEffect, useContext } from 'react';
import useHandleInvoices from '../../hooks/useHandleInvoices';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const { state } = useHandleInvoices();
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	const handleResize = () => {
		setWindowWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<AppContext.Provider value={{ state, windowWidth }}>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppProvider };