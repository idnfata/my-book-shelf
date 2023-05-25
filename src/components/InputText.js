import { grey, indigo, red } from '@mui/material/colors';
import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';

const CssTextField = withStyles({
  root: {
    '& .MuiFilledInput-root': {
      backgroundColor: 'white',
    },
    '& label.Mui-focused': {
      color: indigo[400],
    },
    '& input.Mui-disabled': {
      backgroundColor: grey[50],
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: indigo[400],
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: grey[300],
      },
      '&:hover fieldset': {
        borderColor: indigo[300],
      },
      '&.Mui-focused fieldset': {
        borderColor: indigo[400],
      },
      '&.Mui-error fieldset': {
        borderColor: `${red[500]}!important`,
      },
    },
  },
})(TextField);

export const FieldInputOutline = (props) => {
  const {
    id,
    onChange,
    onBlur,
    style,
    sx,
    value,
    placeholder,
    startAdornment,
    endAdornment,
    fullWidth,
    readOnly,
    error,
    helperText,
    inputProps,
    ref,
    params,
    field,
    multiline,
    minRows,
    required,
    type,
    disabled,
    name,
    defaultValue,
  } = props;
  return (
    <CssTextField
      id={id}
      multiline={multiline}
      minRows={minRows}
      style={style}
      defaultValue={defaultValue}
      type={type}
      sx={sx}
      required={required}
      FormHelperTextProps={{
        sx: {
          fontSize: 12,
          marginLeft: 1,
        },
      }}
      variant="outlined"
      value={value}
      placeholder={placeholder}
      size="small"
      name={name}
      fullWidth={fullWidth}
      InputProps={{
        startAdornment,
        endAdornment,
        inputProps,
        sx: {
          fontSize: 12,
          borderRadius: 1,
          backgroundColor: error ? red[50] : disabled ? grey[100] : 'white',
        },
      }}
      {...field}
      {...params}
      ref={ref}
      onChange={onChange}
      onBlur={onBlur}
      error={error}
      helperText={helperText}
      readOnly={readOnly}
      disabled={disabled}
    />
  );
};

FieldInputOutline.propTypes = {
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  style: PropTypes.object,
  inputProps: PropTypes.object,
  ref: PropTypes.any,
  params: PropTypes.any,
  field: PropTypes.any,
  sx: PropTypes.object,
  innerRef: PropTypes.any,
  value: PropTypes.any,
  placeholder: PropTypes.string,
  startAdornment: PropTypes.node,
  endAdornment: PropTypes.node,
  fullWidth: PropTypes.bool,
  multiline: PropTypes.bool,
  minRows: PropTypes.number,
  readOnly: PropTypes.bool,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  id: PropTypes.string,
  defaultValue: PropTypes.any,
};

FieldInputOutline.defaultProps = {
  disabled: false,
  readOnly: false,
};
