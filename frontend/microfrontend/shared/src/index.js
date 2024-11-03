import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';

const lifecycles = singleSpaReact({
	React,
	ReactDOM,
	rootComponent: SharedApp,
	errorBoundary(err, info, props) {
		return <div>Ошибка загрузки AuthApp.</div>;
	},
});

export const { bootstrap, mount, unmount } = lifecycles;