import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { ROUTES } from './routes'
import { RootLayout } from './layouts/RootsLayout'
import { detailsLoader, pageLoader } from './loaders'
import { CharacterCard, CharacterDetails } from './components/characters'
import { PlanetCard, PlanetsDetails } from './components/planets'
import { SpeciesCard, SpeciesDetails } from './components/species'
import { VehicleCard, VehiclesDetails } from './components/vehicles'
import { StarshipCard, StarshipsDetails } from './components/starships'
import { EpisodesPage, NotFoundPage, ErrorPage, CommonPage as Page, CommonDetailsPage as DetailsPage } from './pages'
import { EpisodeDetails } from './components/episodes'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Navigate to={ROUTES.EPISODES} />} />
      <Route path={ROUTES.EPISODES} errorElement={<ErrorPage />}>
        <Route index loader={pageLoader} element={<EpisodesPage />} />
        <Route path=":id" loader={detailsLoader} element={<DetailsPage CardDetails={EpisodeDetails} />} />
      </Route>
      <Route path={ROUTES.CHARACTERS} errorElement={<ErrorPage />}>
        <Route index loader={pageLoader} element={<Page Card={CharacterCard} />} />
        <Route path=":id" loader={detailsLoader} element={<DetailsPage CardDetails={CharacterDetails} />} />
      </Route>
      <Route path={ROUTES.PLANETS} errorElement={<ErrorPage />}>
        <Route index loader={pageLoader} element={<Page Card={PlanetCard} />} />
        <Route path=":id" loader={detailsLoader} element={<DetailsPage CardDetails={PlanetsDetails} />} />
      </Route>
      <Route path={ROUTES.SPECIES} errorElement={<ErrorPage />}>
        <Route index loader={pageLoader} element={<Page Card={SpeciesCard} />} />
        <Route path=":id" loader={detailsLoader} element={<DetailsPage CardDetails={SpeciesDetails} />} />
      </Route>
      <Route path={ROUTES.VEHICLES} errorElement={<ErrorPage />}>
        <Route index loader={pageLoader} element={<Page Card={VehicleCard} />} />
        <Route path=":id" loader={detailsLoader} element={<DetailsPage CardDetails={VehiclesDetails} />} />
      </Route>
      <Route path={ROUTES.STARSHIPS} errorElement={<ErrorPage />}>
        <Route index loader={pageLoader} element={<Page Card={StarshipCard} />} />
        <Route path=":id" loader={detailsLoader} element={<DetailsPage CardDetails={StarshipsDetails} />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
