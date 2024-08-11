import PropTypes from 'prop-types'
import styled from 'styled-components'

const PageLayout = styled.div`
  position: fixed;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`
export const Layout = ({ children }) => {
  return <PageLayout>{children}</PageLayout>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
