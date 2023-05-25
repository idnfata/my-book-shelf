import { Stack, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { red } from '@mui/material/colors';

export const TextLink = (props) => {
  const { text, onClick, className, startIcon, color } = props;
  return (
    <Stack direction="row" spacing={0.5} sx={{ '&:hover': { color: red[800] } }} style={{ color }} alignItems="center">
      {startIcon && startIcon}
      <Typography style={{ cursor: 'pointer' }} className={className} onClick={onClick}>
        {text}
      </Typography>
    </Stack>
  );
};

TextLink.propTypes = {
  text: PropTypes.any.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  startIcon: PropTypes.node,
  color: PropTypes.any,
};

TextLink.defaultProps = {
  text: 'Text Link',
  onClick: () => console.log('Text Link Pressed'),
  className: '',
};
