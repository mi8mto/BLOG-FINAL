export const deleteUser = (userId) =>
	fetch(`http://localhost:3009/users/${userId}`, {
		method: 'DELETE',
	});
