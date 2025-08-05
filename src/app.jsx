import React, { useState, useEffect } from "react";
const questions = [
  {
  question: "1 mole of any substance contains:",
  options: [
    "6.022 × 10²³ particles",
    "1 gram of atoms",
    "Atomic number of atoms",
    "None of these"
  ],
  answer: "6.022 × 10²³ particles",
  solution: "1 mole = Avogadro’s number of particles = 6.022 × 10²³"
},
{
  question: "What is the mass of 1 mole of water (H₂O)?",
  options: [
    "16 g",
    "18 g",
    "10 g",
    "20 g"
  ],
  answer: "18 g",
  solution: "Molar mass of H₂O = (2×1) + (1×16) = 18 g/mol"
},
{
  question: "How many moles are present in 44 g of CO₂?",
  options: [
    "2 moles",
    "1 mole",
    "0.5 mole",
    "4 moles"
  ],
  answer: "1 mole",
  solution: "Molar mass of CO₂ = 12 + (2×16) = 44 g/mol, so 44 g = 1 mole"
},
{
  question: "Number of molecules in 2 moles of NH₃ is:",
  options: [
    "6.022 × 10²³",
    "1.2044 × 10²⁴",
    "2 × 10²³",
    "3.011 × 10²³"
  ],
  answer: "1.2044 × 10²⁴",
  solution: "2 moles × 6.022 × 10²³ molecules/mole = 1.2044 × 10²⁴"
},
{
  question: "Which of the following has the highest number of atoms?",
  options: [
    "1 mole of H₂",
    "1 mole of O₂",
    "1 mole of H₂O",
    "1 mole of Na"
  ],
  answer: "1 mole of H₂O",
  solution: "H₂O has 3 atoms per molecule; 1 mole of H₂O has 3 × 6.022 × 10²³ atoms"
},
{
  question: "What is the molar mass of NaCl?",
  options: [
    "58.5 g/mol",
    "23 g/mol",
    "35.5 g/mol",
    "60 g/mol"
  ],
  answer: "58.5 g/mol",
  solution: "Na = 23, Cl = 35.5 → 23 + 35.5 = 58.5 g/mol"
},
{
  question: "How many moles are there in 12.04 × 10²³ molecules of O₂?",
  options: [
    "1 mole",
    "2 moles",
    "0.5 mole",
    "3 moles"
  ],
  answer: "2 moles",
  solution: "Number of moles = (12.04 × 10²³) ÷ (6.022 × 10²³) = 2"
},
{
  question: "Which of the following represents 1 mole?",
  options: [
    "6.022 × 10²³ atoms of carbon",
    "12 g of carbon-12",
    "22.4 L of CO₂ at STP",
    "All of these"
  ],
  answer: "All of these",
  solution: "All are standard mole representations under defined conditions"
},
{
  question: "22.4 L of any gas at STP contains:",
  options: [
    "1 mole of gas",
    "6.022 × 10²³ atoms",
    "Molar mass of gas in grams",
    "Both 1 and 3"
  ],
  answer: "Both 1 and 3",
  solution: "At STP, 22.4 L = 1 mole = molar mass in grams for the gas"
},
{
  question: "Number of atoms in 1 mole of helium gas is:",
  options: [
    "6.022 × 10²³",
    "3.011 × 10²³",
    "1.2044 × 10²⁴",
    "12.044 × 10²³"
  ],
  answer: "6.022 × 10²³",
  solution: "Helium is monoatomic; so 1 mole = 6.022 × 10²³ atoms"
},
{
  question: "Molar volume of a gas at STP is:",
  options: [
    "22.4 mL",
    "22.4 L",
    "224 L",
    "2.24 L"
  ],
  answer: "22.4 L",
  solution: "At STP, 1 mole of any gas occupies 22.4 liters"
},
{
  question: "The number of moles in 4 g of H₂ is:",
  options: [
    "2",
    "1",
    "0.5",
    "4"
  ],
  answer: "2",
  solution: "Molar mass of H₂ = 2 g/mol → 4 g ÷ 2 g/mol = 2 moles"
},
{
  question: "1 mole of calcium chloride (CaCl₂) contains:",
  options: [
    "3 moles of ions",
    "2 moles of ions",
    "1 mole of Ca²⁺",
    "Both 1 and 3"
  ],
  answer: "Both 1 and 3",
  solution: "CaCl₂ → Ca²⁺ + 2Cl⁻ → 3 moles of ions in total"
},
{
  question: "Avogadro’s number is:",
  options: [
    "6.022 × 10²³",
    "3.011 × 10²³",
    "1.204 × 10²⁴",
    "6.022 × 10²²"
  ],
  answer: "6.022 × 10²³",
  solution: "Avogadro’s number = number of particles in 1 mole = 6.022 × 10²³"
},
{
  question: "Mass of 0.5 mole of O₂ gas is:",
  options: [
    "8 g",
    "16 g",
    "32 g",
    "0.5 g"
  ],
  answer: "16 g",
  solution: "Molar mass of O₂ = 32 g/mol → 0.5 × 32 = 16 g"
},
{
  question: "Atomic mass is defined as the mass of an atom compared to:",
  options: [
    "1 mole of carbon",
    "1 atom of oxygen",
    "1/12th of carbon-12 atom",
    "1 atom of hydrogen"
  ],
  answer: "1/12th of carbon-12 atom",
  solution: "Atomic mass is relative and defined based on 1/12th the mass of a carbon-12 atom."
},
{
  question: "The atomic mass of oxygen is approximately:",
  options: [
    "12 u",
    "16 u",
    "14 u",
    "18 u"
  ],
  answer: "16 u",
  solution: "Oxygen has an approximate atomic mass of 16 atomic mass units (u)."
},
{
  question: "What is the atomic mass of carbon?",
  options: [
    "14 u",
    "16 u",
    "12 u",
    "18 u"
  ],
  answer: "12 u",
  solution: "Carbon has an atomic mass of 12 u (based on carbon-12 isotope)."
},
{
  question: "Which of the following has the lowest atomic mass?",
  options: [
    "Oxygen",
    "Nitrogen",
    "Hydrogen",
    "Carbon"
  ],
  answer: "Hydrogen",
  solution: "Hydrogen is the lightest element with atomic mass ≈ 1 u."
},
{
  question: "1 atomic mass unit (u) is equal to:",
  options: [
    "1 gram",
    "1.66 × 10⁻²⁴ g",
    "6.022 × 10²³ g",
    "12 g"
  ],
  answer: "1.66 × 10⁻²⁴ g",
  solution: "1 u = 1.66 × 10⁻²⁴ grams"
},
{
  question: "Atomic mass is expressed in:",
  options: [
    "Kilograms",
    "Grams",
    "Atomic mass units (u)",
    "Moles"
  ],
  answer: "Atomic mass units (u)",
  solution: "Atomic mass is measured in atomic mass units (u)."
},
{
  question: "The atomic mass of chlorine is approximately 35.5 u. What does this indicate?",
  options: [
    "Chlorine is made of only one isotope",
    "It is an average of isotopes",
    "Atomic mass is incorrect",
    "None of the above"
  ],
  answer: "It is an average of isotopes",
  solution: "Chlorine exists mainly as Cl-35 and Cl-37, hence average atomic mass is 35.5 u."
},
{
  question: "Which element has an atomic mass close to 4 u?",
  options: [
    "Hydrogen",
    "Helium",
    "Lithium",
    "Beryllium"
  ],
  answer: "Helium",
  solution: "Helium has an atomic mass of approximately 4 u."
},
{
  question: "Which of the following elements has fractional atomic mass?",
  options: [
    "Oxygen",
    "Chlorine",
    "Hydrogen",
    "Sodium"
  ],
  answer: "Chlorine",
  solution: "Due to isotopes, Chlorine has a fractional atomic mass of 35.5 u."
},
{
  question: "The mass of 1 atom of oxygen is approximately:",
  options: [
    "16 g",
    "16 u",
    "1.66 × 10⁻²³ g",
    "2.66 × 10⁻²³ g"
  ],
  answer: "2.66 × 10⁻²³ g",
  solution: "16 u × 1.66 × 10⁻²⁴ g = 2.66 × 10⁻²³ g"
},
{
  question: "Atomic mass is mainly due to the mass of:",
  options: [
    "Electrons",
    "Protons and neutrons",
    "Only protons",
    "Only neutrons"
  ],
  answer: "Protons and neutrons",
  solution: "Electrons are very light; atomic mass comes from protons + neutrons."
},
{
  question: "What is the atomic mass of sodium (Na)?",
  options: [
    "23 u",
    "35.5 u",
    "12 u",
    "16 u"
  ],
  answer: "23 u",
  solution: "Sodium has atomic mass of 23 u."
},
{
  question: "What is the mass of one carbon atom in grams?",
  options: [
    "12 g",
    "1.99 × 10⁻²³ g",
    "2.00 × 10⁻²³ g",
    "12 × 10⁻²⁴ g"
  ],
  answer: "1.99 × 10⁻²³ g",
  solution: "12 u × 1.66 × 10⁻²⁴ g = 1.99 × 10⁻²³ g"
},
{
  question: "Which element has atomic mass approximately 1 u?",
  options: [
    "Carbon",
    "Oxygen",
    "Hydrogen",
    "Nitrogen"
  ],
  answer: "Hydrogen",
  solution: "Hydrogen is the lightest element with atomic mass nearly 1 u."
},
{
  question: "Atomic mass of an element is calculated based on:",
  options: [
    "Its density",
    "Its isotopes and their abundances",
    "Its volume",
    "Its charge"
  ],
  answer: "Its isotopes and their abundances",
  solution: "Average atomic mass considers all isotopes weighted by their abundance."
},
{
  question: "Which of the following is a fundamental quantity?",
  options: [
    "Force",
    "Velocity",
    "Mass",
    "Work"
  ],
  answer: "Mass",
  solution: "Mass is a base or fundamental quantity in physics."
},
{
  question: "What is the dimensional formula of force?",
  options: [
    "MLT⁻²",
    "ML²T⁻²",
    "ML⁻¹T²",
    "MLT"
  ],
  answer: "MLT⁻²",
  solution: "Force = mass × acceleration = M × LT⁻² = MLT⁻²"
},
{
  question: "Which of the following is not a derived unit?",
  options: [
    "Newton",
    "Joule",
    "Kilogram",
    "Watt"
  ],
  answer: "Kilogram",
  solution: "Kilogram is a fundamental SI unit of mass; others are derived."
},
{
  question: "The SI unit of pressure is:",
  options: [
    "Newton",
    "Pascal",
    "Joule",
    "Watt"
  ],
  answer: "Pascal",
  solution: "Pressure = Force/Area = N/m² = Pascal"
},
{
  question: "Dimension of work is:",
  options: [
    "MLT⁻²",
    "ML²T⁻²",
    "ML²T⁻¹",
    "MLT⁻¹"
  ],
  answer: "ML²T⁻²",
  solution: "Work = Force × distance = MLT⁻² × L = ML²T⁻²"
},
{
  question: "Which of the following has same dimensions as energy?",
  options: [
    "Work",
    "Power",
    "Momentum",
    "Force"
  ],
  answer: "Work",
  solution: "Work and energy have the same dimensions: ML²T⁻²"
},
{
  question: "What is the dimensional formula of velocity?",
  options: [
    "LT⁻²",
    "LT⁻¹",
    "L²T⁻²",
    "MLT⁻¹"
  ],
  answer: "LT⁻¹",
  solution: "Velocity = distance/time = L/T = LT⁻¹"
},
{
  question: "Which of the following is dimensionless?",
  options: [
    "Strain",
    "Force",
    "Speed",
    "Work"
  ],
  answer: "Strain",
  solution: "Strain = change in length / original length → no unit, no dimension"
},
{
  question: "Planck’s constant has the dimension of:",
  options: [
    "Energy",
    "Momentum",
    "Angular momentum",
    "Force"
  ],
  answer: "Angular momentum",
  solution: "Planck’s constant has dimensions of ML²T⁻¹"
},
{
  question: "What is the unit of power in SI system?",
  options: [
    "Joule",
    "Watt",
    "Newton",
    "Erg"
  ],
  answer: "Watt",
  solution: "Power = Work/Time → SI unit = Joule/second = Watt"
},
{
  question: "Which one of these physical quantities has the dimension [ML⁻³]?",
  options: [
    "Pressure",
    "Density",
    "Acceleration",
    "Energy"
  ],
  answer: "Density",
  solution: "Density = Mass/Volume → M/L³ = ML⁻³"
},
{
  question: "The dimensional formula of pressure is:",
  options: [
    "ML⁻¹T⁻²",
    "MLT⁻²",
    "ML²T⁻²",
    "MT⁻²"
  ],
  answer: "ML⁻¹T⁻²",
  solution: "Pressure = Force/Area = (MLT⁻²)/L² = ML⁻¹T⁻²"
},
{
  question: "Which of the following pairs have same dimensions?",
  options: [
    "Work and Energy",
    "Power and Energy",
    "Force and Work",
    "Force and Momentum"
  ],
  answer: "Work and Energy",
  solution: "Both have the same dimensional formula: ML²T⁻²"
},
{
  question: "Dimensional formula of impulse is:",
  options: [
    "MLT⁻²",
    "ML²T⁻²",
    "MLT⁻¹",
    "ML²T⁻¹"
  ],
  answer: "MLT⁻¹",
  solution: "Impulse = Force × time → MLT⁻² × T = MLT⁻¹"
},
{
  question: "The unit of gravitational constant G in SI system is:",
  options: [
    "Nm²/kg²",
    "Nm/kg",
    "N/kg²",
    "N/kg²m²"
  ],
  answer: "Nm²/kg²",
  solution: "From F = G(m₁m₂)/r² → G = Fr²/m₁m₂ → Nm²/kg²"
},
{
  question: "Which of the following quantities remains constant in projectile motion (neglecting air resistance)?",
  options: [
    "Vertical velocity",
    "Horizontal velocity",
    "Acceleration in vertical direction",
    "Both B and C"
  ],
  answer: "Both B and C",
  solution: "Horizontal velocity is constant, and vertical acceleration is constant at g downward."
},
{
  question: "The path followed by a projectile is:",
  options: [
    "Straight line",
    "Circular",
    "Parabolic",
    "Elliptical"
  ],
  answer: "Parabolic",
  solution: "Projectile motion follows a parabolic trajectory under uniform gravity."
},
{
  question: "At the highest point of a projectile’s trajectory, the vertical component of velocity is:",
  options: [
    "Maximum",
    "Zero",
    "Equal to initial vertical velocity",
    "Equal to horizontal velocity"
  ],
  answer: "Zero",
  solution: "At the highest point, vertical velocity becomes zero momentarily."
},
{
  question: "If the horizontal range and maximum height of a projectile are equal, the angle of projection is:",
  options: [
    "30°",
    "45°",
    "60°",
    "76°"
  ],
  answer: "76°",
  solution: "Range = Height → Use formula: H = R tanθ / 4 → tanθ = 4 → θ ≈ 76°"
},
{
  question: "The horizontal range of a projectile is maximum when angle of projection is:",
  options: [
    "30°",
    "60°",
    "90°",
    "45°"
  ],
  answer: "45°",
  solution: "Maximum range occurs at 45° when R = (u²sin2θ)/g is maximum."
},
{
  question: "Which of the following is a vector quantity?",
  options: [
    "Speed",
    "Distance",
    "Displacement",
    "Work"
  ],
  answer: "Displacement",
  solution: "Displacement has both magnitude and direction; it’s a vector."
},
{
  question: "Which component of velocity changes during projectile motion?",
  options: [
    "Horizontal",
    "Vertical",
    "Both",
    "None"
  ],
  answer: "Vertical",
  solution: "Gravity acts vertically, changing the vertical component of velocity."
},
{
  question: "Time of flight of a projectile depends on:",
  options: [
    "Horizontal velocity only",
    "Vertical velocity only",
    "Both velocities",
    "Initial speed only"
  ],
  answer: "Vertical velocity only",
  solution: "Time of flight = (2u sinθ)/g → depends on vertical component of velocity."
},
{
  question: "The range of a projectile is independent of:",
  options: [
    "Initial speed",
    "Angle of projection",
    "Acceleration due to gravity",
    "Mass of the object"
  ],
  answer: "Mass of the object",
  solution: "Projectile motion is independent of mass (neglecting air resistance)."
},
{
  question: "In uniform circular motion, the direction of velocity is:",
  options: [
    "Radial",
    "Tangential",
    "Perpendicular to tangent",
    "Towards center"
  ],
  answer: "Tangential",
  solution: "Velocity is always along the tangent to the path in circular motion."
},
{
  question: "Centripetal acceleration in circular motion is directed:",
  options: [
    "Away from the center",
    "Along the tangent",
    "Towards the center",
    "Along the axis"
  ],
  answer: "Towards the center",
  solution: "Centripetal acceleration always acts radially inward toward the center."
},
{
  question: "A particle is projected at an angle θ with horizontal. The horizontal range is given by:",
  options: [
    "R = (u²sin²θ)/g",
    "R = (u²cos²θ)/g",
    "R = (u²sin2θ)/g",
    "R = (u²tanθ)/g"
  ],
  answer: "R = (u²sin2θ)/g",
  solution: "Range = (u²sin2θ)/g is the standard formula for projectile motion."
},
{
  question: "In 2D motion, total displacement is given by:",
  options: [
    "x + y",
    "√(x² + y²)",
    "x - y",
    "x × y"
  ],
  answer: "√(x² + y²)",
  solution: "Displacement is the vector sum of x and y components."
},
{
  question: "If a projectile is fired horizontally, the time to hit the ground depends on:",
  options: [
    "Horizontal velocity",
    "Height from which it is fired",
    "Mass of projectile",
    "Air resistance"
  ],
  answer: "Height from which it is fired",
  solution: "Time depends only on vertical motion → h = ½gt²"
},
{
  question: "Unit vector in the direction of vector A is given by:",
  options: [
    "A",
    "A/|A|",
    "|A|/A",
    "1/A²"
  ],
  answer: "A/|A|",
  solution: "Unit vector = vector divided by its magnitude = A/|A|"
},
{
  question: "Cell division in somatic cells occurs through:",
  options: [
    "Meiosis",
    "Binary fission",
    "Mitosis",
    "Budding"
  ],
  answer: "Mitosis",
  solution: "Somatic (body) cells divide by mitosis to produce identical daughter cells."
},
{
  question: "Which phase of mitosis involves alignment of chromosomes at the equator?",
  options: [
    "Prophase",
    "Metaphase",
    "Anaphase",
    "Telophase"
  ],
  answer: "Metaphase",
  solution: "In metaphase, chromosomes align at the cell’s equatorial plane."
},
{
  question: "Meiosis results in:",
  options: [
    "Two diploid cells",
    "Four diploid cells",
    "Four haploid cells",
    "Two haploid cells"
  ],
  answer: "Four haploid cells",
  solution: "Meiosis produces four genetically different haploid gametes."
},
{
  question: "During which phase of the cell cycle does DNA replication occur?",
  options: [
    "G1 phase",
    "G2 phase",
    "S phase",
    "M phase"
  ],
  answer: "S phase",
  solution: "S phase (synthesis phase) is when DNA replication occurs in the interphase."
},
{
  question: "Crossing over takes place during:",
  options: [
    "Metaphase I",
    "Prophase I",
    "Anaphase I",
    "Telophase I"
  ],
  answer: "Prophase I",
  solution: "Crossing over (exchange of genetic material) occurs in Prophase I of meiosis."
},
{
  question: "Which of the following is not a part of mitosis?",
  options: [
    "Prophase",
    "Metaphase",
    "Interphase",
    "Anaphase"
  ],
  answer: "Interphase",
  solution: "Interphase is the phase between divisions, not part of mitosis itself."
},
{
  question: "Cytokinesis is:",
  options: [
    "Division of nucleus",
    "Division of cytoplasm",
    "Formation of chromosomes",
    "Duplication of centrioles"
  ],
  answer: "Division of cytoplasm",
  solution: "Cytokinesis is the division of the cell’s cytoplasm into two cells."
},
{
  question: "In humans, meiosis occurs in:",
  options: [
    "Skin cells",
    "Liver cells",
    "Testes and ovaries",
    "Blood cells"
  ],
  answer: "Testes and ovaries",
  solution: "Gametes are formed by meiosis in reproductive organs."
},
{
  question: "Which structure is responsible for moving chromosomes during mitosis?",
  options: [
    "Nucleolus",
    "Mitochondria",
    "Spindle fibers",
    "Ribosomes"
  ],
  answer: "Spindle fibers",
  solution: "Spindle fibers attach to centromeres and help pull chromosomes apart."
},
{
  question: "What is the end result of mitosis?",
  options: [
    "Four haploid cells",
    "Two identical diploid cells",
    "Two different haploid cells",
    "Four identical diploid cells"
  ],
  answer: "Two identical diploid cells",
  solution: "Mitosis results in two genetically identical daughter cells."
},
{
  question: "Which phase of mitosis comes immediately after metaphase?",
  options: [
    "Prophase",
    "Anaphase",
    "Telophase",
    "Cytokinesis"
  ],
  answer: "Anaphase",
  solution: "Anaphase follows metaphase, where sister chromatids are pulled apart."
},
{
  question: "Cell division is important for:",
  options: [
    "Growth",
    "Repair",
    "Reproduction",
    "All of the above"
  ],
  answer: "All of the above",
  solution: "Cell division enables growth, repair of tissues, and reproduction."
},
{
  question: "Centrioles play an important role in:",
  options: [
    "Photosynthesis",
    "Cell respiration",
    "Chromosome movement",
    "Protein synthesis"
  ],
  answer: "Chromosome movement",
  solution: "Centrioles help in spindle formation which moves chromosomes."
},
{
  question: "Which of the following occurs during telophase?",
  options: [
    "Chromosomes line up",
    "Nuclear envelope reforms",
    "Chromosomes condense",
    "DNA replicates"
  ],
  answer: "Nuclear envelope reforms",
  solution: "In telophase, two new nuclei begin to form and envelope reforms."
},
{
  question: "If a cell has 46 chromosomes before mitosis, each daughter cell will have:",
  options: [
    "23 chromosomes",
    "92 chromosomes",
    "46 chromosomes",
    "None of the above"
  ],
  answer: "46 chromosomes",
  solution: "Mitosis produces identical daughter cells with the same chromosome number."
},
{
  question: "Cell division in somatic cells occurs through:",
  options: [
    "Meiosis",
    "Binary fission",
    "Mitosis",
    "Budding"
  ],
  answer: "Mitosis",
  solution: "Somatic (body) cells divide by mitosis to produce identical daughter cells."
},
{
  question: "Which phase of mitosis involves alignment of chromosomes at the equator?",
  options: [
    "Prophase",
    "Metaphase",
    "Anaphase",
    "Telophase"
  ],
  answer: "Metaphase",
  solution: "In metaphase, chromosomes align at the cell’s equatorial plane."
},
{
  question: "Meiosis results in:",
  options: [
    "Two diploid cells",
    "Four diploid cells",
    "Four haploid cells",
    "Two haploid cells"
  ],
  answer: "Four haploid cells",
  solution: "Meiosis produces four genetically different haploid gametes."
},
{
  question: "During which phase of the cell cycle does DNA replication occur?",
  options: [
    "G1 phase",
    "G2 phase",
    "S phase",
    "M phase"
  ],
  answer: "S phase",
  solution: "S phase (synthesis phase) is when DNA replication occurs in the interphase."
},
{
  question: "Crossing over takes place during:",
  options: [
    "Metaphase I",
    "Prophase I",
    "Anaphase I",
    "Telophase I"
  ],
  answer: "Prophase I",
  solution: "Crossing over (exchange of genetic material) occurs in Prophase I of meiosis."
},
{
  question: "Which of the following is not a part of mitosis?",
  options: [
    "Prophase",
    "Metaphase",
    "Interphase",
    "Anaphase"
  ],
  answer: "Interphase",
  solution: "Interphase is the phase between divisions, not part of mitosis itself."
},
{
  question: "Cytokinesis is:",
  options: [
    "Division of nucleus",
    "Division of cytoplasm",
    "Formation of chromosomes",
    "Duplication of centrioles"
  ],
  answer: "Division of cytoplasm",
  solution: "Cytokinesis is the division of the cell’s cytoplasm into two cells."
},
{
  question: "In humans, meiosis occurs in:",
  options: [
    "Skin cells",
    "Liver cells",
    "Testes and ovaries",
    "Blood cells"
  ],
  answer: "Testes and ovaries",
  solution: "Gametes are formed by meiosis in reproductive organs."
},
{
  question: "Which structure is responsible for moving chromosomes during mitosis?",
  options: [
    "Nucleolus",
    "Mitochondria",
    "Spindle fibers",
    "Ribosomes"
  ],
  answer: "Spindle fibers",
  solution: "Spindle fibers attach to centromeres and help pull chromosomes apart."
},
{
  question: "What is the end result of mitosis?",
  options: [
    "Four haploid cells",
    "Two identical diploid cells",
    "Two different haploid cells",
    "Four identical diploid cells"
  ],
  answer: "Two identical diploid cells",
  solution: "Mitosis results in two genetically identical daughter cells."
},
{
  question: "Which phase of mitosis comes immediately after metaphase?",
  options: [
    "Prophase",
    "Anaphase",
    "Telophase",
    "Cytokinesis"
  ],
  answer: "Anaphase",
  solution: "Anaphase follows metaphase, where sister chromatids are pulled apart."
},
{
  question: "Cell division is important for:",
  options: [
    "Growth",
    "Repair",
    "Reproduction",
    "All of the above"
  ],
  answer: "All of the above",
  solution: "Cell division enables growth, repair of tissues, and reproduction."
},
{
  question: "Centrioles play an important role in:",
  options: [
    "Photosynthesis",
    "Cell respiration",
    "Chromosome movement",
    "Protein synthesis"
  ],
  answer: "Chromosome movement",
  solution: "Centrioles help in spindle formation which moves chromosomes."
},
{
  question: "Which of the following occurs during telophase?",
  options: [
    "Chromosomes line up",
    "Nuclear envelope reforms",
    "Chromosomes condense",
    "DNA replicates"
  ],
  answer: "Nuclear envelope reforms",
  solution: "In telophase, two new nuclei begin to form and envelope reforms."
},
{
  question: "If a cell has 46 chromosomes before mitosis, each daughter cell will have:",
  options: [
    "23 chromosomes",
    "92 chromosomes",
    "46 chromosomes",
    "None of the above"
  ],
  answer: "46 chromosomes",
  solution: "Mitosis produces identical daughter cells with the same chromosome number."
},
 {
    question: "What does SOA stand for in education?",
    options: [
      "System of Analysis",
      "Structure of Assessment",
      "System of Assessment",
      "Standard of Academics"
    ],
    answer: "System of Assessment",
    solution: "SOA refers to System of Assessment used to evaluate student performance."
  },
  {
    question: "Which of the following is a **formative assessment** example?",
    options: [
      "Final exams",
      "Unit test",
      "Annual practical",
      "Quiz after a lesson"
    ],
    answer: "Quiz after a lesson",
    solution: "Formative assessments are low-stake evaluations like quizzes used during the learning process."
  },
  {
    question: "Which is NOT a purpose of SOA?",
    options: [
      "Evaluating learning progress",
      "Identifying student strengths",
      "Punishing students for low marks",
      "Guiding teaching strategies"
    ],
    answer: "Punishing students for low marks",
    solution: "Assessment should support learning, not penalize students."
  },
  {
    question: "Which of these is a **summative assessment**?",
    options: [
      "Homework review",
      "Chapter-end quiz",
      "Final term exam",
      "Class participation"
    ],
    answer: "Final term exam",
    solution: "Summative assessments evaluate cumulative knowledge at the end of a term."
  },
  {
    question: "Which tool is most likely used in **diagnostic assessment**?",
    options: [
      "Unit test",
      "Interview",
      "Survey",
      "Pre-test"
    ],
    answer: "Pre-test",
    solution: "Diagnostic assessments like pre-tests help identify learning gaps."
  },
  {
    question: "Which characteristic best defines a **good assessment**?",
    options: [
      "Lengthy and difficult",
      "Bias toward high performers",
      "Reliability and fairness",
      "Surprise element"
    ],
    answer: "Reliability and fairness",
    solution: "An effective assessment should be reliable and fair to all students."
  },
  {
    question: "Continuous assessment helps in:",
    options: [
      "Only final evaluation",
      "Stress-free learning",
      "Punishment for failure",
      "Avoiding teacher feedback"
    ],
    answer: "Stress-free learning",
    solution: "Continuous assessment promotes ongoing feedback and reduces exam pressure."
  },
  {
    question: "Which of the following is NOT a type of SOA?",
    options: [
      "Diagnostic",
      "Formative",
      "Summative",
      "Introspective"
    ],
    answer: "Introspective",
    solution: "Introspective is not a standard type of educational assessment."
  },
  {
    question: "Peer assessment involves:",
    options: [
      "Teachers evaluating students",
      "Students evaluating teachers",
      "Students evaluating each other",
      "Parents evaluating teachers"
    ],
    answer: "Students evaluating each other",
    solution: "Peer assessment is when students give feedback to their classmates."
  },
  {
    question: "Which of the following is a **quantitative assessment**?",
    options: [
      "Essay writing",
      "Project presentation",
      "MCQ test",
      "Interview"
    ],
    answer: "MCQ test",
    solution: "Quantitative assessments involve measurable results like scores in MCQs."
  },
  {
    question: "Rubrics are used for:",
    options: [
      "Awarding attendance",
      "Setting time limits",
      "Grading subjective answers",
      "Preparing question papers"
    ],
    answer: "Grading subjective answers",
    solution: "Rubrics help evaluate open-ended responses like essays or projects."
  },
  {
    question: "A major drawback of traditional assessment is:",
    options: [
      "Too much feedback",
      "Limited to rote learning",
      "Focus on creativity",
      "Encouragement of collaboration"
    ],
    answer: "Limited to rote learning",
    solution: "Traditional methods often emphasize memorization over understanding."
  },
  {
    question: "Which of these ensures **fairness** in assessment?",
    options: [
      "Using same paper for all",
      "Marking leniently",
      "Providing criteria in advance",
      "Giving no feedback"
    ],
    answer: "Providing criteria in advance",
    solution: "Clearly stated rubrics and expectations promote fairness."
  },
  {
    question: "Which SOA type helps tailor teaching plans?",
    options: [
      "Summative",
      "Formative",
      "Diagnostic",
      "Norm-referenced"
    ],
    answer: "Diagnostic",
    solution: "Diagnostic assessments identify areas where students need help, guiding teaching."
  },
  {
    question: "A feedback-oriented system promotes:",
    options: [
      "Anxiety",
      "Competition",
      "Growth and improvement",
      "Cheating"
    ],
    answer: "Growth and improvement",
    solution: "Feedback is essential for learning and self-improvement."
  },
   {
    question: "Which of the following is a disaccharide?",
    options: ["Glucose", "Fructose", "Sucrose", "Cellulose"],
    answer: "Sucrose",
    solution: "Sucrose is formed by the condensation of glucose and fructose."
  },
  {
    question: "Which element is found in all amino acids?",
    options: ["Phosphorus", "Sulfur", "Nitrogen", "Chlorine"],
    answer: "Nitrogen",
    solution: "All amino acids contain an amino group (-NH₂), which includes nitrogen."
  },
  {
    question: "The basic unit of a nucleic acid is:",
    options: ["Amino acid", "Fatty acid", "Nucleotide", "Monosaccharide"],
    answer: "Nucleotide",
    solution: "Nucleotides are the building blocks of nucleic acids like DNA and RNA."
  },
  {
    question: "Which of the following is a fibrous protein?",
    options: ["Hemoglobin", "Insulin", "Keratin", "Albumin"],
    answer: "Keratin",
    solution: "Keratin is a fibrous protein found in hair, nails, and skin."
  },
  {
    question: "Which carbohydrate is not a reducing sugar?",
    options: ["Glucose", "Fructose", "Sucrose", "Lactose"],
    answer: "Sucrose",
    solution: "Sucrose is a non-reducing sugar as it does not have a free aldehyde or ketone group."
  },
  {
    question: "Which vitamin is synthesized in the skin upon exposure to sunlight?",
    options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
    answer: "Vitamin D",
    solution: "Vitamin D is synthesized from cholesterol in the skin when exposed to UV rays."
  },
  {
    question: "Lipids are insoluble in:",
    options: ["Alcohol", "Ether", "Water", "Chloroform"],
    answer: "Water",
    solution: "Lipids are hydrophobic and do not dissolve in water."
  },
  {
    question: "Which of the following is not a function of proteins?",
    options: ["Enzymatic activity", "Transport", "Information storage", "Structural support"],
    answer: "Information storage",
    solution: "Proteins perform many roles but storing genetic information is the role of nucleic acids."
  },
  {
    question: "Benedict’s test is used to detect the presence of:",
    options: ["Proteins", "Starch", "Reducing sugars", "Lipids"],
    answer: "Reducing sugars",
    solution: "Benedict's reagent reacts with reducing sugars to form a colored precipitate."
  },
  {
    question: "Which of the following biomolecules does not form polymers?",
    options: ["Proteins", "Nucleic acids", "Lipids", "Carbohydrates"],
    answer: "Lipids",
    solution: "Lipids are not formed by repeating monomer units like other biomolecules."
  },
  {
    question: "DNA and RNA are composed of repeating units called:",
    options: ["Amino acids", "Monosaccharides", "Nucleotides", "Fatty acids"],
    answer: "Nucleotides",
    solution: "DNA and RNA are polymers made of nucleotide monomers."
  },
  {
    question: "Enzymes are biologically:",
    options: ["Carbohydrates", "Lipids", "Proteins", "Vitamins"],
    answer: "Proteins",
    solution: "Most enzymes are proteins that catalyze biochemical reactions."
  },
  {
    question: "The simplest form of carbohydrates is:",
    options: ["Polysaccharide", "Disaccharide", "Monosaccharide", "Oligosaccharide"],
    answer: "Monosaccharide",
    solution: "Monosaccharides are single sugar units like glucose and fructose."
  },
  {
    question: "Which of the following is a storage polysaccharide in animals?",
    options: ["Starch", "Cellulose", "Glycogen", "Chitin"],
    answer: "Glycogen",
    solution: "Glycogen is the main storage form of glucose in animal cells."
  },
  {
    question: "Which type of bond is found between amino acids in a protein?",
    options: ["Glycosidic bond", "Peptide bond", "Phosphodiester bond", "Ester bond"],
    answer: "Peptide bond",
    solution: "A peptide bond links the carboxyl group of one amino acid to the amino group of another."
  }


];




