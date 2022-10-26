import React from "react";
import campfirecast from "../assets/images/campfirecast.png";
import smorgasbord from "../assets/images/smorgasbord.png";
import octocat from "../assets/images/octocat.png";
import weatherdashboard from "../assets/images/weather-dashboard.png";
import workscheduler from "../assets/images/work-scheduler.png";
import codequiz from "../assets/images/code-quiz.png";

export default function Portfolio() {
  return (
    <>
      <div>
        <h2>Bootcamp Portfolio</h2>
        <p>
          Applications created over the course of a 24-week Full-Stack Developer
          bootcamp. Starter code for several projects provided by the University
          of Oregon.
        </p>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {/* Project 1 */}
        <div className="col">
          <div className="card h-100">
            <img
              src={campfirecast}
              className="card-img-top"
              alt="screenshot of deployed website"
            />
            <div className="card-body">
              <h5 className="card-title">CampFirecast</h5>
              <p className="card-text">
                An interactive website that displays crucial
                weather information to help the user decide if it is safe for
                them to enjoy a campfire
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">HTML, CSS, JavaScript, OpenWeatherMap API, Google Maps API, Skeleton</li>
            </ul>
            <div className="card-footer mx-auto bg-transparent">
              <a
                href="https://github.com/mwjones2186/camp-firecast"
                className="card-link"
              >
                Repository
              </a>
              <a
                href="https://mwjones2186.github.io/camp-firecast/"
                className="card-link"
              >
                Deployment
              </a>
            </div>
          </div>
        </div>
        {/* Project 2 */}
        <div className="col">
          <div className="card h-100">
            <img
              src={smorgasbord}
              className="card-img-top"
              alt="screenshot of deployed website"
            />
            <div className="card-body">
              <h5 className="card-title">Smorgasbord</h5>
              <p className="card-text">
                A food ordering site where you can rate and order your favorite
                dishes
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">HTML, CSS, JavaScript, Node.js, Express.js, Bcrypt, ESLint, Prettier, Handlebars, MySQL, Sequelize, Bootstrap, Heroku, Cloudinary</li>
            </ul>
            <div className="card-footer mx-auto bg-transparent">
              <a
                href="https://github.com/LDagnese/smorgasbord"
                className="card-link"
              >
                Repository
              </a>
              <a
                href="https://sleepy-headland-09400.herokuapp.com"
                className="card-link"
              >
                Deployment
              </a>
            </div>
          </div>
        </div>
        {/* Project 3 */}
        <div className="col">
          <div className="card h-100">
            <img
              src={octocat}
              className="card-img-top"
              alt="screenshot of deployed website"
            />
            <div className="card-body">
              <h5 className="card-title">Octocat: The Last Commit</h5>
              <p className="card-text">
                Top-down game where you play as protagonist Octocat to help save the world of Git.
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">HTML, CSS, JavaScript, React, Node.js, Express.js, Bcrypt, ESLint, Prettier, Bootstrap</li>
            </ul>
            <div className="card-footer mx-auto bg-transparent">
              <a
                href="https://github.com/JereamySmothers/game-thriller"
                className="card-link"
              >
                Repository
              </a>
              <a
                href="https://game-thriller.herokuapp.com"
                className="card-link"
              >
                Deployment
              </a>
            </div>
          </div>
        </div>
        {/* Project 4 */}
        <div className="col">
          <div className="card h-100">
            <img
              src={weatherdashboard}
              className="card-img-top"
              alt="screenshot of deployed website"
            />
            <div className="card-body">
              <h5 className="card-title">Weather Dashboard</h5>
              <p className="card-text">
                A weather outlook application to aid the user in planning upcoming trips based on weather reports
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">HTML, CSS, JavaScript, Bootstrap</li>
            </ul>
            <div className="card-footer mx-auto bg-transparent">
              <a
                href="https://github.com/ezaiger/weather-dashboard"
                className="card-link"
              >
                Repository
              </a>
              <a
                href="https://ezaiger.github.io/weather-dashboard/"
                className="card-link"
              >
                Deployment
              </a>
            </div>
          </div>
        </div>
        {/* Project 5 */}
        <div className="col">
          <div className="card h-100">
            <img
              src={workscheduler}
              className="card-img-top"
              alt="screenshot of deployed website"
            />
            <div className="card-body">
              <h5 className="card-title">Work Day Scheduler</h5>
              <p className="card-text">
                A daily planner where the user can add important events to manage time effectively
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">HTML, CSS, Bootstrap, Google Fonts API, jQuery</li>
            </ul>
            <div className="card-footer mx-auto bg-transparent">
              <a
                href="https://github.com/ezaiger/work-scheduler"
                className="card-link"
              >
                Repository
              </a>
              <a
                href="https://ezaiger.github.io/work-scheduler/"
                className="card-link"
              >
                Deployment
              </a>
            </div>
          </div>
        </div>
        {/* Project 6 */}
        <div className="col">
          <div className="card h-100">
            <img
              src={codequiz}
              className="card-img-top"
              alt="screenshot of deployed website"
            />
            <div className="card-body">
              <h5 className="card-title">Coding Quiz Challenge</h5>
              <p className="card-text">
                A timed quiz on JavaScript fundamentals that stores high scores
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">HTML, CSS, JavaScript</li>
            </ul>
            <div className="card-footer mx-auto bg-transparent">
              <a
                href="https://github.com/ezaiger/code-quiz"
                className="card-link"
              >
                Repository
              </a>
              <a
                href="https://ezaiger.github.io/code-quiz/"
                className="card-link"
              >
                Deployment
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
