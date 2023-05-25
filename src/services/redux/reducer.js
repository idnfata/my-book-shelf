// import {combineReducers} from 'redux';
import {lightTheme} from '../../utils/styles';
import {
  SET_ISLOGIN,
  SET_LOADING,
  SET_MESSAGE,
  SET_MESSAGE_TYPE,
  SET_SHOW_ALERT,
  SET_TOKEN,
  SET_USER,
  ADD_QUEUE,
  DELETE_QUEUE,
  SWITCH_THEME,
  SET_PAGE,
  SET_PAGE_SIZE,
  SET_SELECTED_LOCATION,
  SET_SELECTED_STATUS,
  SET_INPUT,
  SET_LIST_DATA,
  SET_STEP,
  SET_SHOW_FOOTER,
} from './action/ListAction';

const initialStateSubmitInspection = {
  step: 1,
};

export const InspectionReducer = (
  state = initialStateSubmitInspection,
  action,
) => {
  switch (action.type) {
    case SET_STEP:
      return {
        ...state,
        step: action.value,
      };

    default:
      break;
  }

  return state;
};

const initialState = {
  theme: lightTheme,
  loading: false,
  isLogin: false,
  alert: false,
  message: '',
  messageType: '',
  token: '',
  queue: null,
  showFooter: false,
  user: {
    id: 1,
    name: 'James Harden',
    email: 'james.harden@gmail.com',
    phone: '083947889855',
    is_active: true,
    role : null,
    email_verified_at: null,
    created_at: '2022-06-28T03:27:16.000000Z',
    updated_at: '2022-06-28T03:27:16.000000Z',
    deleted_at: null,
    image_filepath: null,
    image_filename: null,
  },
};

export const GlobalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.value,
      };
    case SET_ISLOGIN:
      return {
        ...state,
        isLogin: action.value,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.value,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.value,
      };
    case SET_SHOW_FOOTER:
      return {
        ...state,
        showFooter: action.value,
      };
    case SET_SHOW_ALERT:
      return {
        ...state,
        alert: action.value,
      };
    case SET_MESSAGE:
      return {
        ...state,
        message: action.value,
      };
    case SET_MESSAGE_TYPE:
      return {
        ...state,
        messageType: action.value,
      };
    case SWITCH_THEME:
      return {
        ...state,
        theme: action.value,
      };
    case ADD_QUEUE:
      return {
        ...state,
        queue: action.value,
      };
    case DELETE_QUEUE:
      return {
        ...state,
        queue: action.value,
      };
    default:
      break;
  }
  return state;
};

const homeState = {
  selectedLocation: '0',
  selectedStatus: '',
  input: '',
  page: 1,
  pageSize: 5,
  listData: [],
};

export const HomeReducer = (state = homeState, action) => {
  switch (action.type) {
    case SET_PAGE:
      return {
        ...state,
        page: action.value,
      };
    case SET_PAGE_SIZE:
      return {
        ...state,
        pageSize: action.value,
      };
    case SET_SELECTED_STATUS:
      return {
        ...state,
        selectedStatus: action.value,
      };
    case SET_SELECTED_LOCATION:
      return {
        ...state,
        selectedLocation: action.value,
      };
    case SET_INPUT:
      return {
        ...state,
        input: action.value,
      };
    case SET_LIST_DATA:
      return {
        ...state,
        listData: action.value,
      };
    default:
      break;
  }
  return state;
};
