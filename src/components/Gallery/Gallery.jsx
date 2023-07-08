import { GalleryItem } from "components/GalleryItem"
import css from './Gallery.module.css'

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