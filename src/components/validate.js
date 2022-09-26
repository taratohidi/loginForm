const validate = (data) => {
  const errors = {};

  if (!data.name.trim().length) {
    errors.name = "username required";
  } else {
    delete errors.name;
  }
  if (!data.password) {
    errors.email = "email required";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "email address is invalid";
  } else {
    delete errors.email;
  }

  if (!data.password) {
    errors.password = "password required";
  } else if (data.password.length < 6) {
    errors.password = "password need to be 6 charecteror more";
  } else {
    delete errors.password;
  }

  if (!data.confirmPassword) {
    errors.confirmPassword = "confirm the password";
  } else if (data.confirmPassword !== data.password) {
    errors.confirmPassword = "password does not match";
  } else {
    delete errors.confirmPassword;
  }

  if (data.isAccepted) {
    delete errors.isAccepted;
  } else {
    errors.isAccepted = "Accept our regulation";
  }

  return errors;
};

export { validate };
