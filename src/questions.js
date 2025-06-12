import React, { useState, useEffect } from "react";
const questions = [
  {
    question: "How many moles are present in 11.2 L of methane gas at STP?",
    options: ["0.25", "0.5", "1", "2"],
    answer: "0.5",
    solution: "At STP, 22.4 L = 1 mole. So, 11.2 ÷ 22.4 = 0.5 mole."
  },
  {
    question: "What is the molar mass of H₂SO₄?",
    options: ["98 g/mol", "96 g/mol", "100 g/mol", "102 g/mol"],
    answer: "98 g/mol",
    solution: "H₂ (2) + S (32) + O₄ (64) = 98 g/mol."
  },
  {
    question: "How many moles of oxygen atoms are present in 1 mole of H₂O?",
    options: ["1", "2", "3", "0.5"],
    answer: "1",
    solution: "Each H₂O molecule has 1 oxygen atom → 1 mole H₂O = 1 mole O atoms."
  },
  {
    question: "Mass of 1 atom of carbon-12 is:",
    options: ["12 g", "1 g", "12 amu", "1.99 × 10⁻²³ g"],
    answer: "1.99 × 10⁻²³ g",
    solution: "12 g/mol ÷ Avogadro’s number = 1.99 × 10⁻²³ g."
  },
  {
    question: "Calculate number of molecules in 9g of water.",
    options: ["3.011 × 10²³", "6.022 × 10²³", "1.204 × 10²³", "4.5 × 10²²"],
    answer: "3.011 × 10²³",
    solution: "9g = 0.5 mol; 0.5 × 6.022 × 10²³ = 3.011 × 10²³ molecules."
  },
  {
    question: "Which of the following contains maximum number of atoms?",
    options: ["1 mole of CO₂", "1 mole of H₂", "1 mole of CH₄", "1 mole of C₆H₆"],
    answer: "1 mole of C₆H₆",
    solution: "C₆H₆ has 12 atoms per molecule × Avogadro’s number."
  },
  {
    question: "Volume occupied by 3.01 × 10²³ molecules of N₂ at STP is:",
    options: ["11.2 L", "22.4 L", "5.6 L", "33.6 L"],
    answer: "11.2 L",
    solution: "3.01 × 10²³ = 0.5 mole → 0.5 × 22.4 = 11.2 L."
  },
  {
    question: "What is the number of atoms in 18 g of glucose (C₆H₁₂O₆)?",
    options: ["6.022 × 10²³", "1.204 × 10²⁴", "1.204 × 10²⁵", "6.022 × 10²⁴"],
    answer: "1.204 × 10²⁵",
    solution: "1 mole of glucose = 24 atoms per molecule → 0.1 mole = 0.1 × 24 × 6.022×10²³ = 1.204 × 10²⁵."
  },
  {
    question: "Calculate moles in 12.04 × 10²³ atoms of Mg.",
    options: ["1", "2", "3", "0.5"],
    answer: "2",
    solution: "12.04 × 10²³ ÷ 6.022 × 10²³ = 2 moles."
  },
  {
    question: "Empirical formula of C₆H₁₂O₆ is:",
    options: ["C₆H₁₂O₆", "CH₂O", "C₃H₆O₃", "CHO"],
    answer: "CH₂O",
    solution: "Divide all subscripts by 6: C₆H₁₂O₆ → CH₂O."
  },
  {
    question: "Which has maximum mass?",
    options: ["1 mole of O₂", "1 mole of CO₂", "1 mole of SO₂", "1 mole of CH₄"],
    answer: "1 mole of SO₂",
    solution: "Compare molar masses: SO₂ = 64g > CO₂ = 44g > O₂ = 32g > CH₄ = 16g."
  },
  {
    question: "How many moles of electrons are in 1 coulomb of charge?",
    options: ["1/96500", "96500", "1", "0.5"],
    answer: "1/96500",
    solution: "1 Faraday = 96500 C = 1 mole of electrons → 1 C = 1/96500 mol."
  },
  {
    question: "Which has greater number of particles: 2g H₂ or 32g O₂?",
    options: ["2g H₂", "32g O₂", "Both same", "Cannot determine"],
    answer: "2g H₂",
    solution: "2g H₂ = 1 mol; 32g O₂ = 1 mol; But H₂ has 2 atoms/molecule → more atoms."
  },
  {
    question: "0.1 mole of Na contains how many atoms?",
    options: ["6.022 × 10²²", "6.022 × 10²³", "3.011 × 10²²", "1.2 × 10²³"],
    answer: "6.022 × 10²²",
    solution: "0.1 × 6.022 × 10²³ = 6.022 × 10²² atoms."
  },
  {
    question: "Mass of 0.25 mole of N₂ gas is:",
    options: ["7 g", "14 g", "28 g", "3.5 g"],
    answer: "7 g",
    solution: "Molar mass = 28 g/mol → 0.25 × 28 = 7 g."
  },
  {
    question: "How many ions in 1 mole of NaCl in water?",
    options: ["6.022 × 10²³", "1.204 × 10²⁴", "3.011 × 10²³", "None"],
    answer: "1.204 × 10²⁴",
    solution: "NaCl dissociates into Na⁺ and Cl⁻ → 2 ions × 6.022 × 10²³ = 1.204 × 10²⁴ ions."
  },
  {
    question: "Volume of 0.1 mole of gas at STP is:",
    options: ["2.24 L", "22.4 L", "1.12 L", "11.2 L"],
    answer: "2.24 L",
    solution: "0.1 × 22.4 = 2.24 L."
  },
  {
    question: "Which has greater number of atoms: 16g O₂ or 4g H₂?",
    options: ["O₂", "H₂", "Same", "None"],
    answer: "H₂",
    solution: "O₂: 0.5 mol = 1 mol of atoms; H₂: 2 mol = 4 mol atoms → H₂ has more."
  },
  {
    question: "1 mole of which compound contains 9 moles of atoms?",
    options: ["H₂O", "CH₄", "H₂SO₄", "C₃H₈"],
    answer: "C₃H₈",
    solution: "C₃H₈ = 3C + 8H = 11 atoms per molecule → 11 mol atoms per mol."
  },
  {
    question: "1 mole of Ca(NO₃)₂ contains how many oxygen atoms?",
    options: ["3", "6", "12", "9"],
    answer: "6",
    solution: "Each NO₃⁻ = 3 oxygen atoms, 2 NO₃⁻ = 6 oxygen atoms per molecule."
  }
];

export default questions;
