// yup
import * as Yup from 'yup';

export const ContactFormSchema = Yup.object().shape({
  name: Yup.string().min(3).max(32).label('Name'),
  email: Yup.string().email().required().label('Email'),
  subject: Yup.string().min(3).max(255).label('Subject'),
  message: Yup.string().min(3).max(2048).required().label('Message'),
});
