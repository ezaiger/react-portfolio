import React from "react";

export default function Footer() {
  return (
    <>
      <div className="container text-center ">
        <div className="row justify-content-center">
          <div className="col-2">
            <div className="p-3">
              <a href="https://github.com/ezaiger">
                <i className="fa-brands fa-github-alt"></i>
              </a>
            </div>
          </div>
          <div className="col-2">
            <div className="p-3">
              <a href="https://www.linkedin.com/in/elisabethzaiger/">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="col-2">
            <div className="p-3">
              <a href="https://elisabethzaiger.com">
                <i className="fa-solid fa-camera-retro"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
