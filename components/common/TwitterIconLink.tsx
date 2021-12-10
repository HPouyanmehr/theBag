// react
import * as React from 'react';
// @mui icon
import TwitterIcon from '@mui/icons-material/Twitter';
// custom component
import IconButtonLink from 'components/common/IconButtonLink';
// type
import { IconButtonProps } from '@mui/material';
interface TwitterIconLinkProps extends IconButtonProps {
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

const TwitterIconLink: React.FunctionComponent<TwitterIconLinkProps> = (
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
    <IconButtonLink aria-label="Twitter button" href={href} {...otherProps}>
      <TwitterIcon color={iconColor} fontSize={iconSize} />
    </IconButtonLink>
  );
};

export default TwitterIconLink;
