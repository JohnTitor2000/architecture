import React from "react";
import Main from "../components/Main";
import AddPlacePopup from "../components/AddPlacePopup";
import ImagePopup from "../components/ImagePopup";
import api from "../utils/api";

function FeedApp() {
	const [cards, setCards] = React.useState([]);
	const [selectedCard, setSelectedCard] = React.useState(null);
	const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

	React.useEffect(() => {
		api.getCards()
			.then(setCards)
			.catch(console.error);
	}, []);

	function handleCardClick(card) {
		setSelectedCard(card);
	}

	function handleCardDelete(card) {
		api.removeCard(card._id)
			.then(() => setCards(cards.filter(c => c._id !== card._id)))
			.catch(console.error);
	}

	function handleAddPlaceSubmit(newCard) {
		api.addCard(newCard)
			.then(newCardFull => {
				setCards([newCardFull, ...cards]);
				setIsAddPlacePopupOpen(false);
			})
			.catch(console.error);
	}

	return (
		<div>
			<Main
				cards={cards}
				onCardClick={handleCardClick}
				onCardDelete={handleCardDelete}
			/>
			<AddPlacePopup
				isOpen={isAddPlacePopupOpen}
				onAddPlace={handleAddPlaceSubmit}
				onClose={() => setIsAddPlacePopupOpen(false)}
			/>
			<ImagePopup card={selectedCard} onClose={() => setSelectedCard(null)} />
		</div>
	);
}

export default FeedApp;