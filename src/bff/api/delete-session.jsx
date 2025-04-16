export const deleteSession = async (sessionId) =>
	fetch(`http://localhost:3009/sessions/${sessionId}`, {
		method: 'DELETE',
	});
