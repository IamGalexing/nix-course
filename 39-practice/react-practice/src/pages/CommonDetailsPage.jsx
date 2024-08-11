import { useLoaderData } from 'react-router-dom'
import { Breadcrumb } from '../components/breadcrumb'
import PropTypes from 'prop-types'

export const CommonDetailsPage = ({ CardDetails }) => {
  const data = useLoaderData()

  return (
    <>
      <Breadcrumb name={data.name || data.vehicle_name} />
      <CardDetails cardData={data} />
    </>
  )
}

CommonDetailsPage.propTypes = {
  CardDetails: PropTypes.elementType.isRequired,
}
