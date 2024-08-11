import PropTypes from 'prop-types'
import { useState } from 'react'

export const FAQItem = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false)

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer)
  }

  return (
    <li className="faq-item" onClick={toggleAnswer}>
      <div className="faq-question-container">
        <h4 className="question">{question}</h4>
        <span className="icon">{showAnswer ? '-' : '+'}</span>
      </div>
      <p style={{ display: showAnswer ? 'block' : 'none' }}>{answer}</p>
    </li>
  )
}

FAQItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
}
