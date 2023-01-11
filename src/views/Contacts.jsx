import style from '../Styles.module.css';
import { ContacstForm } from '../components/ContactsForm';
import { Filter } from '../components/Filter';
import { ContactsList } from '../components/ContactsList';

const Contacts = () => {
  return (
    <div className={style.view__container}>
      <h2 className={style.home__title}>
        Enter a name and phone number:
      </h2>
      <ContacstForm />
      <Filter />
      <ContactsList />
    </div>
  );
};

export default Contacts;
