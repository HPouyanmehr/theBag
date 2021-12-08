// react
import * as React from 'react';
// @mui
import { Box, BoxProps, ChipProps, styled } from '@mui/material';
import CustomChip from 'components/common/CustomChip';
// type
export interface FilterOption {
  active?: boolean;
  label: string;
  [key: string]: any;
}
interface FilterProps extends ChipProps {
  options: FilterOption[];
  onOptionClick?: (a: any) => void;
}

const FiltersWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  margin: '1rem',
  overflow: 'auto',
  [theme.breakpoints.up('sm')]: {
    margin: '2rem',
  },
  [theme.breakpoints.up('md')]: {
    justifyContent: 'center',
  },
  div: {
    marginBottom: '1rem',
  },
  '&> :not(div:last-of-type)': {
    marginRight: '0.5rem',
  },
}));

const Filter: React.FunctionComponent<FilterProps> = (props) => {
  const { children, onClick, onOptionClick, options, ...otherProps } = props;
  const [filterOptions, setFilterOptions] =
    React.useState<FilterOption[]>(options);

  const handleOptionClick = (option: FilterOption) => {
    const newOptions: FilterOption[] = Object.assign([], filterOptions);
    newOptions.forEach((opt) => {
      if (opt.active) opt.active = false;
    });

    const index = filterOptions.findIndex((opt) => opt.label === option.label);
    newOptions[index].active = true;

    if (onOptionClick) onOptionClick(option);
    setFilterOptions(newOptions);
  };

  return (
    <FiltersWrapper onClick={onClick}>
      {filterOptions.map((option, index) => (
        <CustomChip
          key={option.label + index}
          label={option.label}
          color="info"
          variant={option.active ? 'filled' : 'outlined'}
          onClick={() => handleOptionClick(option)}
          {...otherProps}
        />
      ))}
    </FiltersWrapper>
  );
};

export default Filter;
