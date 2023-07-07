export const GalleryItem = ({ webformatURL, tags, onClick, largeImageURL}) => {
    return(
        <li>
            <img 
                src={webformatURL} 
                alt={tags}
                // onClick={onClick(largeImageURL)}
            />
        </li>  
    )
}