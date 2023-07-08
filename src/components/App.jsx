import { Component } from "react";
import { SearchBar } from "./SearchBar";
import { Gallery } from "./Gallery";
import { Button } from "./Button";
import { Loader } from "./Loader";
import Modal from "./Modal/Modal";

import { fetchImages } from "services";

import { Notify } from "notiflix";

class App extends Component {
  state = {
    images: [],
    error: null,
    page: 2, //łopatnicze, ale działa...
    isLoading: false,
    searchValue: '',
    showModal: false,
    modalImage: ''
  }

  componentDidMount = async () => {
    this.setState({isLoading: true})
    await fetchImages()
    .then(images => this.setState({images}))
    .catch(error => this.setState({error}))
    .then(()=> this.setState({isLoading: false}))
  }

  handleSubmit = async e => {
    e.preventDefault()
    this.setState({isLoading:true})
    this.setState({page:2})
    const {value} = e.target.searchQuery
    await fetchImages(value.trim())
    .then(images => images.length === 0 
      ? Notify.failure('Sorry, pal. No photos for ya!') 
      : this.setState({images, searchValue:value}))
    .catch(error => this.setState({error}))
    .then(()=> this.setState({isLoading:false}))
  }

  fetchData = async () => {
    const { searchValue, page } = this.state
    this.setState({isLoading: true})
    await fetchImages(searchValue, page)
    .then(images => this.setState(prevState => ({
      images: [
        ...prevState.images, 
        ...images,]
        })
      )
    )
    .catch(error => this.setState({error}))
    .then(()=> this.setState({isLoading: false}))
  }

  loadMoreButton = () => {
    this.setState((prevState => ({ page: prevState.page +1 })))
    this.fetchData()
  }

  imageClick = e => {
    this.setState({showModal: true, modalImage: e, isLoading: true})
    setTimeout(()=> this.setState({isLoading:false}), 250)
  }

  modalClose = (e) => {
    // if (e.target.nodeName === 'IMG') return // yo, y u no workin'
    this.setState({showModal: false})
  }

  render() {
    const {images, error, isLoading, showModal, modalImage} = this.state
    if(error) {
      return (
      <div>Ooopsie, all went to shit...</div>
      )
    }

    return (
      <>
      {showModal && <Modal onClick={this.modalClose} onCloseModal={this.modalClose} image={modalImage}/>}
      <SearchBar onSubmit={this.handleSubmit}/>
      {images.length !== 0 && <Gallery images={images} onClick={this.imageClick}/>}  
      {isLoading === true && <Loader/>}
      {images.length >= 12 && <Button onClick={this.loadMoreButton}/>}
      
      </>
    )
  }
};

export default App