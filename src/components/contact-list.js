import React from "react";
import Contact from "./contact";
import { useGlobalStore } from "./global-state";

const EmptyContactList = () => {
  return <div>No contacts yet</div>;
};

const ContactList = () => {
  const { contacts } = useGlobalStore();

  return (
    <React.Fragment>
      <ol
        style={{
          padding: 0,
          listStyle: "none",
        }}
      >
        {contacts.map((contact) => {
          return <Contact key={contact.id} {...contact} />;
        })}
      </ol>
      {contacts.length === 0 && <EmptyContactList />}
    </React.Fragment>
  );
};

export default ContactList;
