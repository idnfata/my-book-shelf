import { IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { Buffer } from "buffer";
import { SnackbarProvider } from "notistack";
import { Provider } from "react-redux";
import { RouteApp, store } from "../services";
import { createRef } from "react";
import * as Sentry from '@sentry/react';

global.Buffer = Buffer;

const notistackRef = createRef();
const onClickDismiss = (key) => {
  notistackRef.current.closeSnackbar(key);
};

function App() {
  return (
    <Provider store={store}>
      <SnackbarProvider
        ref={notistackRef}
        preventDuplicate
        // hideIconVariant
        style={{
          position: 'relative',
          top: '80px',
          pointerEvents: "all",
          fontSize: 16,
          paddingRight: 50,
          borderRadius: "10px",
        }}
        action={(key) => (
          <IconButton
            aria-label="close"
            onClick={() => onClickDismiss(key)}
            sx={{ position: "absolute", right: 8, top: 6, color: "white" }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        )}
        variant="success"
        maxSnack={5}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        classes={{
          containerRoot:
            "mt-10 md:mt-10 lg:mt-10 mb-20 md:mb-20 lg:mr-10 z-99",
        }}
      >
        <RouteApp />
      </SnackbarProvider>
    </Provider>
  );
}

export default Sentry.withProfiler(App);
