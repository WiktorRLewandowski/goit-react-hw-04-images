import { Component } from "react";

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

    render() {
        const {image, tag} = this.props
        return(
            <div className="overlay" onClick={this.handleCloseClick}>
                <div className="modal">
                    <img src={image} alt={tag} />
                </div>
            </div>
        )
    }
}

export default Modal