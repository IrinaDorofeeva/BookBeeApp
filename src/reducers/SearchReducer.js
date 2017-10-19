import { SEARCH_TEXT_CHANGED,
  SEARCH_SUCCESS,
  SEARCH_FAIL,
  SEARCH_STARTS,
  EMPTY_SEARCH,
} from '../actions/types';

const INITIAL_STATE = {
  searchText: '',
  searchResult: null
};

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case SEARCH_TEXT_CHANGED:
    return { ...state, searchText: action.payload, error: '' };
    case SEARCH_SUCCESS:
    return { ...state, searchResult: action.payload, error: '', loading: false };
    case SEARCH_FAIL:
    return { ...state, error: 'Search failed. No user reading this book, topic or author.', loading: false };
    case SEARCH_STARTS:
    return { ...state, loading: true, error: '' };
    case EMPTY_SEARCH:
    return { ...state, error: '', searchResult: null, loading: false };
    default:
    return state;
  }
};
