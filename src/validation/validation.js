import { ResponseError } from '../error/errorResponse.js';

const validate = async (schema, request) => {
  try {
    const result = await schema.validate(request, {
      stripUnknown: true,
      abortEarly: false,
    });
    // console.log('Ini adalah hasil validate', result);
    return result;
  } catch (error) {
    throw new ResponseError(400, error.errors, 'ZYD-ERR-004');
  }
};

export { validate };
