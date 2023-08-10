//package import
import React from "react";
//file import
import { Container } from "../../utilities/container/Container";
import ContactList from "./components/contactList/ContactList";

const Contacts: React.FC = () => {
  return (
    <main>
      <Container>
        <ContactList />
      </Container>
    </main>
  );
};
export default Contacts;
