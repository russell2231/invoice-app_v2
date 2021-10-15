import { Route, Switch } from 'react-router';
import { useGlobalContext } from './context';
import Header from '../Header/Header';
import Wrapper from '../Wrapper/Wrapper';
import Invoices from '../Invoices/Invoices';
import InvoiceSelect from '../InvoiceSelect/InvoiceSelect';
import FormController from '../FormController/FormController';

function App() {
	const { state } = useGlobalContext();
	const isFormOpen = state.isFormOpen;

	return (
		<Wrapper>
			<Header />
			{isFormOpen && <FormController />}
			<Switch>
				<Route exact path='/'>
					<Invoices />
				</Route>
				<Route path='/invoice/:id'>
					<InvoiceSelect />
				</Route>
			</Switch>
		</Wrapper>
	);
}

export default App;
