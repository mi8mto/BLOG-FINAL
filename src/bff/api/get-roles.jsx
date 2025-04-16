export const getRoles = () =>
	fetch('http://localhost:3009/roles').then((loadedRoles) => loadedRoles.json());
