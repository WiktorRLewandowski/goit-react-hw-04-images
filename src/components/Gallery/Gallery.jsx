import { GalleryItem } from "components/GalleryItem"

export const Gallery = ({images}) => (
      <ul>
        {images.map(({webformatURL, id, tags, onClick, largeImageURL})=> {
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