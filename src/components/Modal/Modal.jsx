import { Component } from "react";
import css from './Modal.module.css'

class Modal extends Component {

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown);
      }
    
      componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown);
      }
    
      handleKeyDown = e => {
        if (e.key === 'Escape') {
          this.props.onCloseModal();
        }
      };
    
      handleCloseClick = () => {
        this.props.onCloseModal();
      };

      stopClick = (e) => {
        e.preventDefault();
      }

    render() {
        const {image, tag} = this.props
        return(
            <div className={css.overlay} onClick={this.handleCloseClick}>
                <div className={css.modal}>
                    <img className={css.image} src={image} alt={tag} onClick={this.stopClick}/>
                </div>
            </div>
        )
    }
}

export default Modal