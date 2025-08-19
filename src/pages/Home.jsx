import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import ImageContainer from "./ImageContainer";
import Loader from "../components/Loader";
import toast from "react-hot-toast";

function Home() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const ACCESS_KEY = "5mSf-VRTDyy79Tbp3nVJRSoLAdPwONBqrLWRROqhRLo";

  const fetchImages = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}&page=${page}&per_page=10`
      );
      const data = await res.json();
      setImages((prev) => [...prev, ...data]);
    } catch (error) {
      console.error("Xatolik:", error);
      toast.error(error.message)
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchImages();
  }, [page]);

  return (
    <div className="my-5 mx-5">
      {images && images.length > 0 ? (
        <ImageContainer images={images} />
      ) : (
        <Loader />
      )}

      <div className="flex justify-center">
        <button
          className="btn w-[90%] my-14 h-20 text-4xl"
          onClick={() => setPage((prev) => prev + 1)}
          disabled={loading}
        >
          {loading ? "Yuklanmoqda..." : "More"}
        </button>
      </div>
    </div>
  );
}

export default Home;
