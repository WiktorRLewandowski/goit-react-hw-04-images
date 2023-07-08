import { GalleryItem } from "components/GalleryItem"
import css from './Gallery.module.css'
import PropTypes from 'prop-types'

export const Gallery = ({images, onClick}) => (
      <ul className={css.gallery}>
        {images.map(({webformatURL, id, tags, largeImageURL})=> {
          return (
            <GalleryItem
            key={id}
            webformatURL={webformatURL}
            tags={tags}
            onClick={onClick}
            largeImageURL={largeImageURL}/> 
          )
        })}
      </ul>
)

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  onClick: PropTypes.func
}