// export const decreaseQty = _id => ({ type: "DECREASE_QTY", payload: _id });
// export const hideProductToast = _id => ({ type: "HIDE_PRODUCT_TOAST" });
export const loadProfile = email => {
  return async dispatch => {
    const baseURL = process.env.REACT_APP_BASE_URL;
    const responseUser = await fetch(baseURL + "/user/" + email);
    const user = await responseUser.json();
    dispatch({
      type: "LOAD_USER",
      payload: user
    });
  };
};
export const updateProfile = (email, body) => {
  console.log(body);
  return async dispatch => {
    const baseURL = process.env.REACT_APP_BASE_URL;
    const response = await fetch(baseURL + "/user/" + email, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });
    const updatedProfile = await response.json();
    console.log(updatedProfile);
    dispatch({
      type: "UPDATE_USER",
      payload: updatedProfile
    });
  };
};
