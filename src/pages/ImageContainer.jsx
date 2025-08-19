import React from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import Image from './image.jsx';


function ImageContainer({images}) {
    
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 300: 1, 650: 2, 900: 3,}}>
      <Masonry>
        {images.map (image =>(
          <Image image={image

          }/>
        ))}
      </Masonry>

    </ResponsiveMasonry>


  )
}

export default ImageContainer
