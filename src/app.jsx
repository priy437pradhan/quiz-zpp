import React, { useState } from "react";
import questions from "./questions";

// Constants for localStorage
const QUESTION_VERSION = "chem2";
const STORAGE_KEY = "quiz-app";

export function App() {
  // Using React state instead of localStorage for demo
  const [userAnswers, setUserAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);

  const handleOptionChange = (qIndex, option) => {
    const updatedAnswers = {
      ...userAnswers,
      [qIndex]: option,
    };
    setUserAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleShowAnswers = () => {
    setShowAnswers(!showAnswers);
  };

  const handleRestart = () => {
    setUserAnswers({});
    setSubmitted(false);
    setShowAnswers(false);
  };

  const score = questions.reduce((acc, q, i) => {
    return userAnswers[i] === q.answer ? acc + 1 : acc;
  }, 0);

  const getScoreColor = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return "#22c55e"; // green
    if (percentage >= 60) return "#f59e0b"; // yellow
    return "#ef4444"; // red
  };

  // Styles
  const containerStyle = {
    maxWidth: "640px",
    margin: "0 auto",
    padding: "16px",
    fontFamily: "sans-serif",
    backgroundColor: "#f8fafc",
    minHeight: "100vh",
  };

  const titleStyle = {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "24px",
    textAlign: "center",
    color: "#1e293b",
  };

  const questionBoxStyle = {
    marginBottom: "24px",
    padding: "20px",
    border: "1px solid #e2e8f0",
    borderRadius: "12px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#ffffff",
  };

  const questionTextStyle = {
    fontWeight: "600",
    marginBottom: "12px",
    fontSize: "16px",
    color: "#374151",
  };

  const labelStyle = {
    display: "block",
    padding: "8px 12px",
    borderRadius: "6px",
    marginBottom: "6px",
    cursor: submitted ? "default" : "pointer",
    transition: "all 0.2s ease",
    border: "1px solid transparent",
  };

  const inputStyle = {
    marginRight: "8px",
  };

  const buttonStyle = {
    backgroundColor: "#3b82f6",
    color: "#fff",
    padding: "12px 24px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "500",
    marginRight: "12px",
    marginBottom: "12px",
    transition: "all 0.2s ease",
  };

  const secondaryButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#64748b",
  };

  const successButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#10b981",
  };

  const resultStyle = {
    marginTop: "24px",
    fontSize: "20px",
    fontWeight: "600",
    textAlign: "center",
    padding: "20px",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    border: "2px solid",
    borderColor: getScoreColor(),
  };

  const answerKeyStyle = {
    marginTop: "24px",
    padding: "20px",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    border: "1px solid #e2e8f0",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const answerKeyTitleStyle = {
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "16px",
    color: "#374151",
    borderBottom: "2px solid #e2e8f0",
    paddingBottom: "8px",
  };

  const answerItemStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "8px 0",
    borderBottom: "1px solid #f1f5f9",
  };

  const correctAnswerStyle = {
    color: "#059669",
    fontWeight: "500",
  };

  const wrongAnswerStyle = {
    color: "#dc2626",
    fontWeight: "500",
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>🧪 Chemistry Quiz</h1>

      {questions.map((q, qIndex) => (
        <div key={qIndex} style={questionBoxStyle}>
          <h2 style={questionTextStyle}>
            {qIndex + 1}. {q.question}
          </h2>
          {q.options.map((option, i) => {
            const isCorrect = option === q.answer;
            const isSelected = userAnswers[qIndex] === option;

            let optionStyle = { ...labelStyle };
            if (submitted) {
              if (isSelected && isCorrect) {
                optionStyle.backgroundColor = "#dcfce7"; // green-100
                optionStyle.borderColor = "#22c55e";
                optionStyle.color = "#166534";
              } else if (isSelected && !isCorrect) {
                optionStyle.backgroundColor = "#fee2e2"; // red-100
                optionStyle.borderColor = "#ef4444";
                optionStyle.color = "#991b1b";
              } else if (!submitted) {
                optionStyle.backgroundColor = "#f8fafc";
              }
            } else {
              optionStyle.backgroundColor = isSelected ? "#dbeafe" : "#f8fafc";
              optionStyle.borderColor = isSelected ? "#3b82f6" : "#e2e8f0";
            }

            return (
              <label key={i} style={optionStyle}>
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
                  <span style={{ marginLeft: "8px", color: "#22c55e" }}>✓</span>
                )}
                {submitted && isSelected && !isCorrect && (
                  <span style={{ marginLeft: "8px", color: "#ef4444" }}>✗</span>
                )}
              </label>
            );
          })}
        </div>
      ))}

      <div style={{ textAlign: "center", marginTop: "24px" }}>
        {!submitted ? (
          <button
            onClick={handleSubmit}
            style={buttonStyle}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#2563eb")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#3b82f6")}
          >
            📝 Submit Quiz
          </button>
        ) : (
          <div>
            <div style={{ ...resultStyle, color: getScoreColor() }}>
              🎯 You scored {score} out of {questions.length}
              <div style={{ fontSize: "16px", marginTop: "8px", color: "#64748b" }}>
                {((score / questions.length) * 100).toFixed(0)}% correct
              </div>
            </div>
            
            <div style={{ marginTop: "20px" }}>
              <button
                onClick={handleShowAnswers}
                style={successButtonStyle}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#059669")}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#10b981")}
              >
                {showAnswers ? "🔼 Hide Answer Key" : "🔽 Show Answer Key"}
              </button>
              
              <button
                onClick={handleRestart}
                style={secondaryButtonStyle}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#475569")}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#64748b")}
              >
                🔄 Restart Quiz
              </button>
            </div>
          </div>
        )}
      </div>

      {submitted && showAnswers && (
        <div style={answerKeyStyle}>
          <h3 style={answerKeyTitleStyle}>📋 Answer Key</h3>
          {questions.map((q, i) => (
            <div key={i} style={answerItemStyle}>
              <div>
                <strong>Q{i + 1}:</strong> {q.question}
              </div>
              <div>
                <div style={correctAnswerStyle}>
                  ✓ Correct: {q.answer}
                </div>
                {userAnswers[i] && userAnswers[i] !== q.answer && (
                  <div style={wrongAnswerStyle}>
                    ✗ Your answer: {userAnswers[i]}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}