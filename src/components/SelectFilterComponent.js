import { Autocomplete, Checkbox, TextField } from '@mui/material';
import React from 'react';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    color: '#A0B842 !important',
    '& checked': {
      color: '#A0B842 !important',
    },
  },
  textFieldRoot: {
    '& .MuiOutlinedInput-root .MuiAutocomplete-input': {
      padding: '0px !important',
    },
    '& .MuiAutocomplete-inputRoot': {
      flexWrap: 'nowrap !important',
      overflow: 'auto',
    },
    '& .Mui-focused': { flexWrap: 'wrap !important' },
    '& .MuiAutocomplete-tag': {
      maxWidth: '100px !important',
    },
  },
});

const SelectFilterComponent = ({
  dataFilter,
  multipleValue,
  filterPlaceholder,
  setSelectedFilter,
  selectedFilter = [],
}) => {
  const classes = useStyles();
  return (
    <Autocomplete
      size='small'
      multiple={multipleValue}
      id='filter'
      options={dataFilter?.data}
      value={selectedFilter}
      disableCloseOnSelect
      getOptionLabel={(option) => option.name || ''}
      freeSolo
      isOptionEqualToValue={(option, value) => option.id === value.id}
      onChange={(event, value) => setSelectedFilter(value)} // prints the selected value
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize='small' />}
            checkedIcon={
              <CheckBoxIcon fontSize='small' className={classes.root} />
            }
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.name}
        </li>
      )}
      sx={{ width: '225px' }}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder={filterPlaceholder}
          className={classes.textFieldRoot}
        />
      )}
    />
  );
};

export default SelectFilterComponent;
