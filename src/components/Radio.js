import FormControlLabel from '@mui/material/FormControlLabel';
import PropTypes from 'prop-types';
import { Radio, RadioGroup, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  radio: {
    '&$checked': {
      color: red[800],
    },
  },
  checked: {},
});

export const RadioInputRow = (props) => {
  const classes = useStyles();
  const { data, name, onChange, value, row, field, defaultValue, error, helperText, disabled } = props;
  return (
    <>
      <RadioGroup
        {...field}
        row={row}
        name={name}
        defaultValue={defaultValue}
        className="w-full px-10 -ml-10"
        value={value}
        onChange={onChange}
        sx={{
          backgroundColor: error ? red[50] : 'transparent',
          borderRadius: 2,
        }}
      >
        {data.map((v, i) => (
          <FormControlLabel
            key={i}
            disabled={disabled}
            value={v?.value}
            control={<Radio classes={{ root: classes.radio, checked: classes.checked }} />}
            label={<Typography style={{ fontSize: 12 }}>{v.label}</Typography>}
            // onChange={onChange}
          />
        ))}
      </RadioGroup>
      {error && <Typography style={{ color: red[500], fontSize: 12, marginLeft: 5 }}>{helperText}</Typography>}
    </>
  );
};

RadioInputRow.defaultProps = {
  onChange: () => console.log('Radio Changed'),
  value: 'Radio',
  defaultValue: 'Radio',
  row: true,
  disabled: false,
};

RadioInputRow.propTypes = {
  data: PropTypes.array.isRequired,
  name: PropTypes.string,
  helperText: PropTypes.string,
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  row: PropTypes.bool,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  field: PropTypes.any,
};
