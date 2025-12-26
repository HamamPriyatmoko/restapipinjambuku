import { createMemberService } from '../service/member.service.js';

export const createMember = async (req, res, next) => {
  try {
    const { name, email } = req.body;

    const member = await createMemberService({ name, email });

    return res.status(201).json({ message: 'Member berhasil di buat', data: member });
  } catch (error) {
    // Error dari validation akan di beri ziyad code 004
    next(error);
  }
};

