import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import FormInput from "./form-input";
import useContactForm from "./use-contact-form";
import { useGlobalStore } from "./global-state";
import styles from "./contact-form.module.css";

const ContactForm = ({ id, title, ...props }) => {
  const history = useHistory();
  const { contacts } = useGlobalStore();
  const [formValues, dispatchForm] = useContactForm({
    name: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    const contact = contacts.find((contact) => contact.id === id);
    if (contact !== undefined) {
      const { name, email, phone } = contact;
      dispatchForm({ type: "UPDATE", payload: { name, email, phone } });
    }
  }, [dispatchForm, contacts, id]);

  const resetForm = () => {
    dispatchForm({ type: "RESET" });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone } = formValues;
    if (name && email && phone) {
      props.onSubmit(formValues);
    }

    resetForm();
  };

  const onDiscard = () => {
    resetForm();
    history.push("/");
  };

  const onChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    dispatchForm({ type: "UPDATE", payload: { [key]: value } });
  };

  return (
    <React.Fragment>
      <form onSubmit={onSubmit}>
        <h3>{title}</h3>
        <FormInput
          type="text"
          label="Name"
          value={formValues.name}
          onChange={onChange}
          placeholder="Contact name"
          required
        />
        <FormInput
          type="text"
          label="Phone"
          value={formValues.phone}
          onChange={onChange}
          placeholder="Contact phone"
          required
        />
        <FormInput
          type="email"
          label="Email"
          value={formValues.email}
          onChange={onChange}
          placeholder="Contact email"
          required
        />
        <button type="submit">Save contact</button>
        <button
          type="button"
          className={styles.discardButton}
          onClick={onDiscard}
        >
          Discard
        </button>
      </form>
    </React.Fragment>
  );
};

export default ContactForm;
