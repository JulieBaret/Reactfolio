import uniqid from "uniqid";
import React from "react";

const Badge = ({ technology }) => {
  return (
    <li key={uniqid()}>
      <div className=" bg-light-grey text-black text-sm 2xl:text-base font-medium px-3 py-2 rounded-full">
        {technology}
      </div>
    </li>
  );
};

export default Badge;
