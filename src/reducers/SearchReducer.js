import { SEARCH_TEXT_CHANGED,
  SEARCH_SUCCESS,
  SEARCH_FAIL,
  SEARCH_STARTS,
  EMPTY_SEARCH,
} from '../actions/types';

const INITIAL_STATE = {
  searchText: '',
};

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case SEARCH_TEXT_CHANGED:
    return { ...state, searchText: action.payload, error: '' };
    case SEARCH_SUCCESS:
    return { ...state, user: action.payload, error: '', loading: false };
    case SEARCH_FAIL:
    return { ...state, error: 'Login failed. No user with this email or password.', password: '', loading: false };
    case SEARCH_STARTS:
    return { ...state, loading: true, error: '' };
    case EMPTY_SEARCH:
    return { ...state, error: '', email:'', password: '',repassword: '', loading: false };
    default:
    return state;
  }
};
