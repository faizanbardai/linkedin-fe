const baseURL = process.env.REACT_APP_BASE_URL;

export const api_refreshToken = async tokenFromStorage => {
  return await fetch(baseURL + "/user/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + tokenFromStorage
    },
    body: null
  });
};

export const api_createAccount = async body => {
  return await fetch(baseURL + "/user/createAccount", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });
};

export const api_login = async body => {
  return await fetch(baseURL + "/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });
};

export const api_updateProfile = async (body, token) => {
  return await fetch(baseURL + "/user", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token
    },
    body: JSON.stringify(body)
  });
};

export const api_getUserByID = async (_id, token) => {
  return await fetch(baseURL + "/user/" + _id, {
    header: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token
    }
  });
};

export const api_updateProfileImage = async (body, token) => {
  return await fetch(baseURL + "/user/uploadImage", {
    method: "POST",
    headers: {
      // "Content-Type": "application/json",
      Authorization: "Bearer " + token
    },
    body: body
  });
};
