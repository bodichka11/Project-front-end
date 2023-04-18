import React from 'react'
import './TypesEntry.css'

const TypesEntry = ({ brand }: any) => {
  return (
    <div className = "types-entry">
        <h1 className='types-entry__brand'>{brand.brand}</h1>
        <h2 className='types-entry__price'>{brand.price} гривень</h2>
        <h3 className='types-entry__type'>{brand.type}</h3>
        <img className = 'types-entry__url ' src={brand.url} alt="Img" />
        <button> BUY </button>
        
        
        

    </div>
  )
}

export default TypesEntry