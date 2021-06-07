import { useEffect } from "react";

const useContactsStorage = ({ key, contacts, addContacts }) => {
  // Initial contacts loaded from localStorage
  useEffect(() => {
    if (localStorage.getItem(key)) {
      const payload = JSON.parse(localStorage.getItem(key));
      addContacts(payload);
    }
  }, [key, addContacts]); // Load only once after the component mounts

  // Save contacts data to localStorage when contacts state change
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(contacts));
  }, [contacts, key]);
};

export default useContactsStorage;
