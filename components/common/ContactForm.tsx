// react
import * as React from 'react';
// @mui
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from '@mui/material';
// custom component
import CustomTextField from 'components/common/CustomTextField';
import CustomButton from 'components/common/CustomButton';
// type
interface ContactFormProps {}

const ContactForm: React.FunctionComponent<ContactFormProps> = (props) => {
  const toCapitalize = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <Card sx={{ maxWidth: '26rem' }}>
      <CardHeader
        title={
          <Typography color="primary" component="h2" variant="h5">
            Contact form
          </Typography>
        }
        subheader={
          <Typography component="p" variant="subtitle1" color="text.disabled">
            Lorem ipsum dolor sit amet.
          </Typography>
        }
      />
      <CardContent
        sx={{
          paddingBottom: 0,
          padding: 0,
          margin: '1rem',
        }}
      >
        <form>
          <CustomTextField
            fullWidth
            label={toCapitalize('name')}
            name="name"
            sx={{ marginBottom: '1rem' }}
            type="text"
            variant="outlined"
          />
          <CustomTextField
            fullWidth
            label={toCapitalize('email')}
            name="email"
            required
            sx={{ marginBottom: '1rem' }}
            type="email"
            variant="outlined"
          />
          <CustomTextField
            fullWidth
            label={toCapitalize('subject')}
            name="subject"
            sx={{ marginBottom: '1rem' }}
            type="text"
            variant="outlined"
          />
          <CustomTextField
            fullWidth
            label={toCapitalize('message')}
            maxRows={6}
            minRows={4}
            multiline
            name="message"
            required
            type="text"
            variant="outlined"
          />
        </form>
      </CardContent>
      <CardActions
        sx={{ justifyContent: 'flex-end', margin: '1rem', padding: 0 }}
      >
        <CustomButton type="reset">Reset</CustomButton>
        <CustomButton type="submit" variant="contained">
          Submit
        </CustomButton>
      </CardActions>
    </Card>
  );
};

export default ContactForm;
