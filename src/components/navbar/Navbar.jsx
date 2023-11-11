import React from "react";
import LeftArrow from "../leftArrow/LeftArrow";
import RightArrow from "../rightArrow/RightArrow";
import LinkButton from "../linkButton/LinkButton";

function Navbar({ numPages, pageNumber, setPageNumber }) {
  return (
    <div className="p-4 shadow bg-gray-100 fixed w-screen z-20 top-0">
      <div className="flex justify-between ml-8 md:ml-16 lg:ml-16">
        <p className="text-gray-800 flex flex-row">
          Pages
          <LeftArrow link="#page_one" setPageNumber={setPageNumber} />
          <span className="ml-2">{pageNumber}</span>
          <RightArrow link="#page_one" setPageNumber={setPageNumber} />
          <span className="ml-2">of {numPages}</span>
        </p>
        <LinkButton
          href="resume.pdf"
          download="Saikat_Dey_Resume"
          className="text-blue-800 mr-16 hover:text-blue-600"
          buttonText="Download"
        />
      </div>
    </div>
  );
}

export default Navbar;
