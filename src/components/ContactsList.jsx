import style from '../Styles.module.css';
import { Loader } from '../components/Loader/Loader';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useContacts } from './Hooks/hooks';
import { contactsOperations } from '../redux/contacts/contactsOperations';
import { useSelector } from 'react-redux';
import authSelectors from '../redux/auth/auth-selectors';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import PropTypes from 'prop-types';

export const ContactsList = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const dispatch = useDispatch();
  const { contacts, isLoaging, filter, deleteContact, setFilter } =
    useContacts();

  useEffect(() => {
    dispatch(contactsOperations.getContacts());
  }, [dispatch]);

  const findContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    if (contacts) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    }
  };

  const filteredContacts = findContacts();

  return (
    <div>
      <h2 className={style.home__title}>Contacts:</h2>
      {isLoaging && <Loader />}
      {isLoggedIn && (
        <ul className={style.items__container}>
          {contacts &&
            filteredContacts.map(({ id, name, number }) => {
              return (
                <li className={style.item} key={id}>
                  <h3 className={style.item__name}>{name}:</h3>
                  <p className={style.item__name}>{number}</p>
                  <button
                    className={style.user__btn}
                    type="button"
                    onClick={() => {
                      deleteContact(id);
                      Notify.failure(`${name} tel: ${number} is deleted`)
                      setFilter('');
                    }}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
        </ul>
      )}
    </div>
  );
};


ContactsList.propTypes = {
  deleteContact: PropTypes.func,
  find: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
     }),
  )
};