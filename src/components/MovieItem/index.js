import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import {
  MovieItemContainer,
  ThumbnailImg,
  ModalContainer,
  CloseButton,
  MoviePlayerContainer,
} from './styledComponents'

import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails
  return (
    <MovieItemContainer>
      <Popup
        modal
        trigger={<ThumbnailImg src={thumbnailUrl} alt="thumbnail" />}
        className="popup-content"
      >
        {close => (
          <ModalContainer>
            <CloseButton
              type="button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose size={20} color="#231f20" />
            </CloseButton>
            <MoviePlayerContainer>
              <ReactPlayer url={videoUrl} controls />
            </MoviePlayerContainer>
          </ModalContainer>
        )}
      </Popup>
    </MovieItemContainer>
  )
}

export default MovieItem
