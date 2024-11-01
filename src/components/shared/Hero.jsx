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



// import React from "react";
// import { Button } from "../ui/button";
// import { NavLink } from "react-router-dom";

// const Hero = () => {
//   return (
//     <div className=" mx-auto px-4 md:px-6 lg:px-8 mt-8 sm:mt-12 md:mt-16 lg:mt-20">
//       <div className="max-w-[90rem] mx-auto">
//         {/* Main heading container */}
//         <div className="text-center md:text-left">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight sm:leading-tight md:leading-tight lg:leading-[92px] tracking-tight">
//             <span className="text-[#f56551] block mb-2 sm:mb-3 md:mb-4">
//               Discover Your Next Adventure with AI:
//             </span>
//             <span className="block">
//               Personalized Itineraries at Your Fingertips
//             </span>
//           </h1>
//         </div>

//         {/* Subheading container */}
//         <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12">
//           <p className="text-base sm:text-lg md:text-xl text-zinc-600 max-w-3xl mx-auto md:mx-0 text-center md:text-left">
//             Your personal trip planner and travel curator, creating custom
//             itineraries tailored to your interests and budget.
//           </p>
//         </div>

//         {/* Button container */}
//         <div className="mt-8 sm:mt-10 md:mt-12 text-center md:text-left">
//           <NavLink to="/create-trip">
//             <Button className="px-6 py-3 text-base sm:text-lg font-medium transition-transform hover:scale-105">
//               Get Started, it's Free
//             </Button>
//           </NavLink>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
