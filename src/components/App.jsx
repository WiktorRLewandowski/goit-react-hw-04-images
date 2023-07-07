import { Component } from "react";
import { SearchBar } from "./SearchBar";
import { Gallery } from "./Gallery";

import { fetchImages } from "services";

import { ThreeCircles } from "react-loader-spinner";
class App extends Component {
  state = {
    images: [],
    error: null,
    page: 1,
    isLoading: false
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
    const {value} = e.target.searchQuery
    await fetchImages(value)
    .then(images => this.setState({images}))
    .catch(error => this.setState({error}))
    .then(()=> this.setState({isLoading:false}))
  }

  // handleChange = e => {
  //   this.setState({value: e.target.value})
  // }

  render() {
    const {images, error, isLoading} = this.state
          console.log(images)
    if(error) {
      return (
      <div>Ooopsie, all went to shit...</div>
      )
    }

    if (isLoading) {
      return (
        <ThreeCircles color={'indigo'}/>
      )
    }

    return (
      <>
      <SearchBar onSubmit={this.handleSubmit}/>
      <Gallery images={images}/>
      </>
    )
  }
};

export default App