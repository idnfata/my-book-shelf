import { red, grey } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';

const SelectedCheckbox = withStyles({
  root: {
    '&.MuiCheckbox-root': {
      padding: 0,
      transform: 'scale(1)',
      color: grey[400],
    },
    '&.Mui-checked': {
      '& .MuiSvgIcon-root': {
        fill: red[800],
      },
    },
    '&.MuiCheckbox-indeterminate': {
      fill: 'red',
      '& .MuiSvgIcon-root': {
        fill: red[800],
      },
    },
  },
  checked: {},
})(Checkbox);

export const Checkedbox = (props) => {
  const { style, checked, disabled, onChange, value, id } = props;
  return <SelectedCheckbox id={id} value={value} style={style} checked={checked} disabled={disabled} onChange={onChange} />;
};

Checkedbox.defaultProps = {
  checked: true,
  onChange: () => console.log('chekeced'),
};

Checkedbox.propTypes = {
  style: PropTypes.object,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.any,
  id: PropTypes.string,
};
