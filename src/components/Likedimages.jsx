import React, { useState } from 'react'
import NotFound from '../pages/NotFound'

function Likedimages() {
    const [Likedimages, setLikedimages] = useState ([])
  return (
    <div>
      {Likedimages && Likedimages.length > 0 ? <div></div> : <NotFound/>}
    </div>
  )
}

export default Likedimages
