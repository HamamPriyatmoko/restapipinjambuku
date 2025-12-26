import { connectDB } from '../config/database.js';
import { ResponseError } from '../error/errorResponse.js';
import { createValidationMember } from '../validation/member.validation.js';
import { validate } from '../validation/validation.js';

export const createMemberService = async (body) => {
  body = await validate(createValidationMember, body);
  console.log(body);

  // Cek apakah member sudah ada atau belum
  const dataExist = await connectDB.members.findUnique({
    where: {
      email: body.email,
    },
  });

  // console.log(dataExist);

  if (dataExist) {
    throw new ResponseError(409, 'Email sudah ada', 'ZYD-ERR-003');
  }

  const member = await connectDB.members.create({ data: body });

  return member;
};
