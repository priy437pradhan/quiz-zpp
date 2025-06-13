import React, { useState, useEffect } from "react";
const questions = [
  {
    question: "What is a defining feature of eukaryotic cells?",
    options: ["Lack of nucleus", "Presence of nucleus", "Circular DNA", "No membrane-bound organelles"],
    answer: "Presence of nucleus",
    solution: "Eukaryotic cells are characterized by a true nucleus enclosed within a nuclear membrane."
  },
  {
    question: "Which of the following is not found in eukaryotic cells?",
    options: ["Mitochondria", "Golgi apparatus", "Plasmid", "Endoplasmic reticulum"],
    answer: "Plasmid",
    solution: "Plasmids are typically found in prokaryotes, not eukaryotic cells."
  },
  {
    question: "Which organelle is known as the 'powerhouse of the cell'?",
    options: ["Nucleus", "Ribosome", "Mitochondria", "Lysosome"],
    answer: "Mitochondria",
    solution: "Mitochondria generate most of the cell's ATP through respiration."
  },
  {
    question: "The plasma membrane is primarily composed of:",
    options: ["Proteins and sugars", "Phospholipids and proteins", "Carbohydrates and DNA", "Cholesterol and nucleic acids"],
    answer: "Phospholipids and proteins",
    solution: "The plasma membrane consists mainly of a phospholipid bilayer embedded with proteins."
  },
  {
    question: "Which molecule helps maintain fluidity of the cell membrane?",
    options: ["Glucose", "Cholesterol", "DNA", "ATP"],
    answer: "Cholesterol",
    solution: "Cholesterol is interspersed within the membrane to prevent rigidity at low temperatures."
  },
  {
    question: "Which organelle is responsible for packaging and modifying proteins?",
    options: ["Nucleus", "Ribosome", "Golgi apparatus", "Mitochondria"],
    answer: "Golgi apparatus",
    solution: "The Golgi apparatus modifies, sorts, and packages proteins for secretion or use inside the cell."
  },
  {
    question: "Which structure is found in plant cells but not in animal cells?",
    options: ["Lysosomes", "Mitochondria", "Cell wall", "Ribosomes"],
    answer: "Cell wall",
    solution: "Plant cells have a rigid cell wall made of cellulose, absent in animal cells."
  },
  {
    question: "Which process allows oxygen to passively cross the plasma membrane?",
    options: ["Osmosis", "Active transport", "Facilitated diffusion", "Simple diffusion"],
    answer: "Simple diffusion",
    solution: "Oxygen diffuses directly through the phospholipid bilayer down its concentration gradient."
  },
  {
    question: "Which part of the cell is semi-permeable and controls entry and exit of substances?",
    options: ["Nuclear membrane", "Cell wall", "Plasma membrane", "Cytoplasm"],
    answer: "Plasma membrane",
    solution: "The plasma membrane selectively allows materials to enter or leave the cell."
  },
  {
    question: "Which of the following is a function of membrane proteins?",
    options: ["DNA replication", "Protein synthesis", "Transport and signaling", "Cell division"],
    answer: "Transport and signaling",
    solution: "Membrane proteins help in transport of molecules and signal transduction."
  },
  {
    question: "Which type of transport requires ATP?",
    options: ["Osmosis", "Facilitated diffusion", "Active transport", "Simple diffusion"],
    answer: "Active transport",
    solution: "Active transport moves molecules against the gradient and requires ATP."
  },
  {
    question: "What gives the cell membrane its fluidity?",
    options: ["Proteins", "Lipids", "Cholesterol", "Carbohydrates"],
    answer: "Lipids",
    solution: "The phospholipid bilayer provides flexibility and fluid nature to the membrane."
  },
  {
    question: "Which part of the phospholipid is hydrophobic?",
    options: ["Phosphate head", "Glycerol", "Fatty acid tails", "Carbohydrate chain"],
    answer: "Fatty acid tails",
    solution: "The nonpolar fatty acid tails face inward, away from water, making them hydrophobic."
  },
  {
    question: "Which statement is true for eukaryotic DNA?",
    options: ["It is circular", "It is in cytoplasm", "It is found in nucleus", "It lacks histones"],
    answer: "It is found in nucleus",
    solution: "Eukaryotic DNA is linear and located inside the membrane-bound nucleus."
  },
  {
    question: "Endocytosis is the process by which cells:",
    options: ["Release waste", "Take in water", "Engulf materials", "Produce ATP"],
    answer: "Engulf materials",
    solution: "Endocytosis allows the cell to engulf external substances via vesicle formation."
  },
  {
    question: "Which of the following structures is responsible for protein synthesis?",
    options: ["Golgi body", "Ribosome", "Lysosome", "Mitochondrion"],
    answer: "Ribosome",
    solution: "Ribosomes are the site of translation, assembling amino acids into proteins."
  },
  {
    question: "Which membrane-bound organelle contains its own DNA?",
    options: ["Lysosome", "Nucleus", "Mitochondria", "Golgi apparatus"],
    answer: "Mitochondria",
    solution: "Mitochondria have their own circular DNA and can self-replicate."
  },
  {
    question: "What is the main function of the lysosome?",
    options: ["Energy production", "Protein synthesis", "Digestion of waste", "Transport of materials"],
    answer: "Digestion of waste",
    solution: "Lysosomes contain hydrolytic enzymes that break down cellular debris."
  },
  {
    question: "Which component gives structural support to eukaryotic cells?",
    options: ["Cytosol", "Endoplasmic reticulum", "Cytoskeleton", "Nucleolus"],
    answer: "Cytoskeleton",
    solution: "The cytoskeleton is a network of protein filaments that maintains cell shape and aids movement."
  },
  {
    question: "What is the function of glycoproteins on the plasma membrane?",
    options: ["Energy storage", "Enzyme activity", "Cell recognition", "DNA synthesis"],
    answer: "Cell recognition",
    solution: "Glycoproteins act as markers for cell identity and immune response."
  }
];

export default questions;
