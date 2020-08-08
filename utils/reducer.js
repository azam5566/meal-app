import { CATEGORIES, MEALS } from './dummy-data';

export const SET_TOKEN = 'SET_TOKEN';
export const SET_MOBILE_NUMBER = 'SET_MOBILE_NUMBER';
export const SET_FAVOURITE = 'SET_FAVOURITE';
export const SET_MEMBER_DETAILS = 'SET_MEMBER_DETAILS';
export const LOGOUT = 'LOGOUT';
export const LOGIN = 'LOGIN';

const initialState = {
  isLoggedIn: false,
  categories: CATEGORIES,
  meals: MEALS,
  favourites: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FAVOURITE: {
      return {
        ...state,
        favourites: action.data,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        isLoggedIn: false,
      };
    }
    case LOGIN: {
      return {
        ...state,
        isLoggedIn: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
