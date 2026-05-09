//tem que receber o vetor de fotos
//para cada foto, produzir um Imagem, passando src e alt como props
//fazer esse exercício
import React from 'react'
import Imagem from './Imagem'

const ListaImagens = ({photos, imgStyle}) => {
  return (
    photos.map((photo, key) =>(
      <Imagem
        imgStyle={imgStyle} 
        src={photo.src.small} 
        alt={photo.alt} 
        key={key}/>
    ))
  )
}

export default ListaImagens