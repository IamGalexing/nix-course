import PropTypes from 'prop-types'

export const Article = ({ article }) => {
  return (
    <li key={article.id}>
      <h3>title: {article.title}</h3>
      <p>Author: {article.authors}</p>
      <p>Publication Date: {article.publicationDates}</p>
      <p>Content: {article.content}</p>
    </li>
  )
}

Article.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    authors: PropTypes.string.isRequired,
    publicationDates: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
}
