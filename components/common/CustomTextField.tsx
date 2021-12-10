// react
import * as React from 'react';
// @mui
import { TextField, TextFieldProps, styled } from '@mui/material';

const CustomTextFieldRoot = styled(TextField)<TextFieldProps>(({ theme }) => ({
  '& .MuiInput-root': {
    color: theme.palette.text.secondary,
    '&:before': {
      borderBottom: '1px solid',
      borderBottomColor: theme.palette.text.disabled,
    },
    '&:hover:not(.Mui-disabled)::before': {
      borderBottom: '2px solid',
      borderBottomColor: theme.palette.text.secondary,
    },
  },
  '& .MuiFilledInput-root': {
    color: theme.palette.text.secondary,
    '&:before': {
      borderBottom: '1px solid',
      borderBottomColor: theme.palette.text.disabled,
    },
    '&:hover::before': {
      borderBottom: '2px solid',
      borderBottomColor: theme.palette.text.secondary,
    },
  },
  '& .MuiOutlinedInput-root': {
    color: theme.palette.text.secondary,
    '& fieldset': {
      borderColor: theme.palette.text.disabled,
    },
    '&:hover fieldset': {
      border: '2px solid',
      borderColor: theme.palette.text.secondary,
    },
  },
}));

const CustomTextField: React.FunctionComponent<TextFieldProps> = (props) => {
  const { children, ...otherProps } = props;

  return <CustomTextFieldRoot {...otherProps} />;
};

export default CustomTextField;
