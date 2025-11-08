import React, { useState, useEffect } from 'react';
import { productData } from '../data/productData';
import { initializeZendesk, openZendeskWidget, isZendeskAvailable } from '../utils/zendesk';
import { ZENDESK_CONFIG } from '../config/zendesk';
import './ProductFinder.css';

const ProductFinder = () => {
  const [currentQuestionId, setCurrentQuestionId] = useState('q1');
  const [answers, setAnswers] = useState([]);
  const [foundProduct, setFoundProduct] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = productData.questions[currentQuestionId];

  // Initialize Zendesk widget on component mount
  useEffect(() => {
    if (ZENDESK_CONFIG.enabled && ZENDESK_CONFIG.key && ZENDESK_CONFIG.key !== 'YOUR_ZENDESK_KEY') {
      initializeZendesk(ZENDESK_CONFIG.key);
    }
  }, []);

  // Handle opening Zendesk widget with product context
  const handleAskQuestion = () => {
    if (foundProduct) {
      openZendeskWidget(foundProduct);
    }
  };

  const handleAnswerSelect = (answer) => {
    const newAnswer = {
      questionId: currentQuestionId,
      questionText: currentQuestion.text,
      answerId: answer.id,
      answerText: answer.text
    };

    const updatedAnswers = [...answers, newAnswer];
    setAnswers(updatedAnswers);

    // Check if this answer leads to a product or another question
    if (answer.productId) {
      // Found a product!
      const product = productData.products[answer.productId];
      setFoundProduct(product);
      setShowResult(true);
    } else if (answer.nextQuestion) {
      // Move to next question
      setCurrentQuestionId(answer.nextQuestion);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionId('q1');
    setAnswers([]);
    setFoundProduct(null);
    setShowResult(false);
  };

  const handleBack = () => {
    if (answers.length > 0) {
      const previousAnswers = answers.slice(0, -1);
      setAnswers(previousAnswers);
      
      if (previousAnswers.length > 0) {
        const lastAnswer = previousAnswers[previousAnswers.length - 1];
        // Find the question that led to the current one
        const question = productData.questions[lastAnswer.questionId];
        const selectedAnswer = question.answers.find(a => a.id === lastAnswer.answerId);
        
        if (selectedAnswer && selectedAnswer.nextQuestion) {
          setCurrentQuestionId(selectedAnswer.nextQuestion);
        } else {
          setCurrentQuestionId(lastAnswer.questionId);
        }
      } else {
        setCurrentQuestionId('q1');
      }
      
      setShowResult(false);
      setFoundProduct(null);
    }
  };

  if (showResult && foundProduct) {
    return (
      <div className="product-finder">
        <div className="finder-container">
          <div className="result-section">
            <div className="success-icon">✓</div>
            <h2>We Found Your Product!</h2>
            <div className="product-card">
              {foundProduct.imageUrl && (
                <div className="product-image-container">
                  <img 
                    src={foundProduct.imageUrl} 
                    alt={foundProduct.name}
                    className="product-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              )}
              <h3>{foundProduct.name}</h3>
              <p className="product-description">{foundProduct.description}</p>
              {foundProduct.price && (
                <div className="product-price">{foundProduct.price}</div>
              )}
              <div className="product-features">
                <h4>Key Features:</h4>
                <ul>
                  {foundProduct.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="action-buttons">
              {ZENDESK_CONFIG.enabled && ZENDESK_CONFIG.key && ZENDESK_CONFIG.key !== 'YOUR_ZENDESK_KEY' && (
                <button onClick={handleAskQuestion} className="btn btn-zendesk">
                  💬 Ask Questions About This Product
                </button>
              )}
              <button onClick={handleRestart} className="btn btn-primary">
                Start Over
              </button>
              <button onClick={handleBack} className="btn btn-secondary">
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!currentQuestion) {
    return (
      <div className="product-finder">
        <div className="finder-container">
          <div className="error-message">
            <h2>Oops! Something went wrong.</h2>
            <button onClick={handleRestart} className="btn btn-primary">
              Start Over
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="product-finder">
      <div className="finder-container">
        <div className="progress-section">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${((answers.length) / (answers.length + 1)) * 100}%` }}
            ></div>
          </div>
          <p className="progress-text">
            Question {answers.length + 1} of {answers.length + 1}+
          </p>
        </div>

        <div className="question-section">
          <h2 className="question-text">{currentQuestion.text}</h2>
          
          {currentQuestion.imageUrl && (
            <div className="question-image-container">
              <img 
                src={currentQuestion.imageUrl} 
                alt={currentQuestion.text}
                className="question-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          )}
          
          <div className="answers-container">
            {currentQuestion.answers.map((answer) => (
              <button
                key={answer.id}
                className="answer-button"
                onClick={() => handleAnswerSelect(answer)}
              >
                {answer.imageUrl && (
                  <img 
                    src={answer.imageUrl} 
                    alt={answer.text}
                    className="answer-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                )}
                <span className="answer-text">{answer.text}</span>
              </button>
            ))}
          </div>
        </div>

        {answers.length > 0 && (
          <div className="navigation-section">
            <button onClick={handleBack} className="btn btn-back">
              ← Back
            </button>
          </div>
        )}

        <div className="answers-history">
          <h3>Your Answers:</h3>
          <div className="history-list">
            {answers.map((answer, index) => {
              const question = productData.questions[answer.questionId];
              const answerData = question?.answers.find(a => a.id === answer.answerId);
              return (
                <div key={index} className="history-item">
                  <span className="history-question">{answer.questionText}</span>
                  <div className="history-answer-content">
                    {answerData?.imageUrl && (
                      <img 
                        src={answerData.imageUrl} 
                        alt={answer.answerText}
                        className="history-answer-image"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    )}
                    <span className="history-answer">→ {answer.answerText}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFinder;

