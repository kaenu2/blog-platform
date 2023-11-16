import { regExpEmail } from '../reg-exps';

const emailOptions = {
  required: 'This field is required.',
  minLength: {
    value: 6,
    message: 'Must be at least 6 characters',
  },
  pattern: {
    value: regExpEmail,
    message: 'Email is invalid',
  },
};
const passwordOptions = {
  required: 'This field is required.',
  minLength: {
    value: 6,
    message: 'Must be at least 6 characters',
  },
  maxLength: {
    value: 40,
    message: 'Must be up to 40 characters',
  },
};

const userNameOptions = {
  required: 'This field is required.',
  minLength: {
    value: 3,
    message: 'Must be at least 3 characters',
  },
  maxLength: {
    value: 20,
    message: 'Must be up to 20 characters',
  },
};

const articleOptions = {
  required: 'This field is required.',
};

export { emailOptions, passwordOptions, userNameOptions, articleOptions };
