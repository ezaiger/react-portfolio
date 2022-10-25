import React from "react";
import ezaiger from "../assets/images/Ezaiger.jpg";

export default function About() {
  return (
    <div>
      <h2>About</h2>
      <img
        src={ezaiger}
        className="img-thumbnail"
        alt="Elisabeth wearing a purple jacket"
      ></img>
      <p className="py-1">
        My name is Elisabeth and I was born and raised throughout Oregon. I
        graduated from Southern Oregon University with dual degrees:{" "}
        <em>Bachelor of Science in Emerging Digital Media</em> and{" "}
        <em>Bachelor of Fine Arts in Studio Art</em> with a photography,
        illustration and graphic design emphasis. In addition to my degrees, I
        dual minored in <em>Art History</em> and{" "}
        <em>Film, Television, and Convergent Media</em>. I consider myself a
        multipotentialite and am drawn to the fields of graphic design,
        photography, software development, interior design, professional
        organizing and entrepreneurship.
      </p>
      <p>
        My career objective is to utilize my strengths, be creative and feel challenged
        in whatever role I am designated. I am an organized, communicative and
        detail-oriented coder who contributed to past projects by finding ways
        to streamline coding. For example, I created the wireframe and organized
        the Kanban board in every group project I was a member of. While I am
        able to work well as a team, it is vital for me to know my own roles and
        responsibilities in order to thrive when I work independently. Thus, I
        worked diligently to make tickets and comments in my code detailed for
        my teammates and other developers to review and easily comprehend to
        allow easier integration when code was eventually merged. In my previous
        occupations, I was no stranger to adapting to new programs, policies or
        procedures. Being in a coding bootcamp allowed me to experience
        first-hand how technology is constantly changing and evolving. I am
        excited to grow as a developer and be challenged by this ever-evolving
        field and build confidence in my abilities through self-study and
        on-the-job experience.
      </p>
    </div>
  );
}
