export const registrationFormPayload = [
  {
    name: 'firstName',
    title: "First Name",
    type: 'text',
    required: true
  },
  {
    name: 'lastName',
    title: 'Last Name',
    type: 'text',
    required: true
  },
  {
    name: 'email',
    title: 'Email',
    type: 'email',
    required: true
  },
  {
    name: 'phoneNumber',
    title: 'Phone Number',
    validation: "isNumeric",
    validationError: 'Enter a valid Phone Number',
    type: 'text',
    required: true
  },
  {
    name: 'password',
    title: 'Password',
    type: 'password',
    required: true
  },
  {
    name: 'confirmPassword',
    title: 'Confirm Password',
    type: 'password',
    required: true
  }
]

export const loginFormPayload = [
  {
    name: 'email',
    title: 'Email',
    type: 'email',
    required: true
  },
  {
    name: 'password',
    title: 'Password',
    type: 'password',
    required: true
  }
]

export const forgotPasswordFormPayload = [
  {
    name: 'email',
    title: 'Email',
    type: 'email',
    required: true
  }
]

export const resetPasswordFormPayload = [
  {
    name: 'password',
    title: 'Password',
    type: 'password',
    required: true
  },
  {
    name: 'confirmPassword',
    title: 'Confirm Password',
    type: 'password',
    required: true
  }
]