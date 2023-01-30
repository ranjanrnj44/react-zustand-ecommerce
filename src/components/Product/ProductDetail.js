import React, { useState, useEffect } from "react";
//routerHooks
import { useHistory, useParams } from "react-router-dom";

//skeleton
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";

//store
import useCartStore from "../../app/store";

function ProductDetail() {
  //ref value
  //let initialLoad = useRef(true);

  //store fetchApi
  let fetched_Single = useCartStore(
    (state) => state.initialState.fetchSingleProduct
  );
  console.log(fetched_Single);

  const fetched_One = useCartStore((state) => state.fetchOne);
  const addItem = useCartStore((state) => state.addProduct);

  //state and apiCall
  const [product, setProduct] = useState([]);
  //console.log(product);
  const [loading, setLoading] = useState(false);
  //router part
  const { id } = useParams();
  const history = useHistory();

  //stop
  //let initialLoad = true;

  //effect
  useEffect(() => {
    //stop
    let initialLoad = true;
    setLoading(true);
    fetched_One(`https://fakestoreapi.com/products/${id}`);
    if (initialLoad) {
      setProduct(fetched_Single);
      setLoading(false);
    }
    return () => {
      initialLoad = false;
    };
  }, [id]);

  //loader
  let LoadingStill = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={450} />
        </div>
        <div className="col-md-6">
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} />
        </div>
      </>
    );
  };

  //single product data
  let SingleProduct = () => {
    return (
      <>
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img
            src={product.image}
            alt={product.title}
            height="300px"
            width="300px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-black-60 text-uppercase">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bolder">
            Rating {product.rating && product.rating.rate}
            &nbsp;&nbsp;&nbsp;
            <i className="fa fa-star"></i>
          </p>
          <p>Viewed by {product.rating && product.rating.count} user</p>
          <h3 className="display-6 fw-bold my-4">
            {`$`}
            {product.price}
          </h3>
          <p className="lead">{product.description}</p>
          <button
            className="btn btn-outline-dark"
            onClick={() => addItem(product)}
          >
            Add to cart
          </button>
          &nbsp;
          <Link to="/cart">
            <button className="btn btn-dark">Go to cart</button>
          </Link>
          &nbsp;
          <button
            className="btn btn-info"
            onClick={() => history.push("/product")}
          >
            Back to list
          </button>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="container vh-100">
        <div className="row">
          {loading ? <LoadingStill /> : <SingleProduct />}
        </div>
        <br />
        <br />
        <hr />
      </div>
    </>
  );
}

export default ProductDetail;
