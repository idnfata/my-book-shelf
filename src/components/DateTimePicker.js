import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { LocalizationProvider, TimePicker, DatePicker } from '@mui/lab';
import { FieldInputOutline } from '@components';
import PropTypes from 'prop-types';
import { grey, red } from '@mui/material/colors';

export const DatePickers = (props) => {
  const { value, onChange, fullWidth, field, error, helperText, required, onBlur, minDate, maxDate, disabled, backgroundWhite, views, inputFormat } = props;
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        views={views}
        inputFormat={inputFormat ?? "dd/MM/yyyy"}
        OpenPickerButtonProps={{ style: { color: grey[500] } }}
        value={value}
        mask="__/__/____"
        onChange={onChange}
        field={{ ...field }}
        allowSameDateSelection
        minDate={minDate}
        maxDate={maxDate}
        renderInput={(params) => {
          return (
            <FieldInputOutline
              error={error}
              disabled={disabled}
              onBlur={onBlur}
              helperText={helperText}
              params={params}
              fullWidth={fullWidth}
              placeholder="DD/MM/YYYY"
              required={required}
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: error ? red[50] : backgroundWhite ? 'white' : 'transparent',
                  borderColor: `${red[500]}!important`,
                },
              }}
              inputProps={{ ...params.inputProps }}
            />
          );
        }}
      />
    </LocalizationProvider>
  );
};

DatePickers.defaultProps = {
  onChange: () => console.log('Change Date Picker'),
  value: null,
  disabled: false,
  backgroundWhite: false,
};

DatePickers.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func,
  minDate: PropTypes.any,
  maxDate: PropTypes.any,
  onBlur: PropTypes.func,
  fullWidth: PropTypes.bool,
  field: PropTypes.any,
  error: PropTypes.bool,
  required: PropTypes.bool,
  helperText: PropTypes.string,
  disabled: PropTypes.bool,
  backgroundWhite: PropTypes.bool,
};

export const TimePickers = (props) => {
  const { label, value, onChange, error, helperText, required, onBlur, fullWidth, maxTime, minTime, placeholder, disabled } = props;
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimePicker
        label={label}
        value={value}
        mask="__:__"
        ampm={false}
        maxTime={maxTime}
        minTime={minTime}
        onChange={onChange}
        renderInput={(params) => {
          return (
            <FieldInputOutline
              error={error}
              onBlur={onBlur}
              helperText={helperText}
              params={params}
              fullWidth={fullWidth}
              placeholder={placeholder}
              required={required}
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: error ? red[50] : 'transparent',
                  borderColor: `${red[500]}!important`,
                },
              }}
              inputProps={{ ...params.inputProps }}
            />
          );
        }}
      />
    </LocalizationProvider>
  );
};

TimePickers.defaultProps = {
  onChange: () => console.log('Change Time Picker'),
  value: null,
  disabled: false,
};

TimePickers.propTypes = {
  value: PropTypes.any,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  fullWidth: PropTypes.bool,
  error: PropTypes.bool,
  required: PropTypes.bool,
  helperText: PropTypes.string,
  maxTime: PropTypes.any,
  minTime: PropTypes.any,
  disabled: PropTypes.bool,
};
