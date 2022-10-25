import React from "react";

export default function Footer() {
  return (
    <>
      <div className="container text-center fixed-bottom">
        <div className="row justify-content-center">
          <div className="col-2">
            <div className="p-3">
              <a href="https://github.com/ezaiger">
                <i className="fa-brands fa-github-alt fa-2x"></i>
              </a>
            </div>
          </div>
          <div className="col-2">
            <div className="p-3">
              <a href="https://www.linkedin.com/in/elisabethzaiger/">
                <i className="fa-brands fa-linkedin-in fa-2x"></i>
              </a>
            </div>
          </div>
          <div className="col-2">
            <div className="p-3">
              <a href="https://elisabethzaiger.com">
                <i className="fa-solid fa-camera-retro fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
