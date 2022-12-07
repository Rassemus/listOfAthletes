export default (state, action) => {
    const { payload, type } = action;
    switch (type) {
      case "GET_URHEILIJAT":
        return {
          ...state,
          urheilijat: payload,
        };
      case "GET_URHEILIJA":
        return {
          ...state,
          urheilijat: payload,
        };
      case "DELETE_URHEILIJA":
        return {
          ...state,
          urheilijat: state.urheilijat.filter(
            (urheilija) => urheilija.id !== action.payload
          ),
        };
      case "ADD_URHEILIJA":
        return {
          ...state,
          urheilijat: [action.payload, ...state.urheilijat],
        };
      case "EDIT_URHEILIJA":
        return {
          ...state,
          urheilijat: state.urheilijat.athletics.map((urheilija) => 
          urheilija.id === action.payload.id
              ? console.log(urheilija = action.payload)
              : console.log(urheilija)
          ),
        };
      default:
        return state;
    }
  };
  