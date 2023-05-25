import axios from 'axios';

const API = async (
  url,
  options = {
    method: 'GET' || 'DELETE',
    body: {},
    head: {},
    params: {},
    responseType: 'json',
  }
) => {
  // const log = {
  //   uri: `${process.env.REACT_APP_URL_API}${url}`,
  //   method: options?.method,
  //   body: options?.body ?? null,
  //   params: options?.params,
  // };
  // console.log('[LOG] AXIOS Config', log); // eslint-disable-line no-console
  const request = {
    baseURL: process.env.REACT_APP_URL_API,
    method: options.method,
    timeout: 200000,
    url,
    headers: options.head,
    responseType: options.responseType ?? 'json',
    params: options.params ?? {},
  };
  if (request.method === 'POST' || request.method === 'PUT') request.data = options.body;
  return axios(request);
};

export default API;
