const BASE_URL = "http://localhost:4444";

export const getContacts = async () => {
  const response = await fetch(`${BASE_URL}/contacts`);
  const data = await response.json();
  return data;
};

const requestPayload = (payload) => {
  return {
    body: JSON.stringify({ ...payload }),
    headers: {
      "Content-Type": "application/json",
    },
  };
};

export const postContacts = async (payload) => {
  const response = await fetch(`${BASE_URL}/contacts`, {
    method: "POST",
    ...requestPayload(payload),
  });
  const data = await response.json();
  return data;
};

export const putContacts = async ({ id, ...payload }) => {
  try {
    const response = await fetch(`${BASE_URL}/contacts/${id}`, {
      method: "PUT",
      ...requestPayload(payload),
    });
    if (response.ok) {
      const data = await response.json();
      return { data };
    } else {
      throw Error(response.statusText);
    }
  } catch (error) {
    return { error };
  }
};

export const deleteContacts = async (id) => {
  const response = await fetch(`${BASE_URL}/contacts/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
};
