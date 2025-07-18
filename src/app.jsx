import React, { useState, useEffect } from "react";
const dimensionQuestions = [
  {
    question: "Which of the following has the same dimensional formula as energy?",
    options: ["Force × Distance", "Pressure × Volume", "Power × Time", "All of these"],
    answer: "All of these",
    solution: "Energy has dimensional formula [ML²T⁻²]; all listed combinations result in the same."
  },
  {
    question: "Dimensional formula of Planck's constant (h) is:",
    options: ["[ML²T⁻²]", "[ML²T⁻¹]", "[MLT⁻²]", "[MLT⁻¹]"],
    answer: "[ML²T⁻¹]",
    solution: "E = hν ⇒ h = E/ν ⇒ [ML²T⁻²]/[T⁻¹] = [ML²T⁻¹]"
  },
  {
    question: "Which of the following is dimensionless?",
    options: ["Reynolds number", "Strain", "Poisson's ratio", "All of these"],
    answer: "All of these",
    solution: "All these quantities are ratios of similar physical quantities, hence dimensionless."
  },
  {
    question: "Dimensional formula of gravitational constant G is:",
    options: ["[M⁻¹L³T⁻²]", "[ML⁻¹T⁻²]", "[M⁻¹L²T²]", "[M⁻²L³T⁻²]"],
    answer: "[M⁻¹L³T⁻²]",
    solution: "From F = Gm₁m₂/r² ⇒ G = Fr²/m₁m₂ ⇒ [MLT⁻²][L²]/[M²] = [M⁻¹L³T⁻²]"
  },
  {
    question: "The dimensional formula of pressure is:",
    options: ["[ML⁻¹T⁻²]", "[ML²T⁻²]", "[ML⁰T⁻²]", "[M⁻¹LT⁻²]"],
    answer: "[ML⁻¹T⁻²]",
    solution: "Pressure = Force/Area ⇒ [MLT⁻²]/[L²] = [ML⁻¹T⁻²]"
  },
  {
    question: "What is the dimension of impulse?",
    options: ["[MLT⁻¹]", "[ML²T⁻²]", "[MLT⁻²]", "[ML²T⁻¹]"],
    answer: "[MLT⁻¹]",
    solution: "Impulse = Force × Time = [MLT⁻²] × [T] = [MLT⁻¹]"
  },
  {
    question: "Which physical quantity has dimension [ML²T⁻³]?",
    options: ["Energy", "Power", "Pressure", "None of these"],
    answer: "Power",
    solution: "Power = Energy/Time ⇒ [ML²T⁻²]/[T] = [ML²T⁻³]"
  },
  {
    question: "The dimensional formula of surface tension is:",
    options: ["[MT⁻²]", "[ML⁰T⁻²]", "[ML⁻¹T⁻²]", "[MLT⁻²]"],
    answer: "[MT⁻²]",
    solution: "Surface tension = Force / Length ⇒ [MLT⁻²]/[L] = [MT⁻²]"
  },
  {
    question: "Which of the following pairs have the same dimensional formula?",
    options: ["Work and Torque", "Force and Pressure", "Impulse and Momentum", "Power and Energy"],
    answer: "Impulse and Momentum",
    solution: "Impulse = Force × Time = [MLT⁻¹]; Momentum = mv = [MLT⁻¹]"
  },
  {
    question: "Dimension of angular momentum is:",
    options: ["[ML²T⁻¹]", "[MLT⁻²]", "[ML²T⁻²]", "[MLT⁻¹]"],
    answer: "[ML²T⁻¹]",
    solution: "L = mvr ⇒ [M][LT⁻¹][L] = [ML²T⁻¹]"
  },
  {
    question: "Dimensional formula of modulus of elasticity is same as that of:",
    options: ["Stress", "Strain", "Pressure", "Both Stress and Pressure"],
    answer: "Both Stress and Pressure",
    solution: "All have dimensions of Force per unit area ⇒ [ML⁻¹T⁻²]"
  },
  {
    question: "Which physical quantity has dimension [ML⁰T⁻²]?",
    options: ["Surface tension", "Stress", "Tension", "Strain"],
    answer: "Surface tension",
    solution: "Surface tension = Force / Length = [MLT⁻²]/[L] = [ML⁰T⁻²]"
  },
  {
    question: "Which physical quantity has the dimension [L²]?",
    options: ["Area", "Volume", "Velocity", "Density"],
    answer: "Area",
    solution: "Area is a two-dimensional quantity, so dimension is [L²]"
  },
  {
    question: "Which physical quantity has dimensions [ML²T⁻²]?",
    options: ["Kinetic energy", "Force", "Momentum", "Velocity"],
    answer: "Kinetic energy",
    solution: "K.E = ½mv² ⇒ [M][L²T⁻²] = [ML²T⁻²]"
  },
  {
    question: "Which of the following has dimension [M⁰L⁰T⁰]?",
    options: ["Angle", "Solid angle", "Refractive index", "All of these"],
    answer: "All of these",
    solution: "They are all dimensionless quantities."
  },
  {
    question: "Which has the same dimension as momentum?",
    options: ["Impulse", "Angular momentum", "Force", "None"],
    answer: "Impulse",
    solution: "Impulse = Force × Time ⇒ [MLT⁻²][T] = [MLT⁻¹] = Momentum"
  },
  {
    question: "Dimensional formula of velocity gradient is:",
    options: ["[T⁻¹]", "[LT⁻¹]", "[MLT⁻²]", "[L²T⁻²]"],
    answer: "[T⁻¹]",
    solution: "Velocity gradient = velocity / distance ⇒ [LT⁻¹]/[L] = [T⁻¹]"
  },
  {
    question: "Dimension of universal gas constant R is:",
    options: ["[ML²T⁻²K⁻¹mol⁻¹]", "[MLT⁻²K⁻¹mol⁻¹]", "[ML²T⁻²K⁻¹]", "[ML²T⁻¹K⁻¹]"],
    answer: "[ML²T⁻²K⁻¹mol⁻¹]",
    solution: "R = PV/nT ⇒ [ML⁻¹T⁻²][L³]/[mol][K] = [ML²T⁻²K⁻¹mol⁻¹]"
  },
  {
    question: "Which quantity has dimension [ML⁻³]?",
    options: ["Density", "Pressure", "Energy density", "None"],
    answer: "Density",
    solution: "Density = mass/volume ⇒ [M]/[L³] = [ML⁻³]"
  },
  {
    question: "Dimension of coefficient of viscosity is:",
    options: ["[ML⁻¹T⁻¹]", "[MLT⁻¹]", "[ML⁻²T⁻²]", "[ML⁻¹T⁻²]"],
    answer: "[ML⁻¹T⁻¹]",
    solution: "From F = ηA (dv/dx) ⇒ η = [Force × distance / Area × velocity] = [ML⁻¹T⁻¹]"
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