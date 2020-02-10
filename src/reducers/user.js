export default (state = {}, action) => {
  switch (action.type) {
    case "LOAD_USER":
      return {
        ...state,
        profile: action.payload
      };
    case "UPDATE_USER":
      return {
        ...state,
        profile: action.payload
      };
    case "UPDATE_EXPERIENCE":
      return {
        ...state
      };
    case "DELETE_EXPERIENCE":
      return {
        ...state
      };
    default:
      return state;
  }
};
