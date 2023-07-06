import { Component } from "react";
import { SearchBar } from "./SearchBar";

import { fetchImages } from "services";

import { ThreeCircles } from "react-loader-spinner";

// const Gallery = ({images}) => (
//   <ul>
//     {images.map(({webformatURL,  id, tags})=> {
//       return (
//         <li key={id}>
//           <img src={webformatURL} alt={tags}/>
//         </li>  
//       )
//     })}
//   </ul>
// ) 

class Gallery extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
  }

  

  async componentDidMount() {
    console.log('did mount gallery')
    // const search = this.props
    this.setState({isLoading: true})
    try {
      const images = await fetchImages()
      this.setState({images})
      console.log('fetch on mount gallery')
      }  
    catch (error) {
      this.setState({ error })
      console.log(error)
    }
    finally {
      this.setState({isLoading: false})
      console.log('gallery mounted')
    }
  } // to chyba w ogóle nie działa

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('should update gallery')
  //   if (nextState.images === this.state.images) {
  //     return false
  //   } else {
  //     return true
  //   }
  // } // galeria generuje nieskończoną pętlę, ale działa jakimś cudem

  shouldComponentUpdate(nextProps, nextState) {
    console.log('should update gallery')
    if (nextProps.search === this.props.search) {
      return false
    } else {
      return true
    }
  }

  async componentDidUpdate() {
    console.log('did update gallery')
    const {search, page} = this.props
    this.setState({isLoading: true})
    try {
      const images = await fetchImages(search.trim(), page)
      // console.log(this.props)
      // console.log(images)
      console.log('loading images')
      this.setState({images})
      }  
    catch (error) {
      this.setState({ error })
    }
    finally {
      console.log('images loaded')
      this.setState({isLoading: false})
    }
  }

  
  
  render() {
    const {images, error, isLoading} = this.state
    
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
    
    return(
      <ul>
       {images.map(({webformatURL,  id, tags})=> {
          return (
            <li key={id}>
              <img src={webformatURL} alt={tags}/>
            </li>  
            )
          })
        }
      </ul>
    )
  }

}


class App extends Component {
  state = {
    search: '',
    value: '',
    error: null,
    page: 1
  }

  componentDidMount = () => {
    console.log('did mount app')
    this.setState({search: ''})
  }

  handleSubmit = e => {
    e.preventDefault()
    // const {value} = this.state
    const {value} = e.target.searchQuery
    this.setState({search: value})
  }

  // handleChange = e => {
  //   this.setState({value: e.target.value})
  // }

  render() {
    const { search } = this.state

    return (
      <>
      <SearchBar onSubmit={this.handleSubmit}/>
      <Gallery search={search}/>
      </>
  )
}
};

export default App