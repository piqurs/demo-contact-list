import React from "react";
import "./contact.css";
import { useHistory } from "react-router-dom";
import { useGlobalStore } from "./global-state";
import { deleteContacts } from "../api";

const ContactItem = ({ name, email, phone }) => {
  return (
    <React.Fragment>
      <h2 className="contact-name">{name}</h2>
      <div className="contact-email">
        <strong>{email}</strong>
      </div>
      <div>{phone}</div>
    </React.Fragment>
  );
};

const MemoizedContactItem = React.memo(ContactItem);

const Contact = (props) => {
  const history = useHistory();
  const { removeContact } = useGlobalStore();
  const { id } = props;

  const onEdit = () => {
    history.push(`/edit/${id}`);
  };

  const onRemove = () => {
    const confirm = window.confirm(
      "Are you sure, you want to remove the contact?"
    );
    if (confirm) {
      (async () => {
        await deleteContacts(id);
        removeContact(id);
      })();
    }
  };

  return (
    <li className="contact">
      <React.Fragment>
        <MemoizedContactItem {...props} />
        <section className="button-group">
          <button onClick={onEdit}>Edit</button>
          <button onClick={onRemove} className="remove-button">
            Remove
          </button>
        </section>
      </React.Fragment>
    </li>
  );
};

export default Contact;
