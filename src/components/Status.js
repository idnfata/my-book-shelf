import { amber, blue, green, grey, indigo, red, yellow, orange } from '@mui/material/colors';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Stack, Typography, Box } from '@mui/material';
import PropTypes from 'prop-types';

export const Status = ({ text, color, hideIcon, onclick, className }) => {
  const colors = (value) => {
    switch (value) {
      case 'red':
        return { primary: red[500], secondary: red[50] };
      case 'yellow':
        return { primary: yellow[500], secondary: yellow[50] };
      case 'blue':
        return { primary: blue[500], secondary: blue[50] };
      case 'orange':
        return { primary: orange[500], secondary: orange[50] };
      case 'amber':
        return { primary: amber[500], secondary: amber[50] };
      case 'green':
        return { primary: green[500], secondary: green[50] };
      case 'indigo':
        return { primary: indigo[500], secondary: indigo[50] };
      default:
        return { primary: grey[700], secondary: grey[200] };
    }
  };

  return (
    <Box
      onClick={onclick}
      className={className}
      style={{
        borderRadius: 8,
        borderWidth: color ? 1 : 0,
        color: colors(color).primary,
        borderColor: colors(color).primary,
        padding: 2,
        backgroundColor: colors(color).secondary,
      }}
    >
      <Stack direction="row" spacing={0.5} style={{ justifyContent: 'center', alignItems: 'center', paddingLeft: 5, paddingRight: 5 }}>
        {!hideIcon && <FiberManualRecordIcon style={{ height: 10, width: 10 }} />}
        <Typography className="text-xs font-bold" sx={{fontSize: '12px', fontWeight: '500'}}>{text}</Typography>
      </Stack>
    </Box>
  );
};

Status.propTypes = {
  text: PropTypes.any.isRequired,
  color: PropTypes.string,
  hideIcon: PropTypes.bool,
  onclick: PropTypes.any,
  className: PropTypes.string,
};
