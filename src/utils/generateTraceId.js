import crypto from 'crypto';

export const generateTraceId = () => {
  return crypto.randomBytes(6).toString('hex');
};
