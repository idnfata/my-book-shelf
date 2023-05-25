import PropTypes from 'prop-types';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const Accordions = (props) => {
  const { id, children, className, title } = props;
  return (
    <Accordion className={`rounded border-1 shadow-0 ${className}`}>
      <AccordionSummary
        className="bg-gray-100 rounded border-0 shadow-0 min-h-36 max-h-36"
        sx={{
          '&.Mui-expanded': {
            minHeight: 42,
            maxHeight: 42,
          },
        }}
        expandIcon={<ExpandMoreIcon fontSize="small" />}
        aria-controls={id}
        id={id}
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails className="rounded mt-10 shadow-0">{children}</AccordionDetails>
    </Accordion>
  );
};

Accordions.propTypes = {
  id: PropTypes.any,
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string,
};
