import apiProfile from './apiProfile';
import apiFeed from './apiFeed';

function getAppInfo() {
	return Promise.all([apiFeed.getCardList(), apiProfile.getUserInfo()]);
}

export default getAppInfo;