import css from './GalleryItem.module.css'
import PropTypes from 'prop-types'

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

GalleryItem.propTypes = {
    webformatURL: PropTypes.string, 
    tags: PropTypes.string, 
    onClick: PropTypes.func, 
    largeImageURL: PropTypes.string
}