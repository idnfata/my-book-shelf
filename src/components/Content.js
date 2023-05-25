import Card from '@mui/material/Card';
import PropTypes from 'prop-types';

export const Content = (props) => {
  const { children, className } = props;
  return (
    <Card
      className={className}
      variant="outlined"
      sx={{ borderRadius: 2 }}
      style={{
        minHeight: 50,
        backgroundColor: 'white',
        boxShadow: '0 6px 15px -10px rgba(0,0,0,0.3)',
      }}
    >
      {children}
    </Card>
  );
};

Content.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
};
