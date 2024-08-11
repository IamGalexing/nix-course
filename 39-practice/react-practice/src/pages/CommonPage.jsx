import { useEffect, useState, useCallback } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { Pagination } from '../components/pagination'
import { Title } from '../components/title/Title'
import { PER_PAGE } from '../constants'
import { CardsList } from '../components/cardsList'
import PropTypes from 'prop-types'

export const CommonPage = ({ Card }) => {
  const { data, totalItems, title } = useLoaderData()
  const [pages, setPages] = useState()
  const [pageSelected, setPageSelected] = useState(1)

  const navigate = useNavigate()

  useEffect(() => {
    setPages(Math.ceil(totalItems / PER_PAGE))
    setPageSelected(1)
  }, [totalItems])

  useEffect(() => {}, [pageSelected])

  const handlePageChange = useCallback(
    (page) => {
      if (pageSelected !== page) {
        setPageSelected(page)
        window.scrollTo({ top: 0, behavior: 'smooth' })
        navigate(`?_page=${page}`)
      }
    },
    [navigate, pageSelected]
  )

  return (
    <>
      <Title text={title} />
      <CardsList data={data} Card={Card} />
      {totalItems > 10 && <Pagination pages={pages} selected={pageSelected} onPageSelected={handlePageChange} />}
    </>
  )
}

CommonPage.propTypes = {
  Card: PropTypes.elementType.isRequired,
}
