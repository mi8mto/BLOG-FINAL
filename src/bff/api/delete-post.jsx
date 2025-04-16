export const deletePost = (postId) =>
	fetch(`http://localhost:3009/posts/${postId}`, {
		method: 'DELETE',
	});
