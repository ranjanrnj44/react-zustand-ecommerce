import React, { useState, useEffect } from "react";
//routerHooks
// import { useHistory, useParams } from "react-router-dom";
//axios
// import axios from "axios";
//skeleton
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";

//store
import useCartStore from "../../app/store";

function ProductListing() {
  //ref value
  //let initialLoad = useRef(true);

  //initial states
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState(products);
  const [loading, setLoading] = useState(false);
  console.log(filter);
  //store fetchApi
  const fetch_Api = useCartStore((state) => state.fetchAll);
  const fetched_Product = useCartStore(
    (state) => state.initialState.fetchedProduct
  );
  const addItem = useCartStore((state) => state.addProduct);

  //stop
  let initialLoad = true;

  // fetch the data
  useEffect(() => {
    setLoading(true);
    fetch_Api("https://fakestoreapi.com/products");
    if (initialLoad) {
      setProducts(fetched_Product);
      setFilter(fetched_Product);
      setLoading(false);
    }
    return () => {
      initialLoad = false;
    };
  }, []);

  //loader
  const LoadingStill = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height="350" />
        </div>
        <div className="col-md-3">
          <Skeleton height="350" />
        </div>
        <div className="col-md-3">
          <Skeleton height="350" />
        </div>
        <div className="col-md-3">
          <Skeleton height="350" />
        </div>
        <div className="col-md-3">
          <Skeleton height="350" />
        </div>
      </>
    );
  };

  //filteredProducts
  const filteredProduct = (picked) => {
    const pickedFilter = products.filter((item) => item.category === picked);
    setFilter(pickedFilter);
  };

  //all categories
  const AllCategories = () => {
    return (
      <>
        <div className="buttons d-flex flex-wrap justify-content-center m-5 modify-layout">
          <button
            type="button"
            className="btn btn-outline-dark me-2"
            onClick={() => setFilter(products)}
          >
            All
          </button>
          <button
            type="button"
            className="btn btn-outline-dark me-2"
            onClick={() => filteredProduct("men's clothing")}
          >
            Men
          </button>
          <button
            type="button"
            className="btn btn-outline-dark me-2"
            onClick={() => filteredProduct("women's clothing")}
          >
            Women
          </button>
          <button
            type="button"
            className="btn btn-outline-dark me-2"
            onClick={() => filteredProduct("jewelery")}
          >
            Jewellers
          </button>
          <button
            type="button"
            className="btn btn-outline-dark me-2"
            onClick={() => filteredProduct("electronics")}
          >
            Electronics
          </button>
        </div>
        {filter.map((product) => {
          return (
            <div className="col-lg-3 col-md-3 col-sm-3 mt-3" key={product.id}>
              <div className="card h-100 text-center p-4 mt-2">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                  height="270px"
                />
                <div className="card-body">
                  <h5 className="card-title mb-0">
                    {product.title.slice(0, 12)}
                  </h5>
                  <p className="card-text fw-bolder">
                    {`$`}
                    {product.price}
                  </p>
                  <Link
                    to={`/product/${product.id}`}
                    className="btn btn-outline-primary"
                  >
                    Buy now
                  </Link>{" "}
                  &nbsp;
                  <button
                    className="btn btn-outline-dark"
                    onClick={() => addItem(product)}
                  >
                    Add to cart
                  </button>
                  &nbsp;
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    //   text-white bg-dark
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12">
            <h1 className="display-5 fw-bolder text-center">
              Feature & Popular
            </h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <LoadingStill /> : <AllCategories />}
        </div>
      </div>
    </div>
  );
}

export default ProductListing;
