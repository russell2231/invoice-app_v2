import React, { useState, useEffect, useContext } from 'react';
import useHandleInvoices from '../../hooks/useHandleInvoices';
import useFilter from '../../hooks/useFilter';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const { state, invoice, items, createInvoice, discard } = useHandleInvoices();
	const { filterType, changeFilterType, filteredInvoices } = useFilter(state);
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
		<AppContext.Provider
			value={{
				state,
				invoice,
				items,
				createInvoice,
				discard,
				windowWidth,
				filterType,
				changeFilterType,
				filteredInvoices,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppProvider };
