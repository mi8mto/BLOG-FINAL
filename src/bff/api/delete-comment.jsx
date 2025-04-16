export const deleteComment = async (commentId) =>
	fetch(`http://localhost:3009/comments/${commentId}`, {
		method: 'DELETE',
	});
