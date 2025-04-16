import { transformUser } from '../transformers';

export const getUser = async (loginToFind) =>
	fetch(`http://localhost:3009/users?login=${loginToFind}`)
		.then((loadedUser) => loadedUser.json())
		.then(([loadedUser]) => loadedUser && transformUser(loadedUser));
