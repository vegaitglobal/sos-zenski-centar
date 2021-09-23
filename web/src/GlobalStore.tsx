import createStoreContext from './utils/createStoreContext';

type StoreType = {
	count: number;
	increment: () => void;
	decrement: () => void;
};

export const [GlobalStoreProvider, useGlobalStore] = createStoreContext<StoreType>(
	'GlobalStore',
	() => ({
		count: 0,
		increment() {
			this.count += 1;
		},
		decrement() {
			this.count -= 1;
		},
	}),
);

export type GlobalStore = ReturnType<typeof useGlobalStore>;
