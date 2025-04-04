import PocketBase from 'pocketbase';

const url = 'https://admin.oberberg.dating';
const pb : PocketBase = new PocketBase(url);

export const usePocketBaseUrl = () => {
	return url;
};

export const usePocketBase = () => {
	return pb;
};
