import React from "react";
import { ChevronDown } from "lucide-react";
import {cn} from '../../utils/constants/globalConstants'

const FaqQuestionList = ({ questions, expandedQuestions, onToggle }) => {
  return (
    <>
      <ul>
        {questions.map((question) => (
          <li key={question.id} className="border-b">
            <button
              className="w-full px-4 py-[0.85rem] text-left flex justify-between items-center hover:bg-gray-50"
              onClick={() => onToggle(question.id)}
              aria-expanded={expandedQuestions.includes(question.id)}
            >
              <span className="text-[#575757] font-MontMedium">
                {question.question}
              </span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 transition-transform duration-500",
                  expandedQuestions.includes(question.id)
                    ? "transform rotate-180"
                    : ""
                )}
              />
            </button>
            {expandedQuestions.includes(question.id) && (
              <div className="px-4 py-[0.85rem] pt-0 font-MontLight text-[#575757]">
                {question.answer}
              </div>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default FaqQuestionList;