const QUESTION_VERSION = "chem1";
const QUIZ_DURATION = 25 * 60; 

export function App() {
  const [storage] = useState(() => {
    return window.quizAppStorage ? JSON.parse(window.quizAppStorage) : {};
  });

  const saved = storage;

  const [quizStarted, setQuizStarted] = useState(
    saved.version === QUESTION_VERSION ? saved.started || false : false
  );
  const [timeRemaining, setTimeRemaining] = useState(
    saved.version === QUESTION_VERSION ? saved.timeRemaining || QUIZ_DURATION : QUIZ_DURATION
  );
  const [userAnswers, setUserAnswers] = useState(
    saved.version === QUESTION_VERSION ? saved.answers || {} : {}
  );
  const [submitted, setSubmitted] = useState(
    saved.version === QUESTION_VERSION ? saved.submitted || false : false
  );
  const [showAnswerKey, setShowAnswerKey] = useState(false);

  // Timer effect
  useEffect(() => {
    let timer;
    if (quizStarted && !submitted && timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining(prev => {
          const newTime = prev - 1;
          
          // Save to storage
          const dataToStore = JSON.stringify({
            version: QUESTION_VERSION,
            started: true,
            timeRemaining: newTime,
            answers: userAnswers,
            submitted: false,
          });
          window.quizAppStorage = dataToStore;
          
          // Auto-submit when time runs out
          if (newTime <= 0) {
            handleSubmit();
            return 0;
          }
          
          return newTime;
        });
      }, 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [quizStarted, submitted, timeRemaining, userAnswers]);

  useEffect(() => {
    if (submitted) {
      window.onbeforeunload = () => "Quiz submitted. You can't refresh!";
    } else if (quizStarted) {
      window.onbeforeunload = () => "Quiz in progress. You'll lose your progress if you leave!";
    } else {
      window.onbeforeunload = null;
    }
  }, [submitted, quizStarted]);

  const handleStart = () => {
    setQuizStarted(true);
    const dataToStore = JSON.stringify({
      version: QUESTION_VERSION,
      started: true,
      timeRemaining: QUIZ_DURATION,
      answers: {},
      submitted: false,
    });
    window.quizAppStorage = dataToStore;
  };

  const handleOptionChange = (qIndex, option) => {
    const updatedAnswers = {
      ...userAnswers,
      [qIndex]: option,
    };
    setUserAnswers(updatedAnswers);

    const dataToStore = JSON.stringify({
      version: QUESTION_VERSION,
      started: quizStarted,
      timeRemaining,
      answers: updatedAnswers,
      submitted,
    });
    window.quizAppStorage = dataToStore;
  };

  const handleSubmit = () => {
    setSubmitted(true);
    const dataToStore = JSON.stringify({
      version: QUESTION_VERSION,
      started: quizStarted,
      timeRemaining,
      answers: userAnswers,
      submitted: true,
    });
    window.quizAppStorage = dataToStore;
  };

  // Calculate weighted score: +4 for correct, -1 for wrong, 0 for unanswered
  const calculateScore = () => {
    return questions.reduce((acc, q, i) => {
      const userAnswer = userAnswers[i];
      if (!userAnswer) {
        return acc; // No points for unanswered
      } else if (userAnswer === q.answer) {
        return acc + 4; // +4 for correct
      } else {
        return acc - 1; // -1 for wrong
      }
    }, 0);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const score = calculateScore();
  const maxPossibleScore = questions.length * 4;
  const correctAnswers = questions.reduce((acc, q, i) => {
    return userAnswers[i] === q.answer ? acc + 1 : acc;
  }, 0);
  const wrongAnswers = questions.reduce((acc, q, i) => {
    const userAnswer = userAnswers[i];
    return userAnswer && userAnswer !== q.answer ? acc + 1 : acc;
  }, 0);
  const unanswered = questions.length - correctAnswers - wrongAnswers;

  const containerStyle = {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#f8fafc",
    minHeight: "100vh",
  };

  const titleStyle = {
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "32px",
    textAlign: "center",
    color: "#1e293b",
    background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  const timerStyle = {
    fontSize: "24px",
    fontWeight: "700",
    textAlign: "center",
    padding: "16px",
    margin: "20px 0",
    backgroundColor: timeRemaining <= 300 ? "#fee2e2" : "#dcfce7", // Red background when <= 5 minutes
    border: `2px solid ${timeRemaining <= 300 ? "#dc2626" : "#16a34a"}`,
    borderRadius: "12px",
    color: timeRemaining <= 300 ? "#991b1b" : "#166534",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
  };

  const startButtonStyle = {
    fontSize: "20px",
    fontWeight: "700",
    padding: "20px 40px",
    backgroundColor: "#16a34a",
    color: "#fff",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    boxShadow: "0 8px 16px -4px rgba(22, 163, 74, 0.4)",
    transition: "all 0.2s ease",
    display: "block",
    margin: "40px auto",
  };

  const questionBoxStyle = {
    marginBottom: "24px",
    padding: "24px",
    border: "1px solid #e2e8f0",
    borderRadius: "12px",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#ffffff",
  };

  const questionTextStyle = {
    fontWeight: "600",
    marginBottom: "16px",
    fontSize: "18px",
    color: "#374151",
  };

  const labelStyle = {
    display: "block",
    padding: "12px 16px",
    borderRadius: "8px",
    marginBottom: "8px",
    cursor: submitted ? "default" : "pointer",
    transition: "all 0.2s ease",
    border: "2px solid transparent",
    fontSize: "16px",
  };

  const inputStyle = {
    marginRight: "12px",
    transform: "scale(1.2)",
  };

  const buttonStyle = {
    backgroundColor: "#3b82f6",
    color: "#fff",
    padding: "12px 32px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "600",
    transition: "all 0.2s ease",
    boxShadow: "0 4px 6px -1px rgba(59, 130, 246, 0.3)",
    marginRight: "12px",
  };

  const buttonHoverStyle = {
    backgroundColor: "#2563eb",
    transform: "translateY(-2px)",
  };

  const resultStyle = {
    marginTop: "24px",
    fontSize: "28px",
    fontWeight: "700",
    textAlign: "center",
    color: "#1e293b",
    padding: "24px",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    border: "1px solid #e2e8f0",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
  };

  const scoreBreakdownStyle = {
    marginTop: "16px",
    fontSize: "16px",
    color: "#64748b",
    display: "flex",
    justifyContent: "center",
    gap: "24px",
    flexWrap: "wrap",
  };

  const scoreItemStyle = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "8px 16px",
    backgroundColor: "#f8fafc",
    borderRadius: "8px",
    border: "1px solid #e2e8f0",
  };

  const answerKeyStyle = {
    marginTop: "24px",
    padding: "24px",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    border: "1px solid #e2e8f0",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
  };

  const answerKeyHeaderStyle = {
    fontSize: "24px",
    fontWeight: "700",
    marginBottom: "20px",
    color: "#1e293b",
    textAlign: "center",
    paddingBottom: "12px",
    borderBottom: "2px solid #e2e8f0",
  };

  const answerItemStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: "16px",
    marginBottom: "12px",
    backgroundColor: "#f8fafc",
    borderRadius: "8px",
    border: "1px solid #e2e8f0",
  };

  const answerQuestionStyle = {
    flex: "1",
    fontWeight: "500",
    color: "#374151",
    marginRight: "16px",
  };

  const scoringInfoStyle = {
    marginBottom: "24px",
    padding: "16px",
    backgroundColor: "#fff7ed",
    border: "1px solid #fed7aa",
    borderRadius: "8px",
    fontSize: "14px",
    color: "#9a3412",
    textAlign: "center",
  };

  // Show start screen if quiz hasn't started
  if (!quizStarted) {
    return (
      <div style={containerStyle}>
        <h1 style={titleStyle}>🧪 Multiple Choice Quiz</h1>
        
        <div style={{
          ...scoringInfoStyle,
          backgroundColor: "#e0f2fe",
          borderColor: "#0284c7",
          color: "#0c4a6e",
          fontSize: "16px",
          padding: "24px",
          marginBottom: "32px"
        }}>
          <div style={{ marginBottom: "16px", fontSize: "18px", fontWeight: "600" }}>
            📋 Quiz Instructions
          </div>
          <div style={{ marginBottom: "12px" }}>
            ⏱️ <strong>Time Limit:</strong> 25 minutes
          </div>
          <div style={{ marginBottom: "12px" }}>
            📊 <strong>Scoring:</strong> +4 points for correct answers, -1 point for wrong answers, 0 points for unanswered
          </div>
          <div style={{ marginBottom: "12px" }}>
            📝 <strong>Questions:</strong> {questions.length} multiple choice questions
          </div>
          <div>
            ⚠️ <strong>Note:</strong> Once you start, the timer will begin and you cannot pause or restart the quiz
          </div>
        </div>

        <button
          onClick={handleStart}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "#15803d";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "#16a34a";
            e.currentTarget.style.transform = "translateY(0)";
          }}
          style={startButtonStyle}
        >
          🚀 Start Quiz
        </button>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>🧪 Multiple Choice Quiz</h1>
      
      {!submitted && (
        <div style={timerStyle}>
          ⏰ Time Remaining: {formatTime(timeRemaining)}
          {timeRemaining <= 300 && (
            <div style={{ fontSize: "14px", marginTop: "8px" }}>
              ⚠️ Less than 5 minutes remaining!
            </div>
          )}
        </div>
      )}
      
      <div style={scoringInfoStyle}>
        <strong>📊 Scoring System:</strong> +4 points for correct answers, -1 point for wrong answers, 0 points for unanswered
      </div>

      {questions.map((q, qIndex) => (
        <div key={qIndex} style={questionBoxStyle}>
          <h2 style={questionTextStyle}>
            <span style={{ color: "#3b82f6", marginRight: "8px" }}>{qIndex + 1}.</span>
            {q.question}
          </h2>
          {q.options.map((option, i) => {
            const isCorrect = option === q.answer;
            const isSelected = userAnswers[qIndex] === option;

            let optionStyle = { ...labelStyle };
            if (submitted) {
              if (isSelected && isCorrect) {
                optionStyle.backgroundColor = "#dcfce7";
                optionStyle.borderColor = "#16a34a";
                optionStyle.color = "#166534";
              } else if (isSelected && !isCorrect) {
                optionStyle.backgroundColor = "#fee2e2";
                optionStyle.borderColor = "#dc2626";
                optionStyle.color = "#991b1b";
              } else {
                optionStyle.backgroundColor = "#f8fafc";
                optionStyle.color = "#64748b";
              }
            } else {
              if (isSelected) {
                optionStyle.backgroundColor = "#dbeafe";
                optionStyle.borderColor = "#3b82f6";
                optionStyle.color = "#1e40af";
              } else {
                optionStyle.backgroundColor = "#f8fafc";
                optionStyle.color = "#374151";
              }
            }

            return (
              <label
                key={i}
                style={optionStyle}
                onMouseEnter={(e) => {
                  if (!submitted && !isSelected) {
                    e.currentTarget.style.backgroundColor = "#e0e7ff";
                    e.currentTarget.style.borderColor = "#6366f1";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!submitted) {
                    if (isSelected) {
                      e.currentTarget.style.backgroundColor = "#dbeafe";
                      e.currentTarget.style.borderColor = "#3b82f6";
                    } else {
                      e.currentTarget.style.backgroundColor = "#f8fafc";
                      e.currentTarget.style.borderColor = "transparent";
                    }
                  }
                }}
              >
                <input
                  type="radio"
                  name={`question-${qIndex}`}
                  value={option}
                  disabled={submitted}
                  checked={isSelected}
                  onChange={() => handleOptionChange(qIndex, option)}
                  style={inputStyle}
                />
                {option}
                {submitted && isCorrect && (
                  <span style={{ marginLeft: "8px", color: "#16a34a", fontSize: "18px" }}>✅</span>
                )}
                {submitted && isSelected && !isCorrect && (
                  <span style={{ marginLeft: "8px", color: "#dc2626", fontSize: "18px" }}>❌</span>
                )}
              </label>
            );
          })}
        </div>
      ))}

      {!submitted ? (
        <button
          onClick={handleSubmit}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor;
            e.currentTarget.style.transform = buttonHoverStyle.transform;
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor;
            e.currentTarget.style.transform = "translateY(0)";
          }}
          style={buttonStyle}
        >
          📝 Submit
        </button>
      ) : (
        <div>
          <div style={resultStyle}>
            🎯 Your Score: {score} out of {maxPossibleScore}
            <div style={scoreBreakdownStyle}>
              <div style={scoreItemStyle}>
                <span style={{ color: "#16a34a" }}>✅</span>
                <span>Correct: {correctAnswers} (+{correctAnswers * 4})</span>
              </div>
              <div style={scoreItemStyle}>
                <span style={{ color: "#dc2626" }}>❌</span>
                <span>Wrong: {wrongAnswers} (-{wrongAnswers})</span>
              </div>
              <div style={scoreItemStyle}>
                <span style={{ color: "#64748b" }}>⚪</span>
                <span>Unanswered: {unanswered} (0)</span>
              </div>
            </div>
            <div style={{ fontSize: "16px", marginTop: "12px", color: "#64748b" }}>
              Percentage: {((correctAnswers / questions.length) * 100).toFixed(1)}% correct
            </div>
            {timeRemaining <= 0 && (
              <div style={{ fontSize: "14px", marginTop: "8px", color: "#dc2626", fontWeight: "600" }}>
                ⏰ Time's up! Quiz auto-submitted.
              </div>
            )}
          </div>

          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button
              onClick={() => setShowAnswerKey(!showAnswerKey)}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#4f46e5";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "#6366f1";
                e.currentTarget.style.transform = "translateY(0)";
              }}
              style={{
                ...buttonStyle,
                backgroundColor: "#6366f1",
                boxShadow: "0 4px 6px -1px rgba(99, 102, 241, 0.3)",
              }}
            >
              {showAnswerKey ? "🔼 Hide Answer Key" : "🔽 Show Answer Key"}
            </button>
          </div>

          {showAnswerKey && (
            <div style={{ ...answerKeyStyle, padding: "16px" }}>
              <h3 style={{ ...answerKeyHeaderStyle, marginBottom: "16px" }}>📋 Answer Key</h3>
              {questions.map((q, i) => {
                const userAnswer = userAnswers[i];
                const isCorrect = userAnswer === q.answer;
                const points = !userAnswer ? 0 : isCorrect ? 4 : -1;

                return (
                  <div
                    key={i}
                    style={{
                      ...answerItemStyle,
                      padding: "16px",
                      border: "1px solid #e2e8f0",
                      borderRadius: "10px",
                      marginBottom: "20px",
                      backgroundColor: "#f8fafc",
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px"
                    }}
                  >
                    <div style={{ ...answerQuestionStyle, fontWeight: "600" }}>
                      <strong>Q{i + 1}:</strong> {q.question}
                    </div>

                    <div style={{ color: "#16a34a", fontWeight: "500" }}>
                      ✅ Correct: {q.answer}
                    </div>

                    {userAnswer && userAnswer !== q.answer && (
                      <div style={{ color: "#dc2626" }}>
                        ❌ Your answer: {userAnswer} ({points} points)
                      </div>
                    )}

                    {userAnswer && userAnswer === q.answer && (
                      <div style={{ color: "#0f766e" }}>
                        🎯 Your answer: {userAnswer} (+{points} points)
                      </div>
                    )}

                    {!userAnswer && (
                      <div style={{ color: "#64748b" }}>
                        ⚪ Not answered ({points} points)
                      </div>
                    )}

                    {q.solution && (
                      <div
                        style={{
                          marginTop: "10px",
                          padding: "10px",
                          backgroundColor: "#e0f2fe",
                          borderRadius: "8px",
                          color: "#0c4a6e",
                          fontStyle: "italic"
                        }}
                      >
                        📝 <strong>Solution:</strong> {q.solution}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}