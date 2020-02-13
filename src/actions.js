// export const decreaseQty = _id => ({ type: "DECREASE_QTY", payload: _id });
// export const hideProductToast = _id => ({ type: "HIDE_PRODUCT_TOAST" });
export const saveToken = token => ({ type: "SAVE_TOKEN", payload: token });
export const saveUser = user => ({ type: "SAVE_USER", payload: user });
// export const loadProfile = email => {
//   return async dispatch => {
//     const baseURL = process.env.REACT_APP_BASE_URL;
//     const responseUser = await fetch(baseURL + "/user/" + email);
//     const user = await responseUser.json();
//     dispatch({
//       type: "LOAD_USER",
//       payload: user
//     });
//   };
// };
// export const updateProfile = (email, body) => {
//   return async dispatch => {
//     const baseURL = process.env.REACT_APP_BASE_URL;
//     const response = await fetch(baseURL + "/user/" + email, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(body)
//     });
//     const updatedProfile = await response.json();
//     dispatch({
//       type: "UPDATE_USER",
//       payload: updatedProfile
//     });
//   };
// };
// export const updateExperience = (_id, body) => {
//   return async dispatch => {
//     const baseURL = process.env.REACT_APP_BASE_URL;
//     const response = await fetch(baseURL + "/experience/" + _id, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(body)
//     });
//     if (response.ok) {
//       dispatch({
//         type: "UPDATE_EXPERIENCE"
//       });
//     } else alert("Something went wrong!");
//   };
// };
// export const deleteExperience = _id => {
//   return async dispatch => {
//     const baseURL = process.env.REACT_APP_BASE_URL;
//     const response = await fetch(baseURL + "/experience/" + _id, {
//       method: "DELETE"
//     });
//     if (response.ok) {
//       dispatch({
//         type: "DELETE_EXPERIENCE"
//       });
//     } else alert("Something went wrong!");
//   };
// };
