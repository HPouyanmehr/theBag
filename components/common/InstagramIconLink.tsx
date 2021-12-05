// react
import * as React from 'react';
// next
import Link from 'next/link';
// @mui icon
import InstagramIcon from '@mui/icons-material/Instagram';
// custom component
import CustomIconButton from 'components/common/CustomIconButton';
// type
import { IconButtonProps } from '@mui/material';
interface InstagramIconLinkProps extends IconButtonProps {
  anchorStyles?: React.CSSProperties;
  href?: string;
  iconSize?: 'inherit' | 'large' | 'medium' | 'small' | undefined;
}

const InstagramIconLink: React.FunctionComponent<InstagramIconLinkProps> = (
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
        <InstagramIcon fontSize={iconSize} />
      </CustomIconButton>
    </Link>
  );
};

export default InstagramIconLink;
