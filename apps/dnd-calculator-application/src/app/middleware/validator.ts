import joi from 'joi';

export const validator = (schema: joi.ObjectSchema) => (payload) => {
  return schema.validate(payload, {abortEarly: false});
} 