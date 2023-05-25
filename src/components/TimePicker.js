import { useState } from "react";
import PropTypes from "prop-types";
import InputMask from "react-input-mask";
import { InputAdornment, Stack, Box, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import IconButton from "@mui/material/IconButton";
import Popover from "@mui/material/Popover";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { red, grey } from "@mui/material/colors";
import { addLeadingZeros } from "@helpers/number";
import { FieldInputOutline } from "./InputText";
import useUpdateEffect from "@hooks/useUpdateEffect";

export const DigitalTimePicker = (props) => {
  const {
    value,
    onChange,
    fullWidth,
    required,
    error,
    helperText,
    setValue,
    name,
  } = props;
  const [time, setTime] = useState(value);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [hour, setHour] = useState("00");
  const [minute, setMinute] = useState("00");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleValue = () => {
    if (value ? value.length === 5 || value.length === 8 : "") {
      const values = value.split(":");
      if (parseInt(values[0], 10) > 23) {
        setHour("00");
      } else {
        setHour(`${addLeadingZeros(parseInt(values[0], 10), 2)}`);
      }
      if (parseInt(values[1], 10) > 59) {
        setMinute("00");
      } else {
        setMinute(`${addLeadingZeros(parseInt(values[1], 10), 2)}`);
      }
    }
  };

  const handleChangeValue = (type, methode) => {
    if (type === "hour") {
      if (methode === "up") {
        setHour(`${addLeadingZeros(parseInt(hour, 10) + 1, 2)}`);
        onChange(`${addLeadingZeros(parseInt(hour, 10) + 1, 2)}:${minute}`);
      }
      if (methode === "down") {
        setHour(`${addLeadingZeros(parseInt(hour, 10) - 1, 2)}`);
        onChange(`${addLeadingZeros(parseInt(hour, 10) - 1, 2)}:${minute}`);
      }
    }

    if (type === "minute") {
      if (methode === "up") {
        setMinute(`${addLeadingZeros(parseInt(minute, 10) + 1, 2)}`);
        onChange(`${hour}:${addLeadingZeros(parseInt(minute, 10) + 1, 2)}`);
      }
      if (methode === "down") {
        setMinute(`${addLeadingZeros(parseInt(minute, 10) - 1, 2)}`);
        onChange(`${hour}:${addLeadingZeros(parseInt(minute, 10) - 1, 2)}`);
      }
    }
  };

  useUpdateEffect(() => {
    setTime(value);
    handleValue();
  }, [value]);

  useUpdateEffect(() => {
    setTime(`${hour}:${minute}`);
    setValue(name, `${hour}:${minute}`);
  }, [hour, minute]);

  return (
    <>
      <InputMask
        id={name}
        mask="99:99"
        disabled={false}
        value={time}
        maskChar={null}
        onChange={onChange}
        readOnly={false}
      >
        {() => (
          <FieldInputOutline
            fullWidth={fullWidth}
            error={error}
            helperText={helperText}
            required={required}
            sx={{
              "& .MuiOutlinedInput-root": {
                padding: "3px",
              },
            }}
            placeholder="HH:mm"
            endAdornment={
              <InputAdornment position="end">
                <IconButton className="-mr-10" onClick={handleClick}>
                  <AccessTimeIcon fontSize="small" sx={{ color: grey[500] }} />
                </IconButton>
              </InputAdornment>
            }
          />
        )}
      </InputMask>
      <Popover
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Box className="p-10">
          <Stack direction="row" spacing={3}>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <IconButton
                sx={{ "&:hover": { color: red[800] } }}
                disabled={hour === "23"}
                onClick={() => handleChangeValue("hour", "up")}
              >
                <KeyboardArrowUpIcon fontSize="medium" />
              </IconButton>
              <Typography className="text-lg">{hour}</Typography>
              <IconButton
                sx={{ "&:hover": { color: red[800] } }}
                disabled={hour === "00"}
                onClick={() => handleChangeValue("hour", "down")}
              >
                <KeyboardArrowDownIcon fontSize="medium" />
              </IconButton>
            </Stack>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Typography className="text-lg">:</Typography>
            </Stack>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <IconButton
                sx={{ "&:hover": { color: red[800] } }}
                disabled={minute === "59"}
                onClick={() => handleChangeValue("minute", "up")}
              >
                <KeyboardArrowUpIcon fontSize="medium" />
              </IconButton>
              <Typography className="text-lg">{minute}</Typography>
              <IconButton
                sx={{ "&:hover": { color: red[800] } }}
                disabled={minute === "00"}
                onClick={() => handleChangeValue("minute", "down")}
              >
                <KeyboardArrowDownIcon fontSize="medium" />
              </IconButton>
            </Stack>
          </Stack>
        </Box>
      </Popover>
    </>
  );
};

DigitalTimePicker.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func,
  fullWidth: PropTypes.bool,
  required: PropTypes.bool,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  setValue: PropTypes.any,
  name: PropTypes.string.isRequired,
};
