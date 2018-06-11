export const required = value => (value ? undefined : 'Required');

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;

export const alphanumeric = value =>
  value && !/^[a-z0-9]*$/i.test(value)
    ? 'Input should only contain alphanumeric characters'
    : undefined;
