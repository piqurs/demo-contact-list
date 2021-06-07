import React from "react";
import { useHistory } from "react-router-dom";
import cuid from "cuid";
import ContactForm from "./contact-form";
import { useGlobalStore } from "./global-state";
import { postContacts } from "../api";

const AddContact = () => {
  const history = useHistory();
  const { addContact } = useGlobalStore();

  const onSubmit = (submitData) => {
    const id = cuid();
    const payload = { id, ...submitData };
    (async () => {
      await postContacts(payload);
      addContact(payload);
      history.push("/");
    })();
  };

  return <ContactForm title={"Add new contact"} onSubmit={onSubmit} />;
};

export default AddContact;
