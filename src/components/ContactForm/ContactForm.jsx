import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from '../Button/Button';
import css from './ContactForm.module.css';
import { useId } from 'react';

const ContactFormSchema = Yup.object().shape({
  userName: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),

  phoneNumber: Yup.string()
    .matches(/^[0-9-]+$/, 'Phone number must contain only digits and dashes')
    .min(3, 'Too short')
    .max(50, 'Too long')
    .required('Required'),
});

const initialValues = {
  userName: '',
  phoneNumber: '',
};

const ContactForm = ({ setContacts }) => {
  const userNameId = useId();
  const phoneNumberId = useId();

  const handleSubmit = (values, actions) => {
    const newUser = {
      name: values.userName,
      number: values.phoneNumber,
      id: nanoid(),
    };
    setContacts(prev => [...prev, newUser]);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactFormSchema}
    >
      {({ isValid, dirty }) => (
        <Form className={css.formContainer}>
          <div>
            <label htmlFor={userNameId}>Name</label>
            <Field type="text" name="userName" id={userNameId} />
            <ErrorMessage
              className={css.error}
              name="userName"
              component="div"
            />
          </div>

          <div>
            <label htmlFor={phoneNumberId}>Phone number</label>
            <Field type="text" name="phoneNumber" id={phoneNumberId} />
            <ErrorMessage
              className={css.error}
              name="phoneNumber"
              component="div"
            />
          </div>

          <Button
            btnName={!isValid || !dirty ? 'Add contact' : 'Save'}
            type={'submit'}
          />
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
