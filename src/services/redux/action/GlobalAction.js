// import API from '../../api';

import {
  SET_LOADING,
  SET_MESSAGE,
  SET_MESSAGE_TYPE,
  SET_SHOW_ALERT,
  SET_SHOW_FOOTER,
  SWITCH_THEME,
} from './ListAction';

export const switchTheme = theme => async dispatch => {
  try {
    await localStorage.setItem('theme', theme.mode).then(() => {
      return dispatch({type: SWITCH_THEME, value: theme});
    });
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const getTheme = async () => {
  try {
    return await localStorage.getItem('theme');
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const setAlert = value => async dispatch => {
  return dispatch({type: SET_SHOW_ALERT, value: value});
};

export const setMessage = value => async dispatch => {
  return dispatch({type: SET_MESSAGE, value: value});
};

export const setMessageType = value => async dispatch => {
  return dispatch({type: SET_MESSAGE_TYPE, value: value});
};

export const setLoading = value => async dispatch => {
  return dispatch({type: SET_LOADING, value: value});
};

export const setShowFooter = value => async dispatch => {
  return dispatch({type: SET_SHOW_FOOTER, value: value});
};
