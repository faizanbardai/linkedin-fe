import { api_updateProfile } from "./components/api";
export const saveToken = token => ({ type: "SAVE_TOKEN", payload: token });
export const saveUser = user => ({ type: "SAVE_USER", payload: user });
export const updateProfile = (body, token) => {
  return async dispatch => {
    const response = await api_updateProfile(body, token);
    switch (response.status) {
      case 200:
        // OK
        const updatedProfile = await response.json();
        dispatch({
          type: "UPDATE_USER",
          payload: updatedProfile
        });
        break;
      case 401:
        // unauthorized
        alert("Unauthorized");
        break;
      default:
        alert("Some error");
    }
  };
};
