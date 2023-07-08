import css from './GalleryItem.module.css'

export const GalleryItem = ({ webformatURL, tags, onClick, largeImageURL}) => {
    return(
        <li>
            <img 
                className={css.image}
                src={webformatURL} 
                alt={tags}
                onClick={()=> onClick(largeImageURL)}
            />
        </li>  
    )
}