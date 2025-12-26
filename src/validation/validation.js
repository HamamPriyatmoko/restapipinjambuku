import { ResponseError } from '../error/response-error.js';

const validate = async (schema, request) => {
  try {
    const result = await schema.validate(request, {
      stripUnknown: true,
      abortEarly: false,
    });
    // console.log('Ini adalah hasil validate', result);
    return result;
  } catch (error) {
    throw new Error(400, error.errors);
  }
};

export { validate };
