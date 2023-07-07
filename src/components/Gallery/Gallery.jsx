import { GalleryItem } from "components/GalleryItem"

export const Gallery = ({images, onClick}) => (
      <ul>
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