import React from "react";
import EditProfilePopup from "../components/EditProfilePopup";
import EditAvatarPopup from "../components/EditAvatarPopup";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import api from "../utils/api";

function ProfileApp() {
	const [currentUser, setCurrentUser] = React.useState({});
	const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
	const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

	React.useEffect(() => {
		api.getUserInfo().then(setCurrentUser).catch(console.error);
	}, []);

	function handleUpdateUser(userUpdate) {
		api.setUserInfo(userUpdate)
			.then(setCurrentUser)
			.then(() => setIsEditProfilePopupOpen(false))
			.catch(console.error);
	}

	function handleUpdateAvatar(avatarUpdate) {
		api.setUserAvatar(avatarUpdate)
			.then(setCurrentUser)
			.then(() => setIsEditAvatarPopupOpen(false))
			.catch(console.error);
	}

	return (
		<CurrentUserContext.Provider value={currentUser}>
			<EditProfilePopup
				isOpen={isEditProfilePopupOpen}
				onUpdateUser={handleUpdateUser}
				onClose={() => setIsEditProfilePopupOpen(false)}
			/>
			<EditAvatarPopup
				isOpen={isEditAvatarPopupOpen}
				onUpdateAvatar={handleUpdateAvatar}
				onClose={() => setIsEditAvatarPopupOpen(false)}
			/>
		</CurrentUserContext.Provider>
	);
}

export default ProfileApp;