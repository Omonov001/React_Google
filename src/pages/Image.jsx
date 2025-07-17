import React, { useState } from "react";
import toast from "react-hot-toast";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { GrInstallOption } from "react-icons/gr";
import { LiaDownloadSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

function Image({ image }) {
  const [like, setlike] = useState(false);
  const { alt_decription, urls, user } = image;
  console.log(user);

  const handleLike = () => {
    setlike(true);
    toast("Liked!", {
      icon: "❤️",
    });
  };
  const handleLike2 = () => {
    setlike(false);
    toast("DisLiked!", {
      icon: "💔",
    });
  };
  return (
    <div className="relative justify-between">
      <img src={urls.full} alt={alt_decription} />
      <div className="absolute top-3 right-4 grid ">
        {like ? (
          <FcLike
            className="text-3xl cursor-pointer"
            onClick={() => handleLike2()}
          />
        ) : (
          <FcLikePlaceholder
            className="text-3xl cursor-pointer"
            onClick={() => handleLike()}
          />
        )}
      </div>
      <div className="w-full h-[40px] absolute bottom-[1px] flex items-center justify-between py-0 px-4 my-2">
        <Link to={user.portfolio_url} target="_blank" className="flex items-center justify-center gap-2">
          <img
            src={user.profile_image.small}
            alt="user_img"
            className="rounded-full"
          />
          <p>{user.name}</p>

        </Link>
                  <div className="mb-4">
            <button className="w-[60px] h-[40px] bg-transparent border-[3px] flex items-center justify-center rounded-lg opacity-60 hover:opacity-100">
              <LiaDownloadSolid className="text-3xl cursor-pointer" />
            </button>
          </div>
      </div>
    </div>
  );
}

export default Image;
