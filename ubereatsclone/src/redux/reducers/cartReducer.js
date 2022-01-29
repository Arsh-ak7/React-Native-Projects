let defaultState = {
  selectedItems: {
    items: [],
    restaurantName: '',
  },
};

let cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      if (action.payload.checkboxValue) {
        let newState = {...state};
        newState.selectedItems = {
          items: [...newState.selectedItems.items, action.payload],
          restaurantName: action.payload.restaurantName,
        };
        return newState;
      } else {
        let newState = {...state};
        let newItems = newState.selectedItems.items.filter(
          item => item.title !== action.payload.title,
        );
        newState.selectedItems = {
          items: newItems,
          restaurantName: action.payload.restaurantName,
        };
        return newState;
      }
    }
    default:
      return state;
  }
};

export default cartReducer;
