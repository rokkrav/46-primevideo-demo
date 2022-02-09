import {
  AppContainer,
  LogoImg,
  MoviesContainer,
  MoviesGenre,
} from './styledComponents'

import MoviesSlider from '../MoviesSlider'

const actionMovie = 'ACTION'
const comedyMovie = 'COMEDY'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMovies = moviesList.filter(
    eachMovie => eachMovie.categoryId === actionMovie,
  )

  const comedyMovies = moviesList.filter(
    eachMovie => eachMovie.categoryId === comedyMovie,
  )

  return (
    <AppContainer>
      <LogoImg
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <MoviesContainer>
        <MoviesGenre>Action Movies</MoviesGenre>
        <MoviesSlider moviesList={actionMovies} />
        <MoviesGenre>Comedy Movies</MoviesGenre>
        <MoviesSlider moviesList={comedyMovies} />
      </MoviesContainer>
    </AppContainer>
  )
}

export default PrimeVideo
