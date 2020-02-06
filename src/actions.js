// export const increaseQty = _id => ({ type: "INCREASE_QTY", payload: _id });
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
