import joi from 'joi';

const postCreatUserSchema = joi.object({
  username: joi.string().required(),
  password: joi.string().required(),
  email: joi.string().email().required(),
})

const validator = (schema: joi.ObjectSchema) => (payload) => {
  return schema.validate(payload, {abortEarly: false});
}

export const postReqCreateUser = validator(postCreatUserSchema);
