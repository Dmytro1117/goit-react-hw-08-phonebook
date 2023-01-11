import style from '../Styles.module.css';
import { useState } from 'react';
import { useContacts } from './Hooks/hooks';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import PropTypes from 'prop-types';

export const ContacstForm = () => {
  const { contacts, addContact } = useContacts();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
   
  };

  const handleSubmit = async event => {
    event.preventDefault();

    const enterContacts = contacts.some(
      contact =>
        (contact.name === name.toLowerCase() && contact.number === number) ||
        contact.number === number
    );
    enterContacts
      ? Notify.info(`${name} or ${number} is already in contacts`)
      : addContact({ name, number });
    !enterContacts && Notify.success(`${name} and ${number} is add`);
    setName('');
    setNumber('');
  };

  return (
    <div className={style.cont__container}>
      <form className={style.form__container} onSubmit={handleSubmit}>
        <input
          autoComplete='off'
          type="text"
          name="name"
          value={name}
          placeholder="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
        <input
           autoComplete='off'
          type="tel"
          name="number"
          value={number}
          placeholder="Phone number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="number number must be at least 5 digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
        <button type="submit " className={style.form__btn}>
          Add contact
        </button>
      </form>
    </div>
  );
};

 ContacstForm.prototypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
};


Notify.init({
  width: '400px',
  position:  'center-top', // 'right-top' - 'right-bottom' - 'left-top' - 'left-bottom' - 'center-top' - 'center-bottom' - 'center-center'
  distance: '70px',
  opacity: 1,
  borderRadius: '3px',
 timeout: 2500,
  fontAwesomeIconStyle: 'shadow', // 'basic' - 'shadow'
  fontAwesomeIconSize: '35px',
  fontSize: '20px',
});