import { red, grey } from '@mui/material/colors';
import PropTypes from 'prop-types';
import { Autocomplete, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';
import { makeStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';
import { FieldInputOutline } from '@components';

const useStyles = makeStyles({
  option: {
    '&.Mui-focused ': {
      backgroundColor: `${grey[100]}!important`,
    },
    '&[aria-selected="true"]': {
      backgroundColor: `${red[50]}!important`,
    },
  },
});

const renderPopupIcon = () => <KeyboardArrowDownIcon style={{ marginTop: 2, width: 20, height: 20 }} />;
const renderCloseIcon = () => <CloseIcon style={{ marginTop: 1, width: 20, height: 20 }} />;

export const SelectAutocomplete = (props) => {
  const styles = useStyles();
  const {
    options,
    defaultValue,
    id,
    disabled,
    noOptionsText,
    placeholder,
    popupIcon,
    clearIcon,
    disableClearable,
    fullWidth,
    field,
    error,
    helperText,
    required,
    values,
    onChange,
    loading,
    readOnly,
    onBlur,
    onFocus,
    multiple,
    filterSelectedOptions,
    isOptionEqualToValue,
    blurOnSelect,
  } = props;
  const CustomPaper = (propss) => {
    return <Paper elevation={5} style={{ borderRadius: 8 }} {...propss} />;
  };
  return (
    <Autocomplete
      multiple={multiple}
      fullWidth={fullWidth}
      disabled={disabled}
      filterSelectedOptions={filterSelectedOptions}
      id={id}
      blurOnSelect={blurOnSelect}
      onFocus={onFocus}
      isOptionEqualToValue={isOptionEqualToValue}
      onBlur={onBlur}
      readOnly={readOnly}
      popupIcon={popupIcon ? renderPopupIcon() : null}
      options={options}
      styles={styles}
      loading={loading}
      field={{ ...field }}
      classes={{ option: styles.option }}
      disableClearable={disableClearable}
      PaperComponent={CustomPaper}
      getOptionLabel={(option) => option?.label}
      renderOption={(list, option, { selected }) => {
        return (
          <Typography
            {...list}
            key={option.value}
            style={{
              fontSize: '12px',
              fontWeight: selected ? 'bold' : 'normal',
              backgroundColor: !selected ? 'transparent' : red[800],
              color: selected ? red[900] : 'black',
              paddingLeft: '12px'
            }}
          >
            {option?.label}
          </Typography>
        );
      }}
      size="small"
      noOptionsText={<Typography style={{ fontSize: 14 }}>{noOptionsText}</Typography>}
      defaultValue={defaultValue}
      clearIcon={clearIcon ? renderCloseIcon() : null}
      renderInput={(params) => {
        return (
          <FieldInputOutline
            error={error}
            helperText={helperText}
            required={required}
            disabled={disabled}
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: error ? red[50] : 'transparent',
                paddingLeft: '10px !important',
                paddingTop: '4.5px !important',
                paddingBottom: '4.5px !important',
                fontSize: '14px !important',
              },
            }}
            params={params}
            placeholder={placeholder}
            inputProps={{ ...params.inputProps }}
          />
        );
      }}
      onChange={onChange}
      value={values}
    />
  );
};

SelectAutocomplete.propTypes = {
  className: PropTypes.string,
  noOptionsText: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  options: PropTypes.array,
  field: PropTypes.any,
  error: PropTypes.bool,
  required: PropTypes.bool,
  helperText: PropTypes.string,
  defaultValue: PropTypes.object,
  disabled: PropTypes.bool,
  popupIcon: PropTypes.bool,
  fullWidth: PropTypes.bool,
  clearIcon: PropTypes.bool,
  disableClearable: PropTypes.bool,
  values: PropTypes.any,
  onChange: PropTypes.any,
  loading: PropTypes.bool,
  readOnly: PropTypes.bool,
  onBlur: PropTypes.any,
  onFocus: PropTypes.any,
  multiple: PropTypes.bool,
  filterSelectedOptions: PropTypes.bool,
  isOptionEqualToValue: PropTypes.any,
  blurOnSelect: PropTypes.bool,
};

SelectAutocomplete.defaultProps = {
  popupIcon: true,
  clearIcon: true,
  loading: false,
  readOnly: false,
  multiple: false,
  values: null,
  options: [],
  noOptionsText: 'Data tidak ditemukan',
  placeholder: 'Pilih Data',
  blurOnSelect: false,
  onChange: () => console.log('Selected Change'), // eslint-disable-line no-console
};
