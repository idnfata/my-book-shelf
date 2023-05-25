import React, { Fragment } from 'react';
import { Card } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  wrapper: {
    '& p': {
      fontSize: '16px',
      fontWeight: '400px',
      lineHeight: '24px',
      margin: 0,
    },
    '& h3': {
      margin: 0,
    },
  },
});

export const CardComponent = (props) => {
  const {
    width,
    children,
    className,
    title,
    count,
    styleCard,
    counter,
    desc,
    fullWidth,
    boxShadow,
  } = props;
  const classes = useStyles();

  return (
    <Card
      sx={{
        display: 'inline-block',
        padding: '24px',
        width: counter ? '246px' : `258px`,
        minWidth: fullWidth ? '100%' : width,
        backgroundColor: counter ? '#F9FAFB' : '',
        boxShadow,
        '& h4': {
          margin: 0,
          fontWeight: 700,
          fontSize: '16px',
          lineHeight: '24px',
        },
        '& h3': {
          margin: 0,
          fontWeight: 600,
          fontSize: '20px',
          lineHeight: '30px',
        },
        '& h2': (theme) => ({
          margin: 0,
          marginTop: '16px',
          fontWeight: 400,
          fontSize: '36px',
          lineHeight: '44px',
          color: theme.colorSecondary,
        }),
        '& h5': (theme) => ({
          margin: 0,
          marginTop: '16px',
          fontWeight: 700,
          fontSize: '16px',
          lineHeight: '24px',
          color: '#687083',
        }),
      }}
      className={className}
    >
      {children || <>
        {counter && <h3>{counter}</h3>}
          {title && <h4>{title}</h4>}
          {count && <h2>{count}</h2>}
          {desc && <h5>{desc}</h5>}</>}

    </Card>
  );
}

CardComponent.defaultProps = {
  width: '',
  className: '',
  title: '',
  count: null,
};