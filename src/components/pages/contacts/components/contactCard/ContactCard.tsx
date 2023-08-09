import React from "react";
import styles from "./ContactCard.module.scss";
import { ContactModel } from "../../../../../model";

/***************************** */
//Interface
/***************************** */
interface ContactCardProps {
  contact: ContactModel;
}

/***************************** */
//component's definition
/***************************** */
const ContactCard = ({ contact }: ContactCardProps) => {
  //-------------------------------//
  //Setup - state and hooks
  const {
    _id,
    name,
    email,
    phone,
    label,
    linkedIn,
    instagram,
    twitter,
    createdAt,
    updatedAt,
  } = contact;

  return (
    <li className={styles.contactCard}>
      <div className={styles.btns}>
        {/* <div className={styles.edit} onClick={handleEdit}>
          <p>edit</p>
        </div> */}
        {/* <div className={styles.delete} onClick={handleDelete}>
          <p>del</p>
        </div> */}
      </div>
      <article>
        <div>
          <div className={styles.inputGroup}>
            <span>Name:</span> <span>{name}</span>
          </div>
          <div className={styles.inputGroup}>
            <span>Phone:</span> <span>{phone}</span>
          </div>
          <div className={styles.inputGroup}>
            <span>Email:</span> <span>{email}</span>
          </div>
        </div>
        <div>
          <span>LinkedIn</span>
          <span>Twitter</span>
          <span>Instagram</span>
          <span>Facebook</span>
        </div>
      </article>
      <footer>{/* <span>{cardFooterText}</span> */}</footer>
    </li>
  );
};

export default ContactCard;
