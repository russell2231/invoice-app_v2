import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './components/App/App';
import { AppProvider } from './components/App/context';

ReactDOM.render(
	<React.StrictMode>
		<AppProvider>
			<Router>
				<App />
			</Router>
		</AppProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
