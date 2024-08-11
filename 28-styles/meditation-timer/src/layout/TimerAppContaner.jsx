import PropTypes from 'prop-types'
import styled from 'styled-components'

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const TimerAppContaner = ({ children }) => {
  return <Layout>{children}</Layout>
}

TimerAppContaner.propTypes = {
  children: PropTypes.node.isRequired,
}
