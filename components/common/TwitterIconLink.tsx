// react
import * as React from 'react';
// next
import Link from 'next/link';
// @mui icon
import TwitterIcon from '@mui/icons-material/Twitter';
// custom component
import CustomIconButton from 'components/common/CustomIconButton';
// type
import { IconButtonProps } from '@mui/material';
interface TwitterIconLinkProps extends IconButtonProps {
  anchorStyles?: React.CSSProperties;
  href?: string;
  iconSize?: 'inherit' | 'large' | 'medium' | 'small' | undefined;
}

const TwitterIconLink: React.FunctionComponent<TwitterIconLinkProps> = (
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
    <Link href={href} passHref>
      <CustomIconButton
        aria-label="Facebook button"
        color={color}
        {...otherProps}
      >
        <TwitterIcon fontSize={iconSize} />
      </CustomIconButton>
    </Link>
  );
};

export default TwitterIconLink;
