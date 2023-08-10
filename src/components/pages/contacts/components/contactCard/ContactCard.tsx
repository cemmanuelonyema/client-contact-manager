import { useMemo } from "react";
import styles from "./ContactCard.module.scss";
import { ContactModel } from "../../../../../model";
import { formatDate } from "../../../../../utilityFunctions/formatDate";

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
    // _id,
    name,
    email,
    phone,
    // label,
    // linkedIn,
    // instagram,
    // twitter,
    createdAt,
    updatedAt,
  } = contact;

  //----------------------------------------------------//
  //Body - do something with the component's data
  let updatedText: string = "";

  const cardFooterText =
    updatedAt > createdAt
      ? (updatedText = `Updated At: ${useMemo(
          () => formatDate(updatedAt),
          [updatedAt]
        )}`)
      : (updatedText = `Created At: ${useMemo(
          () => formatDate(createdAt),
          [createdAt]
        )}`);

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
      <footer>
        <span>{cardFooterText}</span>
      </footer>
    </li>
  );
};

export default ContactCard;
