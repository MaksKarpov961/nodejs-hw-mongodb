import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required(), // Ім'я має бути рядком від 3 до 20 символів
  phoneNumber: Joi.string()
    .pattern(/^\+?\d{10,15}$/)
    .required(), // Телефонний номер у форматі +380123456789 або 1234567890
  email: Joi.string().email().required(), // Перевірка на валідний email
  isFavourite: Joi.boolean().default(false), // Необов'язкове поле, за замовчуванням false
  contactType: Joi.string()
    .valid('work', 'home', 'personal')
    .default('personal'), // Тільки вказані значення
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20),
  phoneNumber: Joi.string().pattern(/^\+?\d{10,15}$/),
  email: Joi.string().email(),
  isFavourite: Joi.boolean(),
  contactType: Joi.string().valid('work', 'home', 'personal'),
});
