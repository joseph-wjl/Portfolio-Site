// import React from 'react';
// import './Nav.css';
// import VariableFontHoverByRandomLetter from "@/fancy/components/text/variable-font-hover-by-random-letter";

// export default function Nav() {
//     const scrollToContact = () => {
//         const contactSection = document.getElementById('contact-section');
//         if (contactSection) {
//             contactSection.scrollIntoView({ behavior: 'smooth' });
//         }
//     };

//     return (
//         <>
//             <nav>
//                 <ul className='nav-list'>
//                     <li className='nav-item'>About Me</li>
//                     <li className='nav-item'>Projects</li>
//                     <li className='nav-item'>Resume</li>
//                     <li className='nav-item' onClick={scrollToContact}>Contact</li>
//                 </ul>
//             </nav>
//         </>
//     )
// }

import React from "react";
import "./Nav.css";
import VariableFontHoverByRandomLetter from "@/fancy/components/text/variable-font-hover-by-random-letter";

export default function Nav() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav>
      <ul className="nav-list">
        <li className="nav-item">
          <VariableFontHoverByRandomLetter
            label="About Me"
            fromFontVariationSettings="'wght' 400, 'slnt' 0"
            toFontVariationSettings="'wght' 900, 'slnt' 0"
            className="cursor-pointer"
          />
        </li>
        <li className="nav-item">
          <VariableFontHoverByRandomLetter
            label="Projects"
            fromFontVariationSettings="'wght' 400, 'slnt' 0"
            toFontVariationSettings="'wght' 900, 'slnt' 0"
            className="cursor-pointer"
          />
        </li>
        <li className="nav-item">
          <VariableFontHoverByRandomLetter
            label="Resume"
            fromFontVariationSettings="'wght' 400, 'slnt' 0"
            toFontVariationSettings="'wght' 900, 'slnt' 0"
            className="cursor-pointer"
          />
        </li>
        <li className="nav-item" onClick={scrollToContact}>
          <VariableFontHoverByRandomLetter
            label="Contact"
            fromFontVariationSettings="'wght' 400, 'slnt' 0"
            toFontVariationSettings="'wght' 900, 'slnt' 0"
            className="cursor-pointer"
          />
        </li>
      </ul>
    </nav>
  );
}