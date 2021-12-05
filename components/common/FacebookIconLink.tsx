// react
import * as React from 'react';
// next
import Link from 'next/link';
// @mui icon
import FacebookIcon from '@mui/icons-material/Facebook';
// custom component
import CustomIconButton from 'components/common/CustomIconButton';
// type
import { IconButtonProps } from '@mui/material';
interface FacebookIconLinkProps extends IconButtonProps {
  anchorStyles?: React.CSSProperties;
  href?: string;
  iconSize?: 'inherit' | 'large' | 'medium' | 'small' | undefined;
}

const FacebookIconLink: React.FunctionComponent<FacebookIconLinkProps> = (
  props
) => {
  const {
    anchorStyles,
    color = 'inherit',
    href = '#',
    iconSize = 'inherit',
    ...otherProps
  } = props;

  return (
    <Link href={href}>
      <CustomIconButton
        aria-label="Facebook button"
        color={color}
        {...otherProps}
      >
        <FacebookIcon fontSize={iconSize} />
      </CustomIconButton>
    </Link>
  );
};

export default FacebookIconLink;
