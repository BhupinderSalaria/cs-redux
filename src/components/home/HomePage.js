import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="jumbotron">
      <h1>Coach Seeker </h1>
      <p>We are here to help to find right coach for you !!!</p>
      <Link to="about" className="btn btn-primary">
        About Us
      </Link>
    </div>
  );
}
export default HomePage;
