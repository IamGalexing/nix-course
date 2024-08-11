import { FAQItem } from './FAQItem'
import PropTypes from 'prop-types'

export const FAQList = ({ items }) => {
  return (
    <div className="faq">
      <h2>FAQ</h2>
      <ul className="faq-list">
        {items.map((item, index) => (
          <FAQItem key={index} question={item.question} answer={item.answer} />
        ))}
      </ul>
    </div>
  )
}

FAQList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    })
  ).isRequired,
}
