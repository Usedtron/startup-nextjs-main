"use client";
import React, { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqData = [
    {
      question: "Quero revender os vossos produtos, como faço?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.",
    },
    {
      question:
        "Gostei de um item, quanto tempo demora para receber a encomenda?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.",
    },
    {
      question: "Os itens têm garantia?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.",
    },
    {
      question: "Enganei-me na cor é possivel trocar?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.",
    },
    {
      question: "O que significa grade A,B,C?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.",
    },
  ];

  return (
    <section className="relative z-10 bg-white py-16 dark:bg-bg-color-dark md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Perguntas Frequentes"
          paragraph="Encontre respostas para as perguntas mais comuns"
          center
        />

        <div className="flex flex-col items-center">
          {faqData.map((faq, index) => (
            <div key={index} className="w-full max-w-lg">
              <div
                className="mb-2 cursor-pointer rounded-md bg-white px-6 py-4 shadow-md transition duration-300 ease-in-out"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-lg font-semibold text-black">
                  {faq.question}
                </h3>
              </div>
              {activeIndex === index && (
                <div className="mb-2 rounded-md bg-gray-200 px-6 py-4 shadow-md transition duration-300 ease-in-out">
                  <p className="text-gray-800">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
