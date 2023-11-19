"use client";

import React from "react";
import WorkExperience from "./WorkExperience";
import Education from "./Education";

function IndexPage() {
  return (
    <div>
      <div className="flex flex-row px-4">
        <div className="w-1/2 pl-10">
          <WorkExperience />
        </div>
        <div className="w-1/2 ">
          <Education />
        </div>
      </div>
    </div>
  );
}

export default IndexPage;
