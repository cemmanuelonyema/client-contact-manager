/***************************** */
//Import statements
/***************************** */
//package import
import { useMemo, useContext } from "react";

//file import
import styles from "./ContactCard.module.scss";
// import { Contact as ContactModel } from '../../../../../model/index';
// import { formatDate } from '../../../../../utilities/formatDate';
// import { ContactContext, GlobalContext } from '../../../../../context';

/***************************** */
//Interface
/***************************** */
// interface ContactCardProps {
//       contact: ContactModel;
// }

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

  const { toggleModal } = useContext(GlobalContext);
  const { deleteContact, setCurrentContact } = useContext(ContactContext);
  //----------------------------------------------------//
  //Body - do something with the component's data
  let createdUpdatedText: string = "";
  const cardFooterText =
    updatedAt > createdAt
      ? (createdUpdatedText = `Updated At: ${useMemo(
          () => formatDate(updatedAt),
          [updatedAt]
        )}`)
      : (createdUpdatedText = `Created At: ${useMemo(
          () => formatDate(createdAt),
          [createdAt]
        )}`);

  //------------------------------------------------//
  //Guard clauses - prevent rendering if needed

  //------------------------------------------//
  //main result of the component returned
  const handleEdit = () => {
    toggleModal();
    setCurrentContact(contact);
  };
  const handleDelete = async () => {
    console.log("delete", _id);
    deleteContact(_id);
  };

  return (
    <li className={styles.contactCard}>
      <div className={styles.btns}>
        <div className={styles.edit} onClick={handleEdit}>
          <p>edit</p>
        </div>
        <div className={styles.delete} onClick={handleDelete}>
          <p>del</p>
        </div>
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
