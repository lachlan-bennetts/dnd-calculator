import joi from 'joi';
import { validator } from './validator';

const postCreatUserSchema = joi.object({
  username: joi.string().required(),
  password: joi.string().required(),
  email: joi.string().email().required(),
})

export const postReqCreateUser = validator(postCreatUserSchema);
