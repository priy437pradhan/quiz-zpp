import React, { useState, useEffect } from "react";
import questions from "./questions";

const QUESTION_VERSION = "chem1";

export  function App() {
  const [storage] = useState(() => {
    return window.quizAppStorage ? JSON.parse(window.quizAppStorage) : {};
  });

  const saved = storage;

  const [userAnswers, setUserAnswers] = useState(
    saved.version === QUESTION_VERSION ? saved.answers || {} : {}
  );
  const [submitted, setSubmitted] = useState(
    saved.version === QUESTION_VERSION ? saved.submitted || false : false
  );
  const [showAnswerKey, setShowAnswerKey] = useState(false);

  useEffect(() => {
    if (submitted) {
      window.onbeforeunload = () => "Quiz submitted. You can't refresh!";
    } else {
      window.onbeforeunload = null;
    }
  }, [submitted]);

  const handleOptionChange = (qIndex, option) => {
    const updatedAnswers = {
      ...userAnswers,
      [qIndex]: option,
    };
    setUserAnswers(updatedAnswers);

    const dataToStore = JSON.stringify({
      version: QUESTION_VERSION,
      answers: updatedAnswers,
      submitted,
    });
    window.quizAppStorage = dataToStore;
  };

  const handleSubmit = () => {
    setSubmitted(true);
    const dataToStore = JSON.stringify({
      version: QUESTION_VERSION,
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

  const answerDetailsStyle = {
    textAlign: "right",
    minWidth: "200px",
  };

  const correctAnswerStyle = {
    color: "#16a34a",
    fontWeight: "600",
    fontSize: "14px",
  };

  const userAnswerStyle = {
    color: "#dc2626",
    fontWeight: "600",
    fontSize: "14px",
    marginTop: "4px",
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

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>🧪 Multiple Choice Quiz</h1>
      
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
            <div style={answerKeyStyle}>
              <h3 style={answerKeyHeaderStyle}>📋 Answer Key</h3>
              {questions.map((q, i) => {
                const userAnswer = userAnswers[i];
                const isCorrect = userAnswer === q.answer;
                const points = !userAnswer ? 0 : isCorrect ? 4 : -1;

                return (
                  <div key={i} style={answerItemStyle}>
                    <div style={answerQuestionStyle}>
                      <strong>Q{i + 1}:</strong> {q.question}
                    </div>
                    <div style={answerDetailsStyle}>
                      <div style={correctAnswerStyle}>✅ Correct: {q.answer}</div>
                      {userAnswer && userAnswer !== q.answer && (
                        <div style={userAnswerStyle}>❌ Your answer: {userAnswer} ({points} points)</div>
                      )}
                      {userAnswer && userAnswer === q.answer && (
                        <div style={{ ...correctAnswerStyle, marginTop: "4px" }}>
                          🎯 Your answer: {userAnswer} (+{points} points)
                        </div>
                      )}
                      {!userAnswer && (
                        <div style={{ ...userAnswerStyle, color: "#64748b" }}>
                          ⚪ Not answered ({points} points)
                        </div>
                      )}
                    </div>
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