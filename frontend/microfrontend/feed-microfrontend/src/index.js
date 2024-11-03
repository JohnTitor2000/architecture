import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import FeedApp from "./components/FeedApp";

const lifecycles = singleSpaReact({
	React,
	ReactDOM,
	rootComponent: FeedApp,
	errorBoundary(err, info, props) {
		return <div>Ошибка загрузки AuthApp.</div>;
	},
});

export const { bootstrap, mount, unmount } = lifecycles;