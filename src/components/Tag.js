import { Typography } from '@mui/material';
import { green, red } from '@mui/material/colors';
import PropTypes from 'prop-types';

const colors = (color) => {
  switch (color) {
    case 'primary':
      return {
        primary: red,
        secondary: 'white',
      };
    case 'success':
      return {
        primary: green,
        secondary: 'white',
      };
    default: {
      return {
        primary: red,
        secondary: 'white',
      };
    }
  }
};

export const Tag = ({ color = 'primary', text = 'tag', fontSize = 12 }) => {
  return (
    <div className="px-12 py-3" style={{ borderRadius: 8, backgroundColor: colors(color).primary[50] }}>
      <Typography variant="body1" style={{ color: colors(color).primary[800], fontSize: { fontSize } }}>
        {text}
      </Typography>
    </div>
  );
};

Tag.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  fontSize: PropTypes.number,
};
