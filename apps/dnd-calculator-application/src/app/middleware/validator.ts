import joi from 'joi';

export const validator = (schema: joi.ObjectSchema) => (payload: any) => {
  return schema.validate(payload, {abortEarly: false});
} 