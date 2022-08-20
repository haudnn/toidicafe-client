import {User} from '../../models/user'
export interface LoginPayload {
    email: string;
    password: string;
}
export interface RegisterPayload {
    email: string;
    displayName: string;
    password: string;
}
export interface AuthState {
    isShowAuthForm: boolean;  
    isLoggedIn: boolean;
    logging?: boolean;
    currentUser?: User;
    error?: string
}