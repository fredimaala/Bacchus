import bcrypt from 'bcrypt';

const saltRounds = 10; // Adjust the cost factor based on your security needs

export const hashPassword = async (plainPassword) => {
  try {
    const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
    return hashedPassword;
  } catch (error) {
    throw new Error('Error hashing password');
  }
};

export const comparePasswords = async (plainPassword, hashedPassword) => {
  try {
    const result = await bcrypt.compare(plainPassword, hashedPassword);
    return result;
  } catch (error) {
    throw new Error('Error comparing passwords');
  }
};