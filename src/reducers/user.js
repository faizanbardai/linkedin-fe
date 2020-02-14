export default (state = {}, action) => {
  let user;
  switch (action.type) {
    case "SAVE_USER":
      user = action.payload;
      return user;
    // case "LOAD_USER":
    //   return {
    //     ...state,
    //     profile: action.payload
    //   };
    case "UPDATE_USER":
      user = action.payload;
      return { ...state, ...user };
    // case "UPDATE_EXPERIENCE":
    //   return {
    //     ...state
    //   };
    // case "DELETE_EXPERIENCE":
    //   return {
    //     ...state
    //   };
    default:
      return state;
  }
};
