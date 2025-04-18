import React, { useState } from "react";
import { Link } from "react-router-dom";
import FaqCategoryList from "./FaqCategoryList";
import FaqQuestionList from "./FaqQuestionList";
import { faqData } from "../../utils/constants/faqData";

const Faq = () => {
  const [activeCategory, setActiveCategory] = useState(1);

  const [expandedQuestions, setExpandedQuestions] = useState([]);

  const toggleQuestion = (questionId) => {
    setExpandedQuestions((prev) =>
      prev.includes(questionId)
        ? prev.filter((id) => id !== questionId)
        : [...prev, questionId]
    );
  };

  const activeQuestions =
    faqData.find((cat) => cat.id === activeCategory)?.questions || [];

  return (
    <>
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <h1 className="p-10 text-center text-4xl font-semibold font-MontRegular rounded-2xl">
          Frequently Asked Questions
        </h1>
        <p className="bg-gray-100 p-5 text-left rounded-2xl font-MontRegular mb-4">
          <b>Tip:</b> You can order quickly and easily through{" "}
          <Link to="/">
            {" "}
            <b>Decorica.com</b>
          </Link>
          , We accept and deliver orders within India and Selected International
          locations. For more Information connect with our Customer Agent. You
          must be at least 13 years old to make a purchase from this site.
        </p>

        <div className="border rounded-lg overflow-hidden">
          <div className="grid md:grid-cols-[1fr,2fr] border-t">
            <div className="border-r">
              {/* <h3 className="sr-only">Categories</h3> */}
              <FaqCategoryList
                categories={faqData}
                activeCategory={activeCategory}
                onSelectCategory={setActiveCategory}
              />
            </div>

            <div className="faq-questions-list">
              <h3 className="sr-only">Questions</h3>
              <FaqQuestionList
                questions={activeQuestions}
                expandedQuestions={expandedQuestions}
                onToggle={toggleQuestion}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
