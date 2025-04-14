import React, { useState } from "react";
import { Link } from "react-router-dom";
import FaqCategoryList from "./FaqCategoryList";
import FaqQuestionList from "./FaqQuestionList";

const faqData = [
  {
    id: 1,
    category: "Category-1",
    questions: [
      {
        id: 1,
        question: "How do I place an order?",
        answer:
          "You can place an order by selecting the items you want and proceeding to checkout.",
      },
      {
        id: 2,
        question: "What payment methods do you accept?",
        answer: "We accept credit cards, PayPal, and bank transfers.",
      },
    ],
  },
  {
    id: 2,
    category: "Category-2",
    questions: [
      {
        id: 3,
        question: "How long does shipping take?",
        answer:
          "Shipping typically takes 3-5 business days within the continental US.",
      },
      {
        id: 4,
        question: "Do you ship internationally?",
        answer:
          "Yes, we ship to most countries worldwide. International shipping may take 7-14 business days.",
      },
    ],
  },
  {
    id: 3,
    category: "Category-3",
    questions: [
      {
        id: 5,
        question: "What is your return policy?",
        answer:
          "We offer a 30-day return policy for all unused items in their original packaging.",
      },
      {
        id: 6,
        question: "How do I initiate a return?",
        answer:
          "You can initiate a return by logging into your account and selecting the order you wish to return.",
      },
    ],
  },
  {
    id: 4,
    category: "Category-4",
    questions: [
      {
        id: 7,
        question: "Do you offer assembly services?",
        answer:
          "Yes, we offer assembly services for an additional fee in select locations.",
      },
      {
        id: 8,
        question: "How can I track my order?",
        answer:
          "You can track your order by logging into your account or using the tracking number provided in your shipping confirmation email.",
      },
    ],
  },
];

const Faq = () => {
  const [activeCategory, setActiveCategory] = useState(1);
  console.log("activeCategory-", activeCategory);

  const [expandedQuestions, setExpandedQuestions] = useState([]);
  console.log("expandedQuestions", expandedQuestions);

  const toggleQuestion = (questionId) => {
    setExpandedQuestions((prev) =>
      prev.includes(questionId)
        ? prev.filter((id) => id !== questionId)
        : [...prev, questionId]
    );
  };

  const activeQuestions = faqData.find((cat) => cat.id === activeCategory)?.questions || [];
  console.log("activeQuestions-",activeQuestions);
  

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
