import { useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import { CircularProgress, Typography } from "@mui/material";
import { grey, indigo, red } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import PropTypes from "prop-types";
import { colors } from "@styles";
import styled from "styled-components";

export const ButtonFilled = (props) => {
  const {
    textButton,
    fontSx,
    fontSize,
    color,
    endIcon,
    startIcon,
    fullWidth,
    onClick,
    disabled,
    className,
    type,
    form,
    sx,
  } = props;
  return (
    <Button
      className={className}
      fullWidth={fullWidth}
      size="small"
      type={type}
      form={form}
      variant="contained"
      endIcon={endIcon}
      startIcon={startIcon}
      onClick={onClick}
      disabled={disabled}
      sx={{
        ...sx,
        borderRadius: 3,
        fontWeight: "bold",
        backgroundColor: colors(color).primary[700],
        "&.MuiButton-root": {
          paddingLeft: 2.5,
          paddingRight: 2.5,
          paddingTop: 0.75,
          paddingBottom: 0.75,
          textDecoration: "none",
          textTransform: "none",
          color: "white",
        },
        "&:hover": {
          backgroundColor: colors(color).primary[900],
        },
        "&.Mui-disabled": {
          backgroundColor: colors(color).default,
          color: grey[400],
        },
      }}
    >
      <Typography
        sx={{
          textTransform: 'capitalize',
          fontWeight: 600,
          fontSize,
          ...fontSx,
        }}
      >
        {textButton}
      </Typography>
    </Button>
  );
};

ButtonFilled.defaultProps = {
  textButton: "textButton",
  fontSize: 12,
  color: "primary",
  endIcon: null,
  startIcon: null,
  onClick: () => console.log("Button Pressed"),
  disabled: false,
  type: "submit",
};

ButtonFilled.propTypes = {
  textButton: PropTypes.string.isRequired,
  fontSize: PropTypes.number,
  color: PropTypes.string,
  endIcon: PropTypes.element,
  startIcon: PropTypes.element,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.string,
  form: PropTypes.string,
};

export const ButtonFilledSecondary = (props) => {
  const {
    textButton,
    fontSize,
    color,
    endIcon,
    startIcon,
    fullWidth,
    onClick,
    disabled,
    className,
    fontClassName,
    fontSx,
    type,
    form,
    sx,
  } = props;
  return (
    <Button
      className={className}
      fullWidth={fullWidth}
      size="small"
      variant="contained"
      endIcon={endIcon}
      startIcon={startIcon}
      onClick={onClick}
      disabled={disabled}
      form={form}
      sx={{
        borderRadius: 3,
        backgroundColor: colors(color).primary[50],
        boxShadow: 'none',
        ...sx,
        "&.MuiButton-root": {
          paddingLeft: 2,
          paddingRight: 2,
          paddingTop: 0.75,
          paddingBottom: 0.75,
          textDecoration: "none",
          textTransform: "none",
          color: colors(color).primary[800],
        },
        "&:hover": {
          backgroundColor: colors(color).primary[100],
        },
        "&.Mui-disabled": {
          backgroundColor: grey[100],
          color: grey[400],
        },
      }}
      type={type}
    >
      <Typography sx={{
        fontWeight: 600,
        color: '#363E52',
        fontSize,
        ...fontSx,
      }} className={fontClassName}>
        {textButton}
      </Typography>
    </Button>
  );
};

ButtonFilledSecondary.defaultProps = {
  textButton: "textButton",
  fontSize: 12,
  color: "primary",
  endIcon: null,
  startIcon: null,
  onClick: () => console.log("Button Pressed"),
  disabled: false,
};

ButtonFilledSecondary.propTypes = {
  textButton: PropTypes.string.isRequired,
  fontSize: PropTypes.number,
  color: PropTypes.string,
  endIcon: PropTypes.element,
  startIcon: PropTypes.element,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  fontClassName: PropTypes.string,
  form: PropTypes.string,
  type: PropTypes.string,
};

export const ButtonOutline = (props) => {
  const {
    className,
    textButton,
    fontSize,
    endIcon,
    color,
    fullWidth,
    onClick,
    style,
    startIcon,
    disabled,
    file,
    onchange,
    type,
  } = props;
  return (
    <Button
      type={type}
      disabled={disabled}
      className={className}
      fullWidth={fullWidth}
      endIcon={endIcon}
      size="small"
      variant="outlined"
      onClick={onClick}
      style={style}
      startIcon={startIcon}
      component={file ? "label" : ""}
      sx={{
        borderRadius: 3,
        fontSize,
        borderColor: colors(color).primary[400],
        "&.MuiButton-root": {
          paddingLeft: 2.5,
          paddingRight: 2.5,
          paddingTop: 0.75,
          paddingBottom: 0.75,
          textDecoration: "none",
          textTransform: "none",
          color: colors(color).primary[800],
        },
        "&:hover": {
          color: colors(color).secondary,
          backgroundColor: colors(color).primary[800],
          borderColor: colors(color).secondary,
          "& .icon": {
            backgroundColor: "white",
          },
        },
      }}
    >
      <Typography sx={{fontSize}} style={{ color: disabled && colors(color).primary[400] }}>
        {textButton}
      </Typography>
      {file && (
        <input
          hidden
          accept="image/*"
          multiple
          type="file"
          onChange={onchange}
        />
      )}
    </Button>
  );
};

ButtonOutline.propTypes = {
  textButton: PropTypes.string.isRequired,
  fontSize: PropTypes.number,
  style: PropTypes.object,
  color: PropTypes.string,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  disabled: PropTypes.bool,
  file: PropTypes.bool,
  onchange: PropTypes.func,
  type: PropTypes.string,
};

ButtonOutline.defaultProps = {
  textButton: "Button",
  fontSize: 12,
  color: "primary",
  fullWidth: false,
  type: "button",
  onClick: () => console.log("Button Pressed"), // eslint-disable-line no-console
  onChange: () => console.log("Button Change"), // eslint-disable-line no-console
};

// ----------------------------- Button Loading---------------------//
export const ButtonLoading = (props) => {
  const {
    textButton,
    loading,
    onClick,
    color,
    variant,
    fontSize,
    type,
    size,
    style,
    disabled,
    fullWidth,
    form,
    sx,
    input,
    component,
  } = props;
  return (
    <LoadingButton
      component={component}
      fullWidth={fullWidth}
      variant={variant}
      style={style}
      color={color}
      form={form}
      disabled={disabled}
      loadingIndicator={
        <CircularProgress
          style={{
            color:
              variant === "contained"
                ? colors(color).secondary
                : colors(color).primary[200],
          }}
          size={16}
        />
      }
     
      sx={{
        ...sx,
        textTransform: "capitalize",
        backgroundColor:
          variant === "contained" ? colors(color).primary[800] : "white",
        borderColor:
          variant === "outlined" ? colors(color).primary[800] : "transparent",
        fontSize,
        borderRadius: 3,
        paddingLeft: 2.5,
        paddingRight: 2.5,
        paddingTop: 0.75,
        paddingBottom: 0.75,
        color:
          variant === "contained"
            ? colors(color).secondary
            : colors(color).primary[800],
        "&:hover": {
          backgroundColor:
            variant === "contained"
              ? colors(color).primary[800]
              : "transparent",
          borderColor:
            variant === "outlined" ? colors(color).primary[800] : "transparent",
        },
        "&.Mui-disabled": {
          borderColor:
            variant === "outlined" ? colors(color).primary[200] : "transparent",
          backgroundColor: variant === "contained" ? grey[200] : "white",
          color:
            // eslint-disable-next-line no-nested-ternary
            variant === "outlined"
              ? !loading
                ? colors(color).primary[200]
                : "white"
              : !loading
              ? grey[500]
              : colors(color).primary[200],
        },
      }}
      loading={loading}
      onClick={onClick}
      type={type}
      size={size}
    >
      <Typography sx={{ fontSize }}>{textButton}</Typography>
      {input}
    </LoadingButton>
  );
};

ButtonLoading.propTypes = {
  textButton: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  color: PropTypes.string,
  variant: PropTypes.string,
  fontSize: PropTypes.number,
  size: PropTypes.string,
  style: PropTypes.object,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  fullWidth: PropTypes.bool,
  form: PropTypes.string,
};

ButtonLoading.defaultProps = {
  textButton: "Button Loading",
  loading: false,
  onClick: () => console.log("button pressed"),
  color: "primary",
  variant: "contained",
  fontSize: 12,
  size: "small",
  style: {},
  disabled: false,
  type: "submit",
};

export const ButtonTabOutline = (props) => {
  const { textButton, active, fontSize, onPress, style, dot } = props;
  return (
    <Button
      variant="outlined"
      onClick={onPress}
      size="small"
      style={style}
      sx={{
        borderRadius: 2,
        backgroundColor: active ? red[100] : "white",
        fontWeight: active ? "bold" : "regular",
        fontSize,
        "&.MuiButton-root": {
          textDecoration: "none",
          textTransform: "none",
          paddingLeft: 2,
          paddingRight: 2,
          paddingTop: 1,
          paddingBottom: 1,
          color: red[500],
          borderColor: red[500],
        },
        "&:hover": {
          backgroundColor: active ? red[100] : red[50],
          borderColor: red[800],
        },
      }}
    >
      {dot && (
        <FiberManualRecordIcon
          style={{ height: 10, width: 10, marginRight: 3 }}
        />
      )}
      <Typography>{textButton}</Typography>
    </Button>
  );
};

ButtonTabOutline.defaultProps = {
  textButton: "Tab Item",
  active: false,
  fontSize: 12,
  dot: false,
  onPress: () => console.log("Tab Pressed"),
};

ButtonTabOutline.propTypes = {
  textButton: PropTypes.string.isRequired,
  active: PropTypes.bool,
  onPress: PropTypes.func,
  fontSize: PropTypes.number,
  size: PropTypes.string,
  style: PropTypes.object,
  dot: PropTypes.bool,
};

export const ButtonTabFilled = ({
  textButton = "Tab",
  active = false,
  fontSize = 12,
  onPress,
  style,
}) => {
  return (
    <Button
      variant="outlined"
      onClick={onPress}
      style={style}
      sx={{
        borderRadius: 2,
        backgroundColor: active ? red[800] : "transparent",
        fontWeight: "bold",
        fontSize,
        "&.MuiButton-root": {
          textDecoration: "none",
          textTransform: "none",
          color: active ? "white" : red[800],
          paddingLeft: 2,
          paddingRight: 2,
          paddingTop: 1,
          paddingBottom: 1,
          borderColor: "transparent",
        },
        "&:hover": {
          backgroundColor: active ? red[900] : red[50],
          borderColor: "transparent",
        },
      }}
    >
      <Typography>{textButton}</Typography>
    </Button>
  );
};

ButtonTabFilled.propTypes = {
  textButton: PropTypes.string.isRequired,
  active: PropTypes.bool,
  onPress: PropTypes.func,
  fontSize: PropTypes.number,
  size: PropTypes.string,
  style: PropTypes.object,
};

export const ButtonTabFilledSecondary = ({
  textButton = "Tab",
  active = false,
  fontSize = 12,
  onPress,
  style,
}) => {
  return (
    <Button
      variant="outlined"
      onClick={onPress}
      style={style}
      sx={{
        borderRadius: 2,
        backgroundColor: active ? indigo[50] : "transparent",
        fontWeight: "bold",
        fontSize,
        "&.MuiButton-root": {
          textDecoration: "none",
          textTransform: "none",
          color: !active ? grey[900] : indigo[800],
          fontWeight: active ? "bold" : "normal",
          paddingLeft: 2,
          paddingRight: 2,
          paddingTop: 1,
          paddingBottom: 1,
          borderColor: "transparent",
        },
        "&:hover": {
          backgroundColor: active ? indigo[100] : "transparent",
          borderColor: "transparent",
          color: indigo[800],
        },
      }}
    >
      <Typography>{textButton}</Typography>
    </Button>
  );
};

ButtonTabFilledSecondary.propTypes = {
  textButton: PropTypes.string.isRequired,
  active: PropTypes.bool,
  onPress: PropTypes.func,
  fontSize: PropTypes.number,
  size: PropTypes.string,
  style: PropTypes.object,
};

export const ButtonDropdown = (props) => {
  const { textButton, fontSize, item, disabled } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        onClick={handleClick}
        variant="outlined"
        disableElevation
        disabled={disabled}
        endIcon={
          <KeyboardArrowDownIcon
            sx={{ color: disabled ? grey[400] : grey[800] }}
          />
        }
        sx={{
          borderColor: grey[500],
          backgroundColor: "white",
          borderRadius: 2,
          fontSize,
          "&.MuiButton-root": {
            paddingLeft: 2,
            paddingRight: 2,
            paddingTop: 1,
            paddingBottom: 1,
            textDecoration: "none",
            textTransform: "none",
            color: grey[800],
          },
          "&:hover": {
            backgroundColor: "white",
            color: red[800],
            borderColor: red[800],
          },
        }}
      >
        <Typography sx={{ color: disabled ? grey[400] : grey[800] }}>
          {textButton}
        </Typography>
      </Button>
      <Menu open={Boolean(anchorEl)} anchorEl={anchorEl} onClose={handleClose}>
        {item.map((v, i) => (
          <MenuItem
            onClick={() => {
              v?.onClick();
              handleClose();
            }}
            disableRipple
            key={i}
            sx={{
              "&.MuiMenuItem-root": {
                fontSize: 14,
                minWidth: 100,
              },
              "&:hover": {
                backgroundColor: red[50],
                color: red[800],
              },
            }}
          >
            {v?.title}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

ButtonDropdown.defaultProps = {
  textButton: "textButton",
  fontSize: 12,
  item: [],
  disabled: false,
};

ButtonDropdown.propTypes = {
  textButton: PropTypes.string.isRequired,
  item: PropTypes.array,
  fontSize: PropTypes.number,
  onClickItem: PropTypes.func,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
};

export const IconIMG = styled.img`
  -webkit-mask: url(${(icon) => icon}) no-repeat center;
  mask: url(${({ icon }) => icon}) no-repeat center;
  background-color: ${({ color }) =>
    color ? color : "var(--secondary-color)"};
  margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : "auto")};

  &:hover {
    cursor: pointer;
    background-color: ${({ hoverColor }) =>
      hoverColor ? hoverColor : "var(--secondary-color)"};
  }
`;
