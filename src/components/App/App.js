import { Route, Switch } from 'react-router';
import Header from '../Header/Header';
import Wrapper from '../Wrapper/Wrapper';
import Invoices from '../Invoices/Invoices';
import InvoiceSelect from '../InvoiceSelect/InvoiceSelect';

function App() {
	return (
		<Wrapper>
			<Header />
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
