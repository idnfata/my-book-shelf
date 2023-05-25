import API from "./axiosConfig";
import { httpStatus } from "@helpers";
import { getUserToken } from "@services/redux/action";
import * as Sentry from '@sentry/react';

export const buildResponse = (response) => {
  response.statusText = httpStatus(response?.status);
  return response;
};

export default {
  post: async (url, body, auth = true) => {
    return API(url, {
      method: "POST",
      head: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: auth ? `Bearer ${getUserToken()}` : null,
      },
      responseType: "json",
      body,
    })
      .then((response) => buildResponse(response))
      .catch((err) => {
        if (err) {
          Sentry.captureException(
            JSON.stringify(err, undefined, 2),
            (scope) => {
              scope.setTransactionName("Axios Post");
              scope.setContext("context", err);
            }
          );
          console.error(err); // eslint-disable-line no-console
          const log = [];
          log.url = `${process.env.REACT_APP_BASE_URL}${url}`;
          log.body = body;
          log.response = err?.response || "Error";
          // sendNotification(toHtmlFormat('&#10006; Error!!! Axios POST', log), 'HTML');
        }
        if (err?.response.status === 400) {
          err.response.statusText = err?.response?.data?.message || "Error";
        } else {
          err.response.statusText = httpStatus(err?.response?.status) || 400;
        }
        return err?.response || "Error";
      });
  },
  put: async (url, body, auth = true) => {
    return API(url, {
      method: "PUT",
      head: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: auth ? `Bearer ${getUserToken()}` : null,
      },
      responseType: "json",
      body,
    })
      .then((response) => buildResponse(response))
      .catch((err) => {
        if (err) {
          Sentry.captureException(
            JSON.stringify(err, undefined, 2),
            (scope) => {
              scope.setTransactionName("Axios Put");
              scope.setContext("context", err);
            }
          );
          console.error(err); // eslint-disable-line no-console
          const log = [];
          log.url = `${process.env.REACT_APP_BASE_URL}${url}`;
          log.body = body;
          log.response = err?.response || "Error";
          // sendNotification(toHtmlFormat('&#10006; Error!!! Axios PUT', log), 'HTML');
        }
        if (err?.response?.status === 400) {
          err.response.statusText = err?.response?.data?.message || "Error";
        } else {
          err.response.statusText = httpStatus(err?.response?.status) || 400;
        }
        return err?.response || "Error";
      });
  },
  get: async (url = "", params, auth = true) => {
    return API(url, {
      method: "GET",
      head: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: auth ? `Bearer ${getUserToken()}` : null,
      },
      params: { ...params },
    })
      .then((response) => buildResponse(response))
      .catch((err) => {
        if (err) {
          Sentry.captureException(
            JSON.stringify(err, undefined, 2),
            (scope) => {
              scope.setTransactionName("Axios Get");
              scope.setContext("context", err);
            }
          );
          console.error(err); // eslint-disable-line no-console
          const log = [];
          log.url = `${process.env.REACT_APP_BASE_URL}${url}`;
          log.params = params;
          log.response = err?.response || "Error";
          // sendNotification(toHtmlFormat('&#10006; Error!!! Axios GET', log), 'HTML');
        }
        if (err?.response?.status === 400) {
          err.response.statusText = err?.response?.data?.message || "Error";
        } else {
          err.response.statusText = httpStatus(err?.response?.status) || 400;
        }
        return err?.response || "Error";
      });
  },
  delete: async (url, auth = true) => {
    return API(url, {
      method: "DELETE",
      head: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: auth ? `Bearer ${getUserToken()}` : null,
      },
    })
      .then((response) => buildResponse(response))
      .catch((err) => {
        if (err) {
          Sentry.captureException(
            JSON.stringify(err, undefined, 2),
            (scope) => {
              scope.setTransactionName("Axios Delete");
              scope.setContext("context", err);
            }
          );
          console.error(err); // eslint-disable-line no-console
          const log = [];
          log.url = `${process.env.REACT_APP_BASE_URL}${url}`;
          log.response = err?.response || "Error";
          // sendNotification(toHtmlFormat('&#10006; Error!!! Axios DELETE', log), 'HTML');
        }
        err.response.statusText = httpStatus(err?.response?.status) || 400;
        return err?.response || "Error";
      });
  },
  download: async (url, fileName, ext, auth = true) => {
    const FileDownload = require("js-file-download");
    return API(url, {
      method: "GET",
      head: {
        "Access-Control-Allow-Origin": "*",
        Authorization: auth ? `Bearer ${getUserToken()}` : null,
      },
      responseType: "blob",
    })
      .then((response) => {
        FileDownload(response.data, `${fileName}.${ext}`);
      })
      .catch((err) => {
        if (err) {
          Sentry.captureException(
            JSON.stringify(err, undefined, 2),
            (scope) => {
              scope.setTransactionName("Axios Download");
              scope.setContext("context", err);
            }
          );
          console.error("Error", err); // eslint-disable-line no-console
          const log = [];
          log.url = `${process.env.REACT_APP_BASE_URL}${url}`;
          log.response = err?.response || "Error";
          // sendNotification(toHtmlFormat('&#10006; Error!!! Axios Download', log), 'HTML');
          err.response.statusText = httpStatus(err?.response?.status || 400);
          throw new Error(err);
        }
      });
  },
  postDownload: async (url, body, fileName, ext, auth = true) => {
    const FileDownload = require("js-file-download");
    return API(url, {
      method: "POST",
      head: {
        "Access-Control-Allow-Origin": "*",
        Authorization: auth ? `Bearer ${getUserToken()}` : null,
      },
      body,
      responseType: "blob",
    })
      .then((response) => {
        FileDownload(response.data, `${fileName}.${ext}`);
      })
      .catch((err) => {
        if (err) {
          Sentry.captureException(
            JSON.stringify(err, undefined, 2),
            (scope) => {
              scope.setTransactionName("Axios Download");
              scope.setContext("context", err);
            }
          );
          console.error(err); // eslint-disable-line no-console
          const log = [];
          log.url = `${process.env.REACT_APP_BASE_URL}${url}`;
          log.response = err?.response || "Error";
          // sendNotification(toHtmlFormat('&#10006; Error!!! Axios Download', log), 'HTML');
          err.response.statusText = httpStatus(err?.response?.status || 400);
          return err?.response ?? "Error";
        }
        throw new Error(err);
      });
  },
};
