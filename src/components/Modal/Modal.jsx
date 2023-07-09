import { useEffect } from "react";
import css from './Modal.module.css'
import PropTypes from 'prop-types'

export default function Modal({onCloseModal, image}) {

  useEffect(()=> {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        onCloseModal()
      }
    }
    
    document.addEventListener('keydown', handleKeyDown)
    
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }

  }, [onCloseModal])

  const handleCloseClick = () => {
    onCloseModal();
  };
  
  const stopClick = (e) => {
    e.preventDefault();
  }

  return(
      <div className={css.overlay} onClick={handleCloseClick}>
          <div className={css.modal}>
              <img className={css.image} src={image} alt={"dis but a big img"} onClick={stopClick}/>
          </div>
      </div>
  )
}

Modal.propTypes = {
  image: PropTypes.string,
}