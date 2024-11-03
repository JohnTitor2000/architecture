import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import api from "../utils/api";

function LikeApp({ cards, onUpdateCards }) {
	const currentUser = React.useContext(CurrentUserContext);

	function handleCardLike(card) {
		const isLiked = card.likes.some(i => i._id === currentUser._id);
		api.changeLikeCardStatus(card._id, !isLiked)
			.then(newCard => {
				const updatedCards = cards.map(c => (c._id === card._id ? newCard : c));
				onUpdateCards(updatedCards);
			})
			.catch(console.error);
	}

	return (
		<div>
			{/* Здесь будет отображение карточек с кнопками лайка, 
           при нажатии на которые вызывается handleCardLike */}
		</div>
	);
}

export default LikeApp;