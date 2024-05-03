import joi from 'joi';

const postCalculateShema = joi.object({
  userId: joi.string().required(),
})

const validator = (schema: joi.ObjectSchema) => (payload) => {
  return schema.validate(payload, {abortEarly: false});
} 

export const postReqCalculate = validator(postCalculateShema);