import PocketBase from 'pocketbase';

const pb : PocketBase = new PocketBase('https://admin.oberberg.dating');

export const usePocketBase = () => {
	return pb;
};
