// react
import * as React from 'react';
// @mui icon
import InstagramIcon from '@mui/icons-material/Instagram';
// custom component
import IconButtonLink from 'components/common/IconButtonLink';
// type
import { IconButtonProps } from '@mui/material';
interface InstagramIconLinkProps extends IconButtonProps {
  anchorStyles?: React.CSSProperties;
  href?: string;
  iconColor?:
    | 'inherit'
    | 'action'
    | 'disabled'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning';
  iconSize?: 'inherit' | 'large' | 'medium' | 'small' | undefined;
}

const InstagramIconLink: React.FunctionComponent<InstagramIconLinkProps> = (
  props
) => {
  const {
    anchorStyles,
    href = '#',
    iconColor = 'inherit',
    iconSize = 'inherit',
    ...otherProps
  } = props;

  return (
    <IconButtonLink aria-label="Instagram button" href={href} {...otherProps}>
      <InstagramIcon color={iconColor} fontSize={iconSize} />
    </IconButtonLink>
  );
};

export default InstagramIconLink;
