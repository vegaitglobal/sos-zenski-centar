const map = ['null', 'default', 'overlay'] as const;

export const zIndex = (name: typeof map[number] | 'negative'): number =>
	map.findIndex((itemName) => itemName === name);
