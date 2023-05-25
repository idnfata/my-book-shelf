import { forwardRef, useState } from "react";
import { styled } from "@mui/material/styles";
import {
  DialogTitle,
  Dialog,
  DialogContent,
  DialogActions,
  Box,
  Typography,
  Modal,
  Slide,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Stack from "@mui/material/Stack";
import { capitalizeFirstLetter } from "@helpers/text";
import PropTypes from "prop-types";
import { red, grey, indigo } from "@mui/material/colors";
import {
  ButtonFilled,
  ButtonFilledSecondary,
  ButtonLoading,
  ButtonOutline,
} from "./Button";
import { colors } from "@styles";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  "& .MuiDialog-paper": {
    borderRadius: "10px",
  },
}));

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const ModalDialog = (props) => {
  const {
    open,
    onClose,
    title,
    children,
    backdropClose,
    onSubmit,
    type,
    footer,
    disabled,
    maxHeight,
    maxWidth,
    submitType,
    form,
    closeIcon,
    titleFontSize
  } = props;
  return (
    <BootstrapDialog
      onClose={backdropClose ? onClose : null}
      aria-labelledby="modal dialog"
      open={open}
      BackdropProps={{ style: { background: "rgba(18, 24, 38, 0.6)" } }}
      sx={{
        zIndex: 9999999999999,
      }}
    >
      <DialogTitle sx={{ m: 0, p: 2, backgroundColor: "white" }}>
        <Typography
          style={{ fontWeight: 600, fontSize: titleFontSize ? titleFontSize : 14, marginRight: 25 }}
        >
          {title}
        </Typography>
        {open && (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 10,
              "&:hover": { color: red[800] },
            }}
          >
            {closeIcon && <CloseIcon fontSize="small" />}
          </IconButton>
        )}
      </DialogTitle>
      <DialogContent
        className="overflow-y-auto"
        xs={{ width: "100%" }}
      >
        <Box
          width={{ xs: 280, sm: 400, md: 500 }}
          style={{
            maxHeight: maxHeight === 0 ? "auto" : maxHeight,
            maxWidth: maxWidth === 0 ? "auto" : maxWidth,
          }}
        >
          {children}
        </Box>
      </DialogContent>
      {footer && (
        <DialogActions>
          <Stack spacing={2} direction="row">
            <ButtonFilled
              onClick={onSubmit}
              type={submitType}
              textButton={capitalizeFirstLetter(type)}
              disabled={disabled}
              form={form}
            />
          </Stack>
        </DialogActions>
      )}
    </BootstrapDialog>
  );
};

ModalDialog.defaultProps = {
  backdropClose: true,
  disabled: false,
  footer: true,
  maxHeight: 0,
  open: false,
  onSubmit: () => console.log("Submit Modal"), // eslint-disable-line no-console
};

ModalDialog.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  title: PropTypes.string,
  onSubmit: PropTypes.func,
  footer: PropTypes.bool,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  children: PropTypes.node,
  backdropClose: PropTypes.bool,
  maxHeight: PropTypes.number,
  submitType: PropTypes.string,
  form: PropTypes.string,
};

export const ModalNotification = (props) => {
  const {
    title,
    text,
    loading,
    open,
    onClose,
    onSubmit,
    type,
    closeText,
    backdropClose,
    onDestroy,
  } = props;
  return (
    <Modal
      open={open}
      onClose={backdropClose ? onClose : null}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      BackdropProps={{ style: { background: "rgba(18, 24, 38, 0.6)" } }}
      sx={{
        zIndex: 9999999999999,
      }}
    >
      <Box className="relative" sx={styles.modal}>
        {onDestroy && (
          <IconButton
            className="absolute top-10 right-10"
            aria-label="close"
            onClick={onDestroy}
            sx={{ "&:hover": { color: red[800] } }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        )}
        <Typography
          className="font-bold"
          align="center"
          id="modal-modal-title"
          variant="h6"
          component="h2"
        >
          {title}
        </Typography>
        <Typography
          className="text-sm mt-24"
          align="center"
          id="modal-modal-description"
        >
          {text}
        </Typography>
        <Stack className="mt-32" direction="row" spacing={2}>
          <ButtonFilledSecondary
            fullWidth
            textButton={closeText}
            onClick={onClose}
          />
          <ButtonLoading
            fullWidth
            loading={loading}
            textButton={capitalizeFirstLetter(type)}
            onClick={onSubmit}
          />
        </Stack>
      </Box>
    </Modal>
  );
};

ModalNotification.defaultProps = {
  title: "Modal Title",
  text: "Modal Text",
  disableBackdropClick: false,
  closeText: "Batal",
};

ModalNotification.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.any,
  onDestroy: PropTypes.any,
  title: PropTypes.string,
  onSubmit: PropTypes.func,
  text: PropTypes.string,
  type: PropTypes.string,
  closeText: PropTypes.string,
  loading: PropTypes.bool,
  backdropClose: PropTypes.bool,
};

