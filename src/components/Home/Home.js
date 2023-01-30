import React from "react";
//css
import "./Home.css";

function Home() {
  return (
    <div className="card bg-darkest text-dark border-0 card-cover">
      <div className="card-img-overlay d-flex flex-column justify-content-center">
        <div className="container ">
          <h5 className="card-title display-2 fw-bolder mb-3">
            GRAB THE OFFER WITH EXCITING GIFTS
          </h5>
          <p className="card-text display-6 mb-3">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p className="card-text display-8">
            <u className="py-1">
              {" "}
              Offer ends in next 3 days{" "}
              <span>
                <strong>Go, grab</strong>
              </span>
            </u>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
