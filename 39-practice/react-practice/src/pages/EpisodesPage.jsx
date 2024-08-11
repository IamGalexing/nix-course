import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { Title } from '../components/title/Title'
import { Filter } from '../components/filter/Filter'
import { CardsList } from '../components/cardsList'
import { EpisodeCard } from '../components/episodes'

export const EpisodesPage = () => {
  const { data, title } = useLoaderData()
  const [filteredEpisodes, setFilteredEpisodes] = useState([])

  useEffect(() => {
    setFilteredEpisodes(data)
  }, [data])

  const handleSetEpisodes = (updatedEpisodesOrder) => {
    setFilteredEpisodes(updatedEpisodesOrder)
  }

  return (
    <>
      <Title text={title}>
        <Filter data={data} onChange={handleSetEpisodes} />
      </Title>
      <CardsList data={filteredEpisodes} Card={EpisodeCard} />
    </>
  )
}
