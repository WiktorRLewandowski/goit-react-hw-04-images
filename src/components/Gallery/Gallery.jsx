
export const Gallery = ({images}) => (
      <ul>
        {images.map(({webformatURL,  id, tags})=> {
          return (
            <li key={id}>
              <img src={webformatURL} alt={tags}/>
            </li>  
          )
        })}
      </ul>
    )
    
    
    // class Gallery extends Component {
    //     state = {
    //       images: [],
    //       isLoading: false,
    //       error: null,
    //     }
      
      
    //     componentDidMount() {
    //       console.log('did mount gallery')
    //       // const search = this.props
    //       this.setState({isLoading: true})
    //        const func = async () => {
    //         try {
    //         const images = await fetchImages()
    //         this.setState({images})
    //         console.log('fetch on mount gallery')
    //         }  
    //         catch (error) {
    //         this.setState({ error })
    //         console.log(error)
    //         }
    //         finally {
    //         this.setState({isLoading: false})
    //         console.log('gallery mounted')
    //         }
    //       }
    //       func()
    //     } // to chyba w ogóle nie działa
      
    //     // shouldComponentUpdate(nextProps, nextState) {
    //     //   console.log('should update gallery')
    //     //   if (nextState.images === this.state.images) {
    //     //     return false
    //     //   } else {
    //     //     return true
    //     //   }
    //     // } // galeria generuje nieskończoną pętlę, ale działa jakimś cudem
      
    //     shouldComponentUpdate(nextProps, nextState) {
    //       console.log('should update gallery')
    //       if (nextProps.search === this.props.search) {
    //         return false
    //       } else {
    //         return true
    //       }
    //     }
      
    //     async componentDidUpdate(prevProps, prevState) {
    //       console.log('did update gallery')
    //       const {search, page} = this.props
    //       this.setState({isLoading: true})
    //       // if (prevProps.search !== this.props.search || prevProps.page !== this.props.page )
    //       const func = async () => { 
    //         try {
    //           const images = await fetchImages(search.trim(), page)
    //           console.log(this.props)
    //           // console.log(images)
    //           console.log('loading images')
    //           this.setState({images})
    //         }  
    //         catch (error) {
    //           this.setState({ error })
    //         }
    //         finally {
    //           console.log('images loaded')
    //           this.setState({isLoading: false})
    //         }
    //       }
    //       func()
    //     }
        
        
    //     render() {
    //       const {images, error, isLoading} = this.state
          
    //       if(error) {
    //         return (
    //         <div>Ooopsie, all went to shit...</div>
    //         )
    //       }
      
    //       if (isLoading) {
    //         return (
    //           <ThreeCircles color={'indigo'}/>
    //         )
    //       }
          
    //       return(
    //         <ul>
    //          {images.map(({webformatURL, id, tags})=> {
    //             return (
    //               <li key={id}>
    //                 <img src={webformatURL} alt={tags}/>
    //               </li>  
    //               )
    //             })
    //           }
    //         </ul>
    //       )
    //     }
      
    //   }
      