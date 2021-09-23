import { useEffect, useReducer } from 'react';

type ReducerState = {
	response?: unknown | null;
	isLoading?: boolean;
	error?: unknown | null;
};

type ReducerAction = {
	type: 'success' | 'loading' | 'error';
	payload?: ReducerState;
};

const initialState: ReducerState = { response: null, isLoading: false, error: null };

const reducerActions = {
	error: (_state: ReducerState, { error }: ReducerState = {}) => ({
		response: null,
		isLoading: false,
		error,
	}),
	loading: (state: ReducerState) => ({
		...state,
		isLoading: true,
		error: null,
	}),
	success: (_state: ReducerState, { response }: ReducerState = {}) => ({
		response,
		isLoading: false,
		error: null,
	}),
} as const;

const reducer = (state: ReducerState, { type, payload }: ReducerAction): ReducerState => {
	const reducerAction = reducerActions[type];

	return reducerAction(state, payload);
};

export const useFetch = (url: RequestInfo, init?: RequestInit): ReducerState => {
	const [state, dispatch] = useReducer(reducer, initialState);

	// Turn objects into strings for useEffect dependencies
	const [stringifiedUrl, stringifiedInit] = [JSON.stringify(url), JSON.stringify(init)];

	useEffect(() => {
		async function fetchApi(): Promise<void> {
			dispatch({ type: 'loading' });
			try {
				const response = await fetch(url, init);
				const data = await response.json();

				dispatch({ type: 'success', payload: { response: data } });
			} catch (error) {
				console.error(`Error ${error}`);
				dispatch({
					type: 'error',
					payload: { error },
				});
			}
		}

		fetchApi();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [stringifiedUrl, stringifiedInit]);

	return state;
};
