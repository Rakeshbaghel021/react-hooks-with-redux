const initialState = {
  counter: 0,
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "INC":
      return { counter: state.counter + 1 };

    case "DEC":
      return { counter: state.counter - 1 };
    default:
      return state;
  }
}
