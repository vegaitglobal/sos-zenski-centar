import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './components/App';
import { theme } from './styles/config/theme';
import GlobalStyle from './styles/GlobalStyles';
import reportWebVitals from './reportWebVitals';
import { GlobalStoreProvider } from './GlobalStore';
import ErrorBoundary from './ErrorBoundary';

render(
	<React.StrictMode>
		<ErrorBoundary>
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<GlobalStoreProvider>
						<GlobalStyle />
						<App />
					</GlobalStoreProvider>
				</ThemeProvider>
			</BrowserRouter>
		</ErrorBoundary>
	</React.StrictMode>,
	document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
