export const initialState = {
  basket: [],
  user: null,
};
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);
function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
      break;
    case "ADD_TO_BASKET":
      // logic to add item in basket
      return { ...state, basket: [...state.basket, action.item] };
      break;
    case "REMOVE_FROM_BASKET":
      // logic to remove item from basket

      // 👉 we cloned the basket
      let newBasket = [...state.basket];
      // 👉we check to se if product exist
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      // 👉 if the product exists
      if (index >= 0) {
        //👉 delete the product
        newBasket.splice(index, 1);
      } else {
        console.warn(`cant remove product (id : ${action.id})`);
      }
      // 👉load the current state and replace it with the new basket done 😊
      return { ...state, basket: newBasket };
      break;
  }
}
export default reducer;
