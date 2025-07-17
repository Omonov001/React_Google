import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import ImageContainer from "./ImageContainer";



function Home() {
  const [images, setimages] = useState([])
  const ACCESS_KEY = "5mSf-VRTDyy79Tbp3nVJRSoLAdPwONBqrLWRROqhRLo";
  useEffect(() => {
    fetch(`https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}`)
    .then(res => {
      return res.json()
    })
    .then(data =>{
      setimages(data)
    })
  }, );
  return <div className="my-5 mx-5">{images && <ImageContainer images={images} />}</div>
}

export default Home;
