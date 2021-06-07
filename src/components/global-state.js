import React, {
  createContext,
  useContext,
  useCallback,
  useMemo,
  useEffect,
} from "react";
import useContacts from "./use-contacts";
import { getContacts } from "../api";

const INITIAL_STATE = {};

const GlobalContext = createContext(INITIAL_STATE);

export const useGlobalStore = () => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error("Consumer should be wrapped inside the Provider");
  }

  return context;
};

const GlobalProvider = ({ children }) => {
  const [contacts, dispatch] = useContacts();

  const addContacts = useCallback(
    (payload) => {
      dispatch({ type: "INIT", payload });
    },
    [dispatch]
  );

  const addContact = useCallback(
    (payload) => {
      dispatch({ type: "ADD_CONTACT", payload });
    },
    [dispatch]
  );

  const editContact = useCallback(
    (payload) => {
      dispatch({ type: "EDIT_CONTACT", payload });
    },
    [dispatch]
  );

  const removeContact = useCallback(
    (id) => {
      dispatch({ type: "REMOVE_CONTACT", payload: { id } });
    },
    [dispatch]
  );

  useEffect(() => {
    // Load the contacts from the API to the store
    const fetchContacts = async () => {
      const contacts = await getContacts();
      addContacts(contacts);
    };

    // Call the API and show it
    fetchContacts();
  }, [addContacts]);

  const context = useMemo(
    () => ({
      contacts,
      removeContact,
      editContact,
      addContact,
      addContacts,
    }),
    [contacts, removeContact, editContact, addContact, addContacts]
  );

  return (
    <GlobalContext.Provider value={context}>{children}</GlobalContext.Provider>
  );
};

export default GlobalProvider;
