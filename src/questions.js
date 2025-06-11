import React, { useState, useEffect } from "react";
const questions = [
  {
    question: "What is the SI unit of amount of substance?",
    options: ["Kilogram", "Mole", "Liter", "Gram"],
    answer: "Mole",
  },
  {
    question: "1 mole of any substance contains how many particles?",
    options: [
      "6.022 × 10²²",
      "6.022 × 10²³",
      "3.011 × 10²³",
      "1.602 × 10⁻¹⁹",
    ],
    answer: "6.022 × 10²³",
  },
  {
    question: "Which of the following is not a representative particle?",
    options: ["Atom", "Molecule", "Ion", "Electron"],
    answer: "Electron",
  },
  {
    question: "How many moles are there in 18g of water (H₂O)?",
    options: ["1 mole", "2 moles", "0.5 mole", "18 moles"],
    answer: "1 mole",
  },
  {
    question: "What is the molar mass of NaCl?",
    options: ["58.5 g/mol", "60 g/mol", "54 g/mol", "40 g/mol"],
    answer: "58.5 g/mol",
  },
  {
    question: "22.4 L of any gas at STP contains how many molecules?",
    options: [
      "6.022 × 10²³",
      "3.011 × 10²³",
      "1.204 × 10²³",
      "6.022 × 10²²",
    ],
    answer: "6.022 × 10²³",
  },
  {
    question: "Which of the following has the highest number of atoms?",
    options: [
      "1 mole of H₂",
      "1 mole of O₂",
      "1 mole of H₂O",
      "1 mole of CO₂",
    ],
    answer: "1 mole of H₂O",
  },
  {
    question: "What is Avogadro’s number?",
    options: [
      "6.022 × 10²³ mol⁻¹",
      "1.602 × 10⁻¹⁹ C",
      "3.011 × 10²³ mol⁻¹",
      "9.1 × 10⁻³¹ kg",
    ],
    answer: "6.022 × 10²³ mol⁻¹",
  },
  {
    question: "Which has more molecules: 16g of O₂ or 2g of H₂?",
    options: ["Both have same", "16g O₂", "2g H₂", "Cannot be determined"],
    answer: "2g H₂",
  },
  {
    question: "What is the mass of 0.5 mole of CO₂?",
    options: ["22g", "44g", "11g", "33g"],
    answer: "22g",
  },
  {
    question: "Which gas occupies 44.8 L at STP?",
    options: ["1 mole", "2 moles", "0.5 mole", "4 moles"],
    answer: "2 moles",
  },
  {
    question: "What is the volume occupied by 0.25 mole of a gas at STP?",
    options: ["11.2 L", "5.6 L", "22.4 L", "6.0 L"],
    answer: "5.6 L",
  },
  {
    question: "1 mole of Na contains how many atoms?",
    options: [
      "6.022 × 10²²",
      "1.008 × 10²³",
      "6.022 × 10²³",
      "3.011 × 10²²",
    ],
    answer: "6.022 × 10²³",
  },
  {
    question: "Calculate the number of moles in 36g of water.",
    options: ["2 moles", "1 mole", "1.5 moles", "3 moles"],
    answer: "2 moles",
  },
  {
    question: "Which sample contains the greatest number of atoms?",
    options: [
      "4g of He",
      "12g of C",
      "23g of Na",
      "18g of H₂O",
    ],
    answer: "18g of H₂O",
  },
  {
    question: "Molar volume of a gas at STP is:",
    options: ["22.4 L", "11.2 L", "1.0 L", "44.8 L"],
    answer: "22.4 L",
  },
  {
    question: "How many atoms are in 2 moles of Al?",
    options: [
      "6.022 × 10²³",
      "1.204 × 10²⁴",
      "3.011 × 10²³",
      "2 × 6.022 × 10²²",
    ],
    answer: "1.204 × 10²⁴",
  },
  {
    question: "Number of moles in 4.4g of CO₂ is:",
    options: ["0.1", "0.2", "0.3", "0.5"],
    answer: "0.1",
  },
  {
    question: "What is the empirical formula of a compound with 40% C, 6.7% H, and 53.3% O?",
    options: ["CH₂O", "C₂H₄O₂", "C₃H₆O₃", "CHO"],
    answer: "CH₂O",
  },
  {
    question: "The number of molecules in 1g of hydrogen is:",
    options: [
      "6.022 × 10²³",
      "3.011 × 10²³",
      "1.204 × 10²⁴",
      "2.0 × 10²³",
    ],
    answer: "3.011 × 10²³",
  },
];

export default questions;
