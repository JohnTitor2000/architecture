import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import ProfileApp from "./components/ProfileApp";

const lifecycles = singleSpaReact({
	React,
	ReactDOM,
	rootComponent: ProfileApp,
	errorBoundary(err, info, props) {
		return <div>Ошибка загрузки AuthApp.</div>;
	},
});

export const { bootstrap, mount, unmount } = lifecycles;