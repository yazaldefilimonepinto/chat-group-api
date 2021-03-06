import Joi from 'joi';

const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// name may contain spaces
const nameRegex = /^[a-zA-Z0-9 ]+$/;
// password not contain space
const passwordRegex = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,30}$/;
const emailSchema = Joi.object({
  email: Joi.string().email().required().regex(new RegExp(emailRegex)),
});
const nameSchema = Joi.object({
  name: Joi.string().required().regex(new RegExp(nameRegex)).min(2).max(30),
});

const passwordSchema = Joi.object({
  password: Joi.string().required().regex(new RegExp(passwordRegex)).min(8).max(30),
});
const descriptionSchema = Joi.object({
  description: Joi.string().required().min(0).max(1000),
});

const mensagemContentSchema = Joi.object({
  content: Joi.string().required().min(1),
});

export function isValidContent(content: string): boolean {
  if (!content) return false;
  const result = mensagemContentSchema.validate({ content });
  return result.error ? false : true;
}

export function isValidEmail(email: string): boolean {
  if (!email) return false;
  const result = emailSchema.validate({ email });
  return result.error ? false : true;
}

export function isValidName(name: string): boolean {
  if (!name) return false;
  const result = nameSchema.validate({ name });
  return result.error ? false : true;
}

export function isValidPassword(password: string): boolean {
  if (!password) return false;
  const result = passwordSchema.validate({ password });
  return result.error ? false : true;
}

export function isValidDescription(description: string): boolean {
  if (!description) return false;
  const result = descriptionSchema.validate({ description });
  return result.error ? false : true;
}
