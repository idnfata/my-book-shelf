import { Autocomplete, Chip } from '@mui/material';
import PropTypes from 'prop-types';
import { FieldInputOutline } from '@components';
import { red } from '@mui/material/colors';

export const InputChip = (props) => {
  const { placeholder, error, helperText, required, disableClearable, onChange, data, id } = props;
  return (
    <Autocomplete
      multiple
      onKeyDown={(e) => e.key === 'Enter' && e.preventDefault()}
      id={id}
      options={[]}
      value={data}
      defaultValue={[]}
      disableClearable={disableClearable}
      freeSolo
      onChange={onChange}
      renderTags={(value: any[], getTagProps: (arg0: { index: any }) => JSX.IntrinsicAttributes) =>
        value.map((option: any, index: any) => {
          return <Chip className="text-xs" key={index} label={option} {...getTagProps({ index })} />;
        })
      }
      renderInput={(params: any) => (
        <FieldInputOutline
          error={error}
          helperText={helperText}
          required={required}
          sx={{
            '& .MuiOutlinedInput-root': {
              backgroundColor: error ? red[50] : 'transparent',
            },
          }}
          params={params}
          placeholder={placeholder}
          inputProps={{ ...params.inputProps }}
        />
      )}
    />
  );
};

InputChip.defaultProps = {
  disableClearable: true,
};

InputChip.propTypes = {
  placeholder: PropTypes.string,
  error: PropTypes.bool,
  required: PropTypes.bool,
  helperText: PropTypes.string,
  disableClearable: PropTypes.bool,
  onChange: PropTypes.any,
  data: PropTypes.array,
  id: PropTypes.string,
};
