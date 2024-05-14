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
      question: "Os produtos funcionam na perfeição?",
      answer:
        "Todos os nossos dispositivos passam por um rigoroso processo de 52 testes e recondicionamento para assegurar a sua plena funcionalidade.",
    },
    {
      question: "Quero revender os vossos produtos, como faço?",
      answer:
        "Verificar os produtos em stock, anotar o SKU e fazer o pedido de encomenda por email.",
    },
    {
      question:
        "Gostei de um item, quanto tempo demora para receber a encomenda?",
      answer:
        "O tempo de entrega é de 5 dias.",
    },
    {
      question: "Os itens têm garantia?",
      answer:
        "Sim, os itêns têm garantia na legislação em vigor.",
    },
    {
      question: "Enganei-me na cor é possivel trocar?",
      answer:
        "Será contactado a fim de confimar o stock encomendado, no entanto se houver algum engano é possivel efetuar troca do equipamento.",
    },
    {
      question: "O que significa grade A,B,C?",
      answer:
        <span >Excelente - Grau A a melhor qualidade cosmética para um item recondicionado. A aparência do produto é como nova e não há riscos no ecrã <br /> Bom Grau B: os dispositivos apresentam sinais óbvios de uso com ligeiros sinais de desgaste, com alguns riscos no ecrã. <br />Razoavel Grau C: haverá riscos visíveis e defeitos cosméticos moderados.</span>
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
