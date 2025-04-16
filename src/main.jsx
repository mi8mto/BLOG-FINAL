import React from 'react';
import { HashRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Blog } from './blog';
import { Provider } from 'react-redux';
import { store } from './store';
import './main.css';

createRoot(document.getElementById('root')).render(
	<HashRouter>
		<Provider store={store}>
			<Blog />
		</Provider>
	</HashRouter>,
);
