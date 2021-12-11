// react
import * as React from 'react';
// @mui
import { Box, Rating, RatingProps, Typography } from '@mui/material';
// @mui icons
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// type
interface ReviewProps extends RatingProps {}

const Review: React.FunctionComponent<ReviewProps> = (props) => {
  const { value = 4, ...otherProps } = props;

  return (
    <Box>
      <Rating
        value={value}
        icon={<FavoriteIcon color="info" fontSize="inherit" />}
        emptyIcon={<FavoriteBorderIcon color="info" fontSize="inherit" />}
        {...otherProps}
      />
      <Typography color="text.disable" component="p" variant="body2">
        204 reviews. ({value}/5)
      </Typography>
    </Box>
  );
};

export default Review;
