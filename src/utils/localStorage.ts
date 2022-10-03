import { ACCESS_TOKEN, USER } from '../constants/';
const setUser = (user: any) => {
	localStorage.setItem(USER, JSON.stringify(user));
}
const getUser = () => {
	return JSON.parse(localStorage.getItem(USER) as string);
}
const getAccessToken = () => {
	return localStorage.getItem(ACCESS_TOKEN);
}
const setToken = (token: any) => {
	localStorage.setItem(ACCESS_TOKEN, token);
}
const removeUser = () => {
	localStorage.removeItem(USER)
}	
const removeToken = () => {
	localStorage.removeItem(ACCESS_TOKEN)
}

export {
	setUser,
	setToken,
    getUser,
	removeUser,
	removeToken,
	getAccessToken
}