import React from "react";
//store
import useCartStore from "../../app/store";

function Cart() {
  //store for cart and remove from cart
  const cart_Data = useCartStore((state) => state.initialState.cartItem);
  const deleteItem = useCartStore((state) => state.removeProduct);

  console.log(cart_Data);

  let NoCartItems = () => {
    return (
      <>
        <div className="container d-flex vh-100 justify-content-center align-items-center p-2 fw-bolder display-2 construction">
          Cart is empty, try adding and be a lucky winner, offer ends in next 2
          days...
        </div>
      </>
    );
  };

  let CartItems = () => {
    return (
      <div className="d-flex d-sm-flex d-sm-wrap">
        {cart_Data.map((item) => (
          <div className="" key={item.id}>
            <div className="card text-center p-1 m-2">
              <img
                src={item.image}
                className="card-img-top"
                alt={item.title}
                height="300px"
                width="300px"
              />
              <div className="card-body">
                <h5 className="card-title mb-0">{item.title.slice(0, 12)}</h5>
                <p className="card-text fw-bolder">
                  {`$`}
                  {item.price}
                </p>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => deleteItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return <>{cart_Data.length === 0 ? <NoCartItems /> : <CartItems />}</>;
}

export default Cart;
