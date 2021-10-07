import { Route, Switch } from 'react-router';
import Header from '../Header/Header';
import Wrapper from '../Wrapper/Wrapper';
import Invoices from '../Invoices/Invoices';

function App() {
	return (
		<Wrapper>
			<Header />
			<Switch>
				<Route exact to='/'>
					<Invoices />
				</Route>
			</Switch>
		</Wrapper>
	);
}

export default App;
