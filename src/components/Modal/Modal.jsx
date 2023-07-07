import { Component } from "react";

class Modal extends Component {

    handleClose = e => {
        if (e.key === 'ESCAPE') {
            
        }
    }

    componentDidMount() {

    }

    render() {
        const {image, tag} = this.props
        return(
            <div className="overlay">
                <div className="modal">
                    <img src={image} alt={tag} />
                </div>
            </div>
        )
    }
}

export default Modal