const styles = {
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "white",
    boxShadow: 20,
    borderRadius: "18px",
    p: 3,
  },
};

export const ModalFullScreen = (props) => {
  const {
    open,
    onClose,
    title,
    children,
    loading,
    onSubmit,
    type,
    disabled,
    submitType,
    form,
    typeSecondBtn,
    onSubmitSecondBtn,
  } = props;
  return (
    <Dialog
      PaperProps={{
        style: {
          backgroundColor: grey[100],
          boxShadow: "none",
          borderRadius: 0,
        },
      }}
      fullScreen
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
    >
      <Box className="p-10 border-b-1 bg-white shadow">
        <Stack direction="row" justifyContent="space-between">
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            alignContent="center"
            alignItems="center"
          >
            <IconButton
              aria-label="close"
              onClick={onClose}
              sx={{ "&:hover": { color: red[800] } }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
            <Typography className="font-bold text-18">{title}</Typography>
          </Stack>
          {type === "none" ? null : (
            <Stack direction="row" spacing={2}>
              {typeSecondBtn && (
                <ButtonOutline
                  disabled={disabled}
                  type={submitType}
                  loading={loading}
                  textButton={capitalizeFirstLetter(typeSecondBtn)}
                  onClick={onSubmitSecondBtn}
                  form={form}
                  style={{ marginRight: 5 }}
                  color="default"
                />
              )}
              <ButtonFilled
                disabled={disabled}
                type={submitType}
                loading={loading}
                textButton={capitalizeFirstLetter(type)}
                onClick={onSubmit}
                form={form}
              />
            </Stack>
          )}
        </Stack>
      </Box>
      <Box className="overflow-y-auto h-100">{children}</Box>
    </Dialog>
  );
};

ModalFullScreen.defaultProps = {
  disabled: false,
  onSubmit: () => console.log("Submit Modal Full Screen"), // eslint-disable-line no-console
  // onSubmitSecondBtn: () => console.log('Submit Sec Modal Full Screen'),
  typeSecondBtn: null,
};

ModalFullScreen.propTypes = {
  open: PropTypes.bool,
  children: PropTypes.any,
  onClose: PropTypes.any,
  title: PropTypes.string,
  onSubmit: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  submitType: PropTypes.string,
  form: PropTypes.string,
  onSubmitSecondBtn: PropTypes.func,
  typeSecondBtn: PropTypes.string,
};

export const ModalImage = (props) => {
  const {
    open,
    onClose,
    image,
    backdropClose,
    footer,
    title,
    height,
    alt,
    width,
  } = props;
  const [backgroundPosition, setBackgroundPosition] = useState(null);
  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setBackgroundPosition({ backgroundPosition: `${x}% ${y}%` });
  };
  return (
    <BootstrapDialog
      onClose={backdropClose ? onClose : null}
      aria-labelledby="modal dialog"
      open={open}
    >
      <DialogTitle sx={{ m: 0, p: 2, backgroundColor: "white" }}>
        <Typography
          style={{ fontWeight: "bold", fontSize: 14, marginRight: 25 }}
        >
          {title}
        </Typography>
        {open && (
          <IconButton
            className="absolute"
            aria-label="close"
            onClick={onClose}
            sx={{ right: 8, top: 10, "&:hover": { color: red[800] } }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        )}
      </DialogTitle>
      <DialogContent dividers>
        <div
          className="text-center flex justify-center bg-black rounded w-full"
          style={{ height: 400 }}
        >
          <img
            className="m-auto block rounded"
            src={image}
            alt={alt}
            style={{ width, maxHeight: 400, objectFit: "cover" }}
          />
        </div>
      </DialogContent>
      {footer && (
        <DialogActions>
          <Stack spacing={2} direction="row">
            <ButtonFilled onClick={onClose} textButton="Tutup" />
          </Stack>
        </DialogActions>
      )}
    </BootstrapDialog>
  );
};

ModalImage.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.any,
  image: PropTypes.any,
  backdropClose: PropTypes.bool,
  footer: PropTypes.bool,
  title: PropTypes.string,
  height: PropTypes.number,
  alt: PropTypes.string,
  width: PropTypes.number.isRequired,
};
