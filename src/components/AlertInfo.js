import { useState, forwardRef, useCallback, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import { useSnackbar, SnackbarContent } from 'notistack';
import Collapse from '@mui/material/Collapse';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { red } from '@mui/material/colors';
import PropTypes from 'prop-types';
// import * as Sentry from '@sentry/react';

const useStyles = makeStyles(() => ({
  root: {
    '@media (min-width:600px)': {
      minWidth: '344px !important',
    },
  },
  card: {
    backgroundColor: red[800],
    width: '100%',
    borderRadius: '10px',
  },
  typography: {
    fontWeight: 'bold',
    color: 'white',
  },
  actionRoot: {
    padding: '8px 8px 8px 16px',
    justifyContent: 'space-between',
  },
  icons: {
    marginLeft: 'auto',
    color: 'white',
  },
  expand: {
    padding: '8px 8px',
    transform: 'rotate(0deg)',
    transition: 'all .2s',
    color: 'white',
  },
  collapse: {
    padding: 16,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: '8px',
    borderBottomLeftRadius: '8px',
    maxWidth: '500px',
  },
  checkIcon: {
    fontSize: 20,
    color: '#b3b3b3',
    paddingRight: 4,
  },
  button: {
    padding: 0,
    textTransform: 'none',
  },
}));

export const ResponseBackend = forwardRef((props, ref) => {
  const { id, message, response } = props;
  const classes = useStyles();
  const { closeSnackbar } = useSnackbar();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = useCallback(() => {
    setExpanded((oldExpanded) => !oldExpanded);
  }, []);

  const handleDismiss = useCallback(() => {
    closeSnackbar(props.id);
  }, [id, closeSnackbar]);

  // useEffect(() => {
  //   let isMounted = true;
  //   if (isMounted) {
  //     Sentry.captureException(JSON.stringify(response?.data, undefined, 2), (scope) => {
  //       scope.setTransactionName('Call API');
  //       scope.setContext('context', response?.data);
  //     });
  //   }
  //   return () => {
  //     isMounted = false;
  //   };
  // }, []);

  return (
    <SnackbarContent ref={ref} className={classes.root}>
      <Card className={classes.card}>
        <CardActions classes={{ root: classes.actionRoot }}>
          <Typography variant="subtitle2" className={classes.typography}>
            {message}
          </Typography>
          <div className={classes.icons}>
            <IconButton
              aria-label="Show more"
              className={classes.expand}
              style={expanded ? { transform: 'rotate(180deg)' } : null}
              onClick={handleExpandClick}
            >
              <ExpandMoreIcon />
            </IconButton>
            <IconButton className={classes.expand} onClick={handleDismiss}>
              <CloseIcon />
            </IconButton>
          </div>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Paper className={classes.collapse}>
            <Typography variant="subtitle2" gutterBottom>
              Response :
            </Typography>
            <pre style={{ whiteSpace: 'pre-wrap' }}>{JSON.stringify(response?.data, undefined, 2)}</pre>
          </Paper>
        </Collapse>
      </Card>
    </SnackbarContent>
  );
});

ResponseBackend.propTypes = {
  id: PropTypes.any,
  message: PropTypes.string,
  response: PropTypes.any,
};
