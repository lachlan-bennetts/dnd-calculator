import joi from 'joi';
import { validator } from './validator';

const postCalculateShema = joi.object({
  userId: joi.string().required(),
})

export const postReqCalculate = validator(postCalculateShema);