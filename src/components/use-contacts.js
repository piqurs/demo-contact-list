import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INIT": {
      return [...action.payload];
    }
    case "ADD_CONTACT": {
      return [
        ...state,
        {
          ...action.payload,
        },
      ];
    }
    case "EDIT_CONTACT": {
      const { id, ...formData } = action.payload;
      const updatedContacts = state.map((contact) => {
        if (contact.id === id) {
          return {
            id,
            ...formData,
          };
        }
        return contact;
      });
      return [...updatedContacts];
    }
    case "REMOVE_CONTACT": {
      const { id } = action.payload;
      const updatedContacts = state.filter((contact) => contact.id !== id);
      return [...updatedContacts];
    }
    default:
      return state;
  }
};

const useContacts = () => {
  const [contacts, dispatch] = useReducer(reducer, []);
  return [contacts, dispatch];
};

export default useContacts;
