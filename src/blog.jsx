import { useLayoutEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Error, Header, Footer, Modal } from './components';
import { Authorization, Main, Post, Registration } from './pages';
import { setUser } from './actions';
import { Users } from './pages/users/users';
import { ERROR } from './constants';

import styled from 'styled-components';

const AppColumn = styled.div`
	min-height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 1000px;
	margin: 0 auto;
	background-color: #fff;
	position: relative;
`;

const Page = styled.div`
	padding: 120px 0 20px;
`;

export const Blog = () => {
	const dispatch = useDispatch();

	useLayoutEffect(() => {
		const currentUserDataJSON = sessionStorage.getItem('userData');

		if (!currentUserDataJSON) {
			return;
		}

		const currentUserData = JSON.parse(currentUserDataJSON);

		dispatch(
			setUser({
				...currentUserData,
				roleId: Number(currentUserData.roleId),
			}),
		);
	}, [dispatch]);

	return (
		<AppColumn>
			<Header />
			<Page>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/login" element={<Authorization />} />
					<Route path="/register" element={<Registration />} />
					<Route path="/users" element={<Users />} />
					<Route path="/post" element={<Post />} />
					<Route path="/post/:id" element={<Post />} />
					<Route path="/post/:id/edit" element={<Post />} />
					<Route path="*" element={<Error error={ERROR.PAGE_NOT_EXIST} />} />
				</Routes>
			</Page>
			<Footer />
			<Modal />
		</AppColumn>
	);
};
