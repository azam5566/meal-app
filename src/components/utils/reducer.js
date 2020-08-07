import { CATEGORIES, MEALS } from './dummy-data';

export const SET_TOKEN = 'SET_TOKEN';
export const SET_MOBILE_NUMBER = 'SET_MOBILE_NUMBER';
export const SET_FAVOURITE = 'SET_FAVOURITE';
export const SET_MEMBER_DETAILS = 'SET_MEMBER_DETAILS';
export const LOGOUT = 'LOGOUT';

const initialState = {
  token: '',
  number: '',
  isDm: false,
  dmDate: '',
  memberId: '',
  categories: CATEGORIES,
  meals: MEALS,
  favourites: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN: {
      return {
        ...state,
        token: action.data,
      };
    }
    case SET_MOBILE_NUMBER: {
      return {
        ...state,
        number: action.data,
      };
    }
    case SET_FAVOURITE: {
      return {
        ...state,
        favourites: action.data,
      };
    }
    case SET_MEMBER_DETAILS: {
      return {
        ...state,
        isDm: action.data.isDm,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        ...initialState,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
