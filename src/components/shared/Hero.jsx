import React from "react";
import { Button } from "../ui/button";
import { NavLink } from "react-router-dom";
const Hero = () => {
  return (
    <div className="mt-20">
      <div>
        <h1 className="text-6xl font-extrabold gap-9">
          <span className="text-[#f56551] leading-[92px]">
            Discover Your Next Adventure with AI:
          </span>{" "}
          <br /> Personalized Itineraries at Your Fingertips
        </h1>
      </div>
      <div>
        <h1 className="mt-12 text-xl font-normal text-zinc-600">Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.</h1>
      </div>
      <div className="mt-12">
        <NavLink to="/create-trip">
        <Button>Get Started, it's Free</Button>
        </NavLink>
      </div>
    </div>
  );
};

export default Hero;
