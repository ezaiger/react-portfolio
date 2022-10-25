import React from "react";
import horiseon from "../assets/images/horiseon-site.png";

export default function Portfolio() {
  return (
    <>
      <div>
        <h2>Portfolio</h2>
        <p>
          Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula.
          Curabitur pellentesque turpis sit amet eros iaculis, a mollis arcu
          dictum. Ut vel ante eget massa ornare placerat. Etiam nisl orci,
          finibus sodales volutpat et, hendrerit ut dolor. Suspendisse porta
          dictum nunc, sed pretium risus rutrum eget. Nam consequat, ligula in
          faucibus vestibulum, nisi justo laoreet risus, luctus luctus mi lacus
          sit amet libero. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Mauris pretium condimentum
          tellus eget lobortis. Interdum et malesuada fames ac ante ipsum primis
          in faucibus. Donec placerat accumsan mi, ut congue neque placerat eu.
          Donec nec ipsum in velit pellentesque vehicula sit amet at augue.
          Maecenas aliquam bibendum congue. Pellentesque semper, lectus non
          ullamcorper iaculis, est ligula suscipit velit, sed bibendum turpis
          dui in sapien.
        </p>
      </div>
      <div className="card">
        <img src={horiseon} className="card-img-top" alt="screenshot of deployed website" />
        <div className="card-body">
          <h5 className="card-title">Horiseon</h5>
          <p className="card-text">
            A marketing agency website with a codebase that follows
            accessibility standards and is optimized for search engines
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">HTML, CSS</li>
        </ul>
        <div className="card-body">
          <a href="https://github.com/ezaiger/hori-seo" className="card-link">
            Repository
          </a>
          <a href="https://ezaiger.github.io/hori-seo/" className="card-link">
            Deployment
          </a>
        </div>
      </div>
    </>
  );
}
