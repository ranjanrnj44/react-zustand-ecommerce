//store from zustand, import
import create from "zustand";
//middlewares (devtool, persisit - for localStorage)
import { devtools, persist } from "zustand/middleware";
//axios
import axios from "axios";

//let fetchSingleProduct;

let initialState = {
  cartItem: [],
  fetchedProduct: [],
  fetchSingleProduct: []
};

//store logic
//set is used to making any changes/manuplation, just like state & setState, NOTE : this is not exactly out store, we'll get wrapped-up below
const cartStore = (set) => ({
  //initialState
  initialState,
  //cartItem: [],
  addProduct: (product) =>
    //set takes the state 1st, state is responsible for doing any mainpulation that we created in line 20
    set((state) => ({
      initialState: {
        ...state.initialState,
        cartItem: [product, ...state.initialState.cartItem]
      }
    })),

  removeProduct: (productId) =>
    set((state) => ({
      initialState: {
        ...state.initialState,
        cartItem: state.initialState.cartItem.filter(
          (item) => item.id !== productId
        )
      }
    })),

  // fetch external API
  //fetchedProduct: [],
  fetchAll: async (url) => {
    const response = await axios.get(url);
    set((state) => ({
      initialState: { ...state.initialState, fetchedProduct: response.data }
    }));
  },
  // fetch detailsPage
  //fetchSingleProduct,
  fetchOne: async (url) => {
    const response = await axios.get(url);
    set((state) => ({
      initialState: {
        ...state.initialState,
        fetchSingleProduct: response.data
      }
    }));
  }
});

//this is our Zustand Hook
const useCartStore = create(
  devtools(persist(cartStore, { name: "cartStore" }))
);

//export out Hook
export default useCartStore;
