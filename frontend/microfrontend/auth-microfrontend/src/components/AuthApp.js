// src/auth-microfrontend/AuthApp.js
import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import InfoTooltip from "./components/InfoTooltip";
import Header from "../shared/Header";
import * as auth from "./utils/auth";

function AuthApp() {
	const [isInfoToolTipOpen, setIsInfoToolTipOpen] = React.useState(false);
	const [tooltipStatus, setTooltipStatus] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [isLoggedIn, setIsLoggedIn] = React.useState(false);

	const history = useHistory();

	function onRegister({ email, password }) {
		auth
			.register(email, password)
			.then(() => {
				setTooltipStatus("success");
				setIsInfoToolTipOpen(true);
				history.push("/signin");
			})
			.catch(() => {
				setTooltipStatus("fail");
				setIsInfoToolTipOpen(true);
			});
	}

	function onLogin({ email, password }) {
		auth
			.login(email, password)
			.then(() => {
				setIsLoggedIn(true);
				setEmail(email);
				history.push("/");
			})
			.catch(() => {
				setTooltipStatus("fail");
				setIsInfoToolTipOpen(true);
			});
	}

	function onSignOut() {
		localStorage.removeItem("jwt");
		setIsLoggedIn(false);
		history.push("/signin");
	}

	return (
		<div className="auth-app">
			<Header email={email} onSignOut={onSignOut} />
			<Switch>
				<Route path="/signup">
					<Register onRegister={onRegister} />
				</Route>
				<Route path="/signin">
					<Login onLogin={onLogin} />
				</Route>
			</Switch>
			<InfoTooltip isOpen={isInfoToolTipOpen} onClose={() => setIsInfoToolTipOpen(false)} status={tooltipStatus} />
		</div>
	);
}

export default AuthApp;