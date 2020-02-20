const baseURL = process.env.REACT_APP_BASE_URL;

export const refreshToken = async tokenFromStorage => {
  return await fetch(baseURL + "/user/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + tokenFromStorage
    },
    body: null
  });
};

export const createAccount = async body => {
  return await fetch(baseURL + "/user/createAccount", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });
};

export const login = async body => {
  return await fetch(baseURL + "/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });
};

export const updateProfile = async (body, token) => {
  return await fetch(baseURL + "/user", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token
    },
    body: JSON.stringify(body)
  });
};
