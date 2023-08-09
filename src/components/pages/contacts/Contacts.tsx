//package import
import React, { useState, useContext } from "react";
//file import
import ContactList from "./components/contactList/ContactList";

const Contacts: React.FC = () => {
  return (
    <main>
      <div className={`container`}>
        <ContactList />
      </div>
    </main>
  );
};
export default Contacts;
