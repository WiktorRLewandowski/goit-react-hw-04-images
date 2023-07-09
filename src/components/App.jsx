import React, { useState, useEffect } from "react";
import { SearchBar } from "./SearchBar";
import { Gallery } from "./Gallery";
import { Button } from "./Button";
import { Loader } from "./Loader";
import Modal from "./Modal/Modal";

import { fetchImages } from "services";

import { Notify } from "notiflix";

export default function App() {

  const [images, setImages] = useState([])
  const [page, setPage] = useState(2)
  const [searchValue, setSearchValue] = useState('')
  const [modalImage, setModalImage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [error, setError] = useState(null)

  // INITIALIZING FETCH
  useEffect(()=> {
    fetchImages()
    .then(images => setImages(images))
    .catch(error => setError(error))
    .then(()=> setIsLoading(false))
  }, [error])

  const handleSubmit = async e => {
    e.preventDefault()
    setIsLoading(true)
    setPage(2);
    setSearchValue(e.target.searchQuery.value)
    const value = e.target.searchQuery.value //that took some time...
    await fetchImages(value.trim()) 
    .then(images => images.length === 0 
      ? Notify.failure('Sorry, pal. No photos for ya!') 
      : setImages(images))
    .catch(error => setError(error))
    .then(()=> setIsLoading(false))
    e.target.reset()
  }

  async function fetchData() {
    setIsLoading(true)
    await fetchImages(searchValue, page)
    .then(images => setImages(prevState => (
        [
          ...prevState, 
          ...images
        ]
        )
      )
    )
    .catch(error => setError(error))
    .then(()=> setIsLoading(false))
  }


  const loadMoreButton = () => {
    setPage(prevState => prevState + 1)
    fetchData()
  }

  const imageClick = e => {
    setShowModal(true)
    setModalImage(e)
    setIsLoading(true)
    setTimeout(()=> setIsLoading(false), 250)
  }

  const modalClose = (e) => {
    setShowModal(false)
  }

  if(error) {
    return (
    <h1 style={{
      textAlign: 'center',
      lineHeight: '100vh'
    }}>Ooopsie... All went to shit! 💩</h1>
    )
  }
  return (
    <>
    {showModal && <Modal onClick={modalClose} onCloseModal={modalClose} image={modalImage}/>}
    <SearchBar onSubmit={handleSubmit}/>
    {images.length !== 0 && <Gallery images={images} onClick={imageClick}/>}  
    {isLoading === true && <Loader/>}
    {images.length >= 12 && <Button onClick={loadMoreButton}/>}    
    </>
  )
}
