export const jwtSecret = process.env.JWT_SECRET || 'secret_medi';
export const jwtOptions = {
  expiresIn: '1h',
};
