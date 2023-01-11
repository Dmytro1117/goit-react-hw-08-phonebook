import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getContacts = createAsyncThunk('contacts/fetchContacts', async () => {
  try {
    const { data } = await axios.get('/contacts');
  
    return data;
  } catch (error) {
   
  }
});

const addContact = createAsyncThunk('contacts/add', async contact => {
  try {
    const { data } = await axios.post('/contacts', contact);
    return data;
  } catch (error) {
   
    return error.message;
  }
});

const deleteContact = createAsyncThunk('contacts/delete', async id => {
  try {
    await axios.delete(`/contacts/${id}`);
    return id;
  } catch (error) {
  
    return error.message;
  }
});

export const contactsOperations = { getContacts, addContact, deleteContact };
export default contactsOperations;
