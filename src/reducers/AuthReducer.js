import { EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  EMPTY_AUTH,
  REPASSWORD_CHANGED,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAIL,
  SIGNUP_USER,
  PASSWORD_RESET,
  PASSWORD_MISMATCH,
  PASSWORD_RESET_SUCCESS,
  PASSWORD_RESET_FAIL
} from '../actions/types';

const INITIAL_STATE = {
  email: 'test@test.com',
  password: 'testtest',
  repassword: 'testtest',
  user: '',
  error: '',
  loading: '' };

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case EMAIL_CHANGED:
    return { ...state, email: action.payload, error: '' };
    case PASSWORD_CHANGED:
    return { ...state, password: action.payload, error: '' };
    case REPASSWORD_CHANGED:
    return { ...state, repassword: action.payload, error: '' };
    case LOGIN_USER_SUCCESS:
    return { ...state, user: action.payload, error: '', loading: false };
    case LOGIN_USER_FAIL:
    return { ...state, error: 'Login failed. No user with this email or password.', password: '', loading: false };
    case LOGIN_USER:
    return { ...state, loading: true, error: '' };
    case SIGNUP_USER_SUCCESS:
    return { ...state, user: action.payload, error: 'Signup Success! Press Login!', loading: false };
    case SIGNUP_USER_FAIL:
    return { ...state, error: 'Failed. Email is invalid or password is too short.git', password: '', repassword: '', loading: false };
    case SIGNUP_USER:
    return { ...state, loading: true, error: '' };
    case EMPTY_AUTH:
    return { ...state, error: '', email:'', password: '',repassword: '', loading: false };
    case PASSWORD_RESET:
    return { ...state, loading: true, error: '', email:'', password: '', repassword: '' };
    case PASSWORD_RESET_SUCCESS:
    return { ...state, loading: false, error: 'Email with link for reset password has been sent.' };
    case PASSWORD_RESET_FAIL:
    return { ...state, loading: false, error: 'No user with this email.' };
    case PASSWORD_MISMATCH:
    return { ...state, loading: false, error: 'Password do not match.' };
    default:
    return state;
  }
};
