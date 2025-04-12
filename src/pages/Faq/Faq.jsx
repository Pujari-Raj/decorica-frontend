import React from "react";
import { Link } from "react-router-dom";

const Faq = () => {
  return (
    <>
      <div className="mx-20 my-10">
        <h1 className="p-10 text-center text-4xl font-semibold font-MontRegular rounded-2xl">
          Frequently Asked Questions
        </h1>
        <p className="bg-gray-100 p-5 text-center rounded-2xl font-MontRegular">
          <b>Tip:</b> You can order quickly and easily through{" "}
          <Link to="/"> <b>Decorica.com</b></Link>, We accept and deliver orders within India and
          Selected International locations. For more Information connect with
          our Customer Agent. You must be at least 13 years old to make a
          purchase from this site.
        </p>
      </div>
    </>
  );
};

export default Faq;
