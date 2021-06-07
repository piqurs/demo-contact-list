import { useReducer } from "react";

const formReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE": {
      return {
        ...state,
        ...action.payload,
      };
    }
    case "RESET": {
      return { name: "", phone: "", email: "" };
    }
    default:
      return state;
  }
};

const useContactForm = ({ name, phone, email }) => {
  const [formValues, dispatch] = useReducer(formReducer, {
    name,
    phone,
    email,
  });

  return [formValues, dispatch];
};

export default useContactForm;
