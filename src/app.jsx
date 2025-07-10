import React, { useState, useEffect } from "react";
const questions = [
  {
    question: "A car travels half the distance at 40 km/h and the remaining half at 60 km/h. What is the average speed?",
    options: ["50 km/h", "48 km/h", "45 km/h", "60 km/h"],
    answer: "48 km/h",
    solution: "Average speed = 2xy / (x + y) = (2 × 40 × 60) / (40 + 60) = 4800 / 100 = 48 km/h"
  },
  {
    question: "Which of the following statements is incorrect regarding Gram staining?",
    options: ["All bacteria initially take up crystal violet", "Gram-negative lose the violet stain after alcohol", "Only Gram-negative take up crystal violet", "Gram-positive retain crystal violet"],
    answer: "Only Gram-negative take up crystal violet",
    solution: "Both types initially take crystal violet; Gram-negative lose it after decolourization."
  },
  {
    question: "In uniformly accelerated motion, the displacement in the nth second is given by:",
    options: ["u + a(n−1)", "u + a(n−1)/2", "u + a(n−0.5)", "u + a/2(2n−1)"],
    answer: "u + a/2(2n−1)",
    solution: "Displacement in nth second = u + (a/2)(2n − 1)"
  },
  {
    question: "If a body moves 10 m at 2 m/s, then another 10 m at 4 m/s, the average speed is:",
    options: ["2.5 m/s", "3 m/s", "2.67 m/s", "4 m/s"],
    answer: "2.67 m/s",
    solution: "Average speed = total distance / total time = 20 / (10/2 + 10/4) = 20 / (5 + 2.5) = 20 / 7.5 = 2.67 m/s"
  },
  {
    question: "A ball is thrown up with speed u. The time to reach maximum height is:",
    options: ["u/g", "u²/2g", "2u/g", "u/2g"],
    answer: "u/g",
    solution: "At maximum height, v = 0 ⇒ v = u - gt ⇒ 0 = u - gt ⇒ t = u/g"
  },
  {
    question: "A car travels 20 s at 6 m/s, 20 s at 8 m/s, then 20 s at 10 m/s. What is average speed?",
    options: ["8 m/s", "6 m/s", "9 m/s", "10 m/s"],
    answer: "8 m/s",
    solution: "Average speed = total distance / total time = (6+8+10)×20 / 60 = 480 / 60 = 8 m/s"
  },
  {
    question: "For a body thrown upwards, at highest point:",
    options: ["Velocity = 0, Acceleration = 0", "Velocity ≠ 0, Acceleration = 0", "Velocity = 0, Acceleration = g", "Both zero"],
    answer: "Velocity = 0, Acceleration = g",
    solution: "At the highest point, velocity becomes 0, but acceleration remains g downward."
  },
  {
    question: "In free fall, the separation between successive drops:",
    options: ["Remains constant", "Decreases", "Increases", "First increases then decreases"],
    answer: "Increases",
    solution: "Due to gravity, later drops fall faster, increasing separation."
  },
  {
    question: "A body is projected vertically upward with 40 m/s. It will strike ground after:",
    options: ["4 s", "6 s", "8 s", "10 s"],
    answer: "8 s",
    solution: "Total time = 2u/g = 2×40/10 = 8 s"
  },
  {
    question: "If retardation in sand is such that a body stops after 1 m, its deceleration is (g = 10 m/s²):",
    options: ["10 m/s²", "50 m/s²", "100 m/s²", "200 m/s²"],
    answer: "100 m/s²",
    solution: "Using v² = u² - 2as ⇒ 0 = u² - 2a(1) ⇒ a = u² / 2; for u = √200 ⇒ a = 100"
  },
    {
    question: "A train travels the first 30 km at 30 km/h and the next 70 km at 70 km/h. What is the average speed?",
    options: ["50 km/h", "55 km/h", "60 km/h", "65 km/h"],
    answer: "58.33 km/h",
    solution: "Total time = 30/30 + 70/70 = 1 + 1 = 2 hr. Total distance = 100 km. Avg speed = 100 / 2 = 50 km/h"
  },
  {
    question: "A body travels 1st half of time with speed 20 m/s and 2nd half with 30 m/s. Average speed?",
    options: ["24 m/s", "25 m/s", "26 m/s", "27 m/s"],
    answer: "25 m/s",
    solution: "Average speed = (20 + 30) / 2 = 25 m/s (when time is equally divided)"
  },
  {
    question: "A ball is dropped from 80 m height. Time to reach ground (g = 10 m/s²)?",
    options: ["3 s", "4 s", "5 s", "6 s"],
    answer: "4 s",
    solution: "Using h = 1/2gt² ⇒ 80 = 5t² ⇒ t² = 16 ⇒ t = 4 s"
  },
  {
    question: "If a car accelerates from 10 m/s to 30 m/s in 5 s, what is acceleration?",
    options: ["2 m/s²", "4 m/s²", "5 m/s²", "6 m/s²"],
    answer: "4 m/s²",
    solution: "a = (v - u) / t = (30 - 10) / 5 = 4 m/s²"
  },
  {
    question: "A stone is thrown vertically with 20 m/s. Height at 1.5 s? (g = 10 m/s²)",
    options: ["15 m", "22.5 m", "25 m", "30 m"],
    answer: "22.5 m",
    solution: "h = ut - 1/2gt² = 20×1.5 - 5×(1.5)² = 30 - 11.25 = 18.75 m"
  },
  {
    question: "A body under uniform acceleration travels 100 m in 5 s, starting from rest. Find a.",
    options: ["4 m/s²", "5 m/s²", "6 m/s²", "8 m/s²"],
    answer: "8 m/s²",
    solution: "s = 1/2at² ⇒ 100 = 0.5×a×25 ⇒ a = 200 / 25 = 8 m/s²"
  },
  {
    question: "If v = u + at and s = ut + 1/2at², eliminate a to get relation between s, u, v, and t.",
    options: ["s = (u+v)t/2", "s = v² - u²", "s = ut", "s = vt + 1/2at²"],
    answer: "s = (u+v)t/2",
    solution: "Using 1st and 2nd equations, eliminating a gives s = (u+v)t/2"
  },
  {
    question: "A body thrown up reaches max height in 3 s. Total time of flight?",
    options: ["3 s", "4 s", "6 s", "9 s"],
    answer: "6 s",
    solution: "Time to reach ground = 2 × time to max height = 2 × 3 = 6 s"
  },
  {
    question: "A particle moves with uniform acceleration and covers 80 m in 4 s, final velocity is 25 m/s. Find initial velocity.",
    options: ["5 m/s", "10 m/s", "15 m/s", "20 m/s"],
    answer: "15 m/s",
    solution: "s = (u + v)t/2 ⇒ 80 = (u + 25)×4 / 2 ⇒ 80 = 2(u + 25) ⇒ u + 25 = 40 ⇒ u = 15 m/s"
  },
  {
    question: "A vehicle slows from 25 m/s to rest in 5 s. Distance covered?",
    options: ["25 m", "62.5 m", "75 m", "100 m"],
    answer: "62.5 m",
    solution: "s = (u + v)t/2 = (25 + 0)×5/2 = 125/2 = 62.5 m"
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