import { Component, ReactNode } from 'react';
import NotFound from './components/pages/NotFound';

type DerivedState = {
	hasError: boolean;
};

class ErrorBoundary extends Component {
	state = {
		error: '',
		hasError: false,
	};

	static getDerivedStateFromError(): DerivedState {
		return { hasError: true };
	}

	componentDidCatch(error: Error): void {
		this.setState({
			error: error.message,
		});
	}

	render(): ReactNode {
		const { hasError, error } = this.state;
		const { children } = this.props;

		return hasError ? <NotFound title="Ooops, something went wrong..." copy={error} /> : children;
	}
}

export default ErrorBoundary;
