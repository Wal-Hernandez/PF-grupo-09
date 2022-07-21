
const initialState = {
  first:[]
};



function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "first": return
    default: return state;
  }
}

export default rootReducer;
