export const validateEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const validateUsername = (name: string): boolean => {
  return name.length >= 3 && name.length <= 20;
};

export const validatePassword = (password: string): boolean => {
  return password.length >= 8 && password.length <= 20;
};
