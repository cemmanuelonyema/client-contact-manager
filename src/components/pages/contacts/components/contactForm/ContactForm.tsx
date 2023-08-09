import React, { useContext, useState, useEffect } from 'react';
import styles from './ContactForm.module.scss';
import { ContactContext, GlobalContext } from '../../../../../context';

const ContactForm = () => {
      const { toggleModal } = useContext(GlobalContext);
      const { addContact, updateContact, current } = useContext(ContactContext);

      //Local State
      const [contact, setContact] = useState({
            name: '',
            email: '',
            phone: '',
            linkedIn: '',
            instagram: '',
            twitter: '',
            label: '',
      });

      const { name, email, phone, label, linkedIn, instagram, twitter } =
            contact;

      //methods
      const handleChange = (
            e:
                  | React.ChangeEvent<HTMLInputElement>
                  | React.ChangeEvent<HTMLSelectElement>
      ) =>
            setContact({
                  ...contact,
                  [e.target.name]: e.target.value,
            });

      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            if (current === null) {
                  addContact(contact);
                  setContact({
                        name: '',
                        email: '',
                        phone: '',
                        label: '',
                        linkedIn: '',
                        instagram: '',
                        twitter: '',
                  });
            } else {
                  updateContact(contact);
            }
      };

      useEffect(() => {
            if (current) {
                  setContact(current);
            } else {
                  setContact({
                        name: '',
                        email: '',
                        phone: '',
                        label: '',
                        linkedIn: '',
                        instagram: '',
                        twitter: '',
                  });
            }
      }, [current]);

      return (
            <form onSubmit={handleSubmit} className={styles.contactForm}>
                  <span onClick={() => toggleModal()}>X</span>
                  <h2 className="">
                        {current === null ? 'Add Contact' : 'Edit Contact'}
                  </h2>

                  <div className={styles.formGroup}>
                        <div className={styles.labelGroup}>
                              <label>Name</label>
                              <span className={styles.highlight}>*</span>
                        </div>
                        <input
                              type="text"
                              placeholder="Name"
                              name="name"
                              value={name}
                              onChange={handleChange}
                        />
                  </div>

                  <div className={styles.formGroup}>
                        <div className={styles.labelGroup}>
                              <label>Phone number</label>
                              <span className={styles.highlight}>*</span>
                        </div>
                        <input
                              type="text"
                              placeholder="Phone"
                              name="phone"
                              value={phone}
                              onChange={handleChange}
                        />
                  </div>

                  <div className={styles.formGroup}>
                        <div className={styles.labelGroup}>
                              <label>Email</label>
                        </div>

                        <input
                              type="email"
                              placeholder="Email"
                              name="email"
                              value={email}
                              onChange={handleChange}
                        />
                  </div>

                  <div className={styles.formGroup}>
                        <label>LinkedIn</label>
                        <input
                              type="link"
                              placeholder="linkedIn"
                              name="linkedIn"
                              value={linkedIn}
                              onChange={handleChange}
                        />
                  </div>

                  <div className={styles.formGroup}>
                        <label>Instagram</label>

                        <input
                              type="link"
                              placeholder="instagram"
                              name="instagram"
                              value={instagram}
                              onChange={handleChange}
                        />
                  </div>

                  <div className={styles.formGroup}>
                        <label>Twitter</label>
                        <input
                              type="link"
                              placeholder="twitter"
                              name="twitter"
                              value={twitter}
                              onChange={handleChange}
                        />
                  </div>

                  <div className={styles.formGroup}>
                        <label>Contact Label</label>
                        <select
                              name="label"
                              value={label}
                              onChange={handleChange}
                        >
                              <option value="family">Family</option>
                              <option value="professional">Professional</option>
                              <option value="friend">Friend</option>
                        </select>
                  </div>

                  <input
                        type="submit"
                        value={
                              current === null
                                    ? 'Add Contact'
                                    : 'Update Contact'
                        }
                  />
            </form>
      );
};

export default ContactForm;
