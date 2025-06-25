import React, { useState, useEffect } from "react";
const questions = [

  {
    question: "This cell organelle is responsible for extracting energy from carbohydrates to form ATP.",
    options: ["Lysosome", "Ribosome", "Chloroplast", "Mitochondrion"],
    answer: "Mitochondrion",
    solution: "Mitochondria convert energy from carbohydrates into ATP through cellular respiration." 
  },
  {
    question: "Pick the incorrect statement regarding bacteria (NEET – II 2016).",
    options: ["Mycoplasma is a wall-less microorganism", "Pili and fimbriae are mainly involved in motility of bacterial cells", "The bacterial cell wall is made up of peptidoglycan", "Cyanobacteria lack flagellated cells"],
    answer: "Pili and fimbriae are mainly involved in motility of bacterial cells",
    solution: "Pili and fimbriae are primarily for adhesion, not motility." 
  },
  {
    question: "As per the Fluid Mosaic model, plasma membrane is composed of:",
    options: ["Phospholipids and integral proteins", "Phospholipids, extrinsic proteins, and intrinsic proteins", "Phospholipids and hemicellulose", "Phospholipids and oligosaccharides"],
    answer: "Phospholipids, extrinsic proteins, and intrinsic proteins",
    solution: "The fluid mosaic model includes phospholipids plus both intrinsic (integral) and extrinsic (peripheral) proteins." 
  },
  {
    question: "Pick the correct statement regarding the cell membrane (2012):",
    options: ["Lipids are arranged in a bilayer with polar heads towards the inner part", "Na⁺ and K⁺ ions move across the cell membrane by passive transport", /* missing options omitted for brevity */],
    answer: "Na⁺ and K⁺ ions move across the cell membrane by passive transport",
    solution: "Certain ions can move passively via channels down their concentration gradients." 
  },
  {
    question: "During Gram’s staining which statement is incorrect?",
    options: ["All bacteria take crystal violet stain", "Gram + ves take crystal violet stain", "Only Gram – ves take crystal violet stain", "Gram – ves lose this stain after alcohol"],
    answer: "Only Gram – ves take crystal violet stain",
    solution: "Both Gram-positive and Gram-negative take crystal violet initially; Gram-negative lose it after decolourization." 
  },
  {
    question: "Assertion–Reason (NEET 2025): Primary function of Golgi apparatus is to package materials from ER.",
    options: ["A true, R true & correct explanation", "A true, R true but not correct explanation", "A true, R false", "A false, R true"],
    answer: "A true, R true & correct explanation",
    solution: "Golgi receives vesicles from ER at cis face, modifies them, and releases at trans face." 
  },
  {
    question: "From the statements: A) Eukaryotic ribosomes are 80S & prokaryotic are 70S. B) Each ribosome has two subunits. C) Subunits of 80S are 60S & 40S while 70S are 50S & 30S. D) Subunits of 80S are 60S & 20S and 70S are 50S & 20S.",
    options: ["A, B, C correct", "A, B, D correct", "B, C correct", "C, D correct"],
    answer: "A, B, C correct",
    solution: "Eukaryotic ribosomes are 80S (60S+40S), prokaryotic are 70S (50S+30S)." 
  },
  {
    question: "Which phase is quiescent (G₀) in the cell cycle? (NEET 2023)",
    options: ["G₁ phase", "G₂ phase", "S phase", "Quiescent stage (G₀)"],
    answer: "Quiescent stage (G₀)",
    solution: "G₀ is a non-dividing, resting state outside of the active cell cycle." 
  },
  {
    question: "The stage in which recombination nodules appear is:",
    options: ["Leptotene", "Zygotene", "Pachytene", "Diakinesis"],
    answer: "Pachytene",
    solution: "Recombination nodules form during pachytene and facilitate crossing‑over." 
  },
  {
    question: "Synapsis occurs between:",
    options: ["Male and female gamete", "mRNA and ribosomes", "Spindle fibres and centromere", "Two homologous chromosomes"],
    answer: "Two homologous chromosomes",
    solution: "Synapsis is the pairing of homologous chromosomes in prophase I of meiosis." 
  },
  {
    question: "Best stage to observe shape, size and number of chromosomes:",
    options: ["Interphase", "Metaphase", "Prophase", "Telophase"],
    answer: "Metaphase",
    solution: "Chromosomes are most condensed and aligned at metaphase, ideal for counting." 
  },
  {
    question: "If a diploid cell is treated with colchicine, it becomes:",
    options: ["Triploid", "Tetraploid", "Diploid", "Monoploid"],
    answer: "Tetraploid",
    solution: "Colchicine inhibits spindle formation, preventing separation – doubling the chromosome number." 
  },
  {
    question: "During cell division, the spindle fibres attach to the chromosomes at a region called:",
    options: ["Chromocentre", "Kinetochore", "Centriole", "Chromomere"],
    answer: "Kinetochore",
    solution: "Spindle fibres bind to kinetochores located on the centromere of each chromatid." 
  },
  {
    question: "What would be the number of chromosomes in aleurone cells of a plant with 42 chromosomes in root tip cells?",
    options: ["21", "42", "63", "84"],
    answer: "42",
    solution: "Aleurone cells are somatic and thus diploid, same as root‑tip cells." 
  },
  {
    question: "Which stage precedes reformation of the nuclear envelope during M-phase?",
    options: ["Decondensation of chromosomes and reassembly of nuclear lamina", "Transcription from chromosomes and lamina reassembly", "Formation of contractile ring and phragmoplast", "Contractile ring formation and transcription"],
    answer: "Decondensation of chromosomes and reassembly of nuclear lamina",
    solution: "Nuclear envelope reforms after chromosome decondensation and lamina assembly." 
  },
  {
    question: "During mitosis ER and nucleolus begin to disappear at:",
    options: ["Late prophase", "Early metaphase", "Late metaphase", "Early prophase"],
    answer: "Late prophase",
    solution: "ER and nucleolus disintegrate during late prophase to allow chromosome segregation." 
  },
  {
    question: "In prokaryotes, where does DNA replication take place? (NEET 2023)",
    options: ["Nucleus", "Nucleoid region", "Mitochondria", "Ribosome"],
    answer: "Nucleoid region",
    solution: "Prokaryotic DNA is located in the nucleoid, not within a membrane-bound nucleus." 
  },
  {
    question: "The centriole undergoes duplication during:",
    options: ["G₁ phase", "S phase", "G₂ phase", "M phase"],
    answer: "S phase",
    solution: "Centrioles replicate parallel to DNA during the S phase of interphase." 
  },
  {
    question: "Which of the following is TRUE regarding mitotic spindle formation? (NEET 2002)",
    options: ["Spindle fiber is made of actin", "Spindle fiber is made of myosin", "Spindle fiber is made of tubulin", "Spindle fiber is made of collagen"],
    answer: "Spindle fiber is made of tubulin",
    solution: "Spindle fibers are microtubules composed of tubulin protein." 
  },
  {
    question: "Histone proteins are synthesized during which stage of cell cycle? (AIPMT 2005)",
    options: ["G₁ phase", "S phase", "G₂ phase", "M phase"],
    answer: "S phase",
    solution: "Histones are synthesized during S phase to package newly replicated DNA." 
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