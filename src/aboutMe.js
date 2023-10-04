import React, { Component } from "react";
import "./main.css";
import cat from "./images/cat.jpg";

class AboutMe extends Component {
  render() {
    return (
      <div className="text-white mb-20 text-left" id="section_2">
        <div className="flex flex-row space-x-2">
          <div className="w-4/6">
            <h2 className="text-6xl text-yellow-200">ABOUT ME</h2>
            <h3 className="text-4xl">It's Me, Hi</h3>
            <div className="text-3xl">
              <p className="mb-5">
                I'm a software engineer based out of <b>Toronto, ON</b> with a
                passion for tech. My mission is to use my passion for problem
                solving and science, and contribute to solving problems in our
                day and age.
              </p>
              <p className="mb-5">
                My background is in physics and mechanical engineering but my
                love for software and apathy for boredom led me to the land of
                1's and 0's. I excel in working with multi-disciplinary teams to
                bridge the gap between hardware and software.
              </p>
              <p>
                In my spare time, I make cool cocktails, work on fun side
                projects, and give my cat <b>Oni</b> lots of pets. I accept
                monetary donations, but only in Monopoly money. Link{" "}
                <b>
                  <a
                    href="https://youtu.be/dQw4w9WgXcQ?si=vXbfW4Nf_2WRcTeP"
                    target="_blank"
                    rel="noreferrer"
                  >
                    here
                  </a>
                </b>{" "}
                to donate!
              </p>
            </div>
          </div>
          <div className="flex w-2/6 justify-center items-center">
            <img src={cat} alt=""></img>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
