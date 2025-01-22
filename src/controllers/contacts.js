// src/controllers/contacts.js
import mongoose from 'mongoose';
import { getAllcontacts, getContactById } from '../services/contacts.js';
import createHttpError from 'http-errors';

export const getContactsController = async (req, res) => {
  const contacts = await getAllcontacts();

  res.status(200).json({
    status: 200,
    message: 'Successfully found contacts!',
    data: contacts,
  });
};

export const getContactsByIdController = async (req, res) => {
  const { contactId } = req.params;

  // Перевірка на валідність ObjectId
  if (!mongoose.Types.ObjectId.isValid(contactId)) {
    throw createHttpError(400, 'Invalid contact ID');
  }

  const contact = await getContactById(contactId);

  if (!contact) {
    throw createHttpError(404, 'Contact not found');
  }

  res.json({
    status: 200,
    message: `Successfully found contact with id ${contactId}!`,
    data: contact,
  });
};
