declare global {
	var __betfinio_mirror_coins: boolean;
}

export const setMirrorCoins = (value: boolean) => {
	globalThis.__betfinio_mirror_coins = value;
};

export const getMirrorCoins = () => globalThis.__betfinio_mirror_coins ?? false;
