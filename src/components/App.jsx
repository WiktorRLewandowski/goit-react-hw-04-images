import { Component } from "react";
import { SearchBar } from "./SearchBar";
import { Gallery } from "./Gallery";
import { Button } from "./Button";
import Modal from "./Modal/Modal";

import { fetchImages } from "services";

import { ThreeCircles } from "react-loader-spinner";

const Loader = () => <ThreeCircles color="indigo"/>

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
    console.log('mounting component')
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
    .then(images => this.setState({images, searchValue:value}))
    .catch(error => this.setState({error}))
    .then(()=> this.setState({isLoading:false}))
  }

  fetchData = async () => {
    console.log('updating component')
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
    console.log(this.state.page)
    this.fetchData()
  }

  imageClick = e => {
    this.setState({showModal: true, modalImage: e})
  }

  modalClose = () => {
    this.setState({showModal: false})
  }

  // handleChange = e => {
  //   this.setState({value: e.target.value})
  // }

  render() {
    const {images, error, isLoading, showModal, modalImage} = this.state
    console.log(modalImage)
    if(error) {
      return (
      <div>Ooopsie, all went to shit...</div>
      )
    }

    return (
      <>
      <SearchBar onSubmit={this.handleSubmit}/>
      {images.length !== 0 && <Gallery images={images} onClick={this.imageClick}/>}  
      {isLoading === true && <Loader/>}
      {images.length >= 12 && <Button onClick={this.loadMoreButton}/>}
      {showModal && <Modal onClick={this.modalClose} onCloseModal={this.modalClose} image={modalImage}/>}
      </>
    )
  }
};

export default App