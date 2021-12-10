// react
import * as React from 'react';
// formik
import { Formik } from 'formik';
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

      <Formik
        initialValues={{ name: '', email: '', subject: '', message: '' }}
        onSubmit={(values) => console.log(values)}
      >
        {({ values, handleChange, handleBlur, handleSubmit, handleReset }) => (
          <>
            <CardContent
              sx={{
                paddingBottom: 0,
                padding: 0,
                margin: '1rem',
              }}
            >
              <form onReset={handleReset} onSubmit={handleSubmit} noValidate>
                <CustomTextField
                  fullWidth
                  label={toCapitalize('name')}
                  name="name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  sx={{ marginBottom: '1rem' }}
                  type="text"
                  value={values.name}
                  variant="outlined"
                />
                <CustomTextField
                  fullWidth
                  label={toCapitalize('email')}
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  required
                  sx={{ marginBottom: '1rem' }}
                  type="email"
                  value={values.email}
                  variant="outlined"
                />
                <CustomTextField
                  fullWidth
                  label={toCapitalize('subject')}
                  name="subject"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  sx={{ marginBottom: '1rem' }}
                  type="text"
                  value={values.subject}
                  variant="outlined"
                />
                <CustomTextField
                  fullWidth
                  label={toCapitalize('message')}
                  maxRows={6}
                  minRows={4}
                  multiline
                  name="message"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  required
                  type="text"
                  value={values.message}
                  variant="outlined"
                />
              </form>
            </CardContent>
            <CardActions
              sx={{ justifyContent: 'flex-end', margin: '1rem', padding: 0 }}
            >
              <CustomButton onClick={() => handleReset()} type="reset">
                Reset
              </CustomButton>
              <CustomButton
                onClick={() => {
                  handleSubmit();
                  handleReset();
                }}
                type="submit"
                variant="contained"
              >
                Submit
              </CustomButton>
            </CardActions>
          </>
        )}
      </Formik>
    </Card>
  );
};

export default ContactForm;