export default (state = {}, action) => {
  switch (action.type) {
    case "SAVE_USER":
      const user = action.payload;
      return { ...state, ...user };
    // case "LOAD_USER":
    //   return {
    //     ...state,
    //     profile: action.payload
    //   };
    // case "UPDATE_USER":
    //   return {
    //     ...state,
    //     profile: action.payload
    //   };
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
