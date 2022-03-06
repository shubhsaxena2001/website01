import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
function Navbar() {
  const [click, setclick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setclick(!click);
  const closeMobileMenu = () => setclick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else setButton(true);
  };

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar" style={{ width: "100%" }}>
        <nav
          style={{ width: "100%" }}
          class="navbar navbar-expand-lg navbar-light bg-light"
        >
          <div class="container-fluid">
            <Link class="navbar-brand" to="/">
              Travel
              <i class="fab fa-typo3"></i>
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="nav-link active"
                    aria-current="page"
                    to="/services"
                  >
                    services
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="nav-link active"
                    aria-current="page"
                    to="/products"
                  >
                    Products
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="nav-link active"
                    aria-current="page"
                    to="/sign-up"
                  >
                    sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </nav>
    </>
  );
}
export default Navbar;
