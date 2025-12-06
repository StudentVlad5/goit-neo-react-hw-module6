import userAvatar from '../../../assets/user.svg';
import phoneIcon from '../../../assets/phone.svg';
import Button from '../../Button/Button';
import css from './Contact.module.css';

const Contact = ({ con: { name, number, id }, deleteContact }) => {
  return (
    <li className={css.contactContainer}>
      <p className={css.contactWrap}>
        <span className={css.contactRow}>
          <img
            className={css.image}
            src={userAvatar}
            aria-label="userAvatar"
            alt="user Avatar"
          />
          {name}
        </span>
        <span className={css.contactRow}>
          <img
            className={css.image}
            src={phoneIcon}
            aria-label="phoneIcon"
            alt="phone Icon"
          />
          {number}
        </span>
      </p>

      <Button
        btnName={'Delete'}
        type={'button'}
        handleOperation={() => deleteContact(id)}
      />
    </li>
  );
};

export default Contact;
