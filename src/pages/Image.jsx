import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { FcLike, FcLikePlaceholder } from 'react-icons/fc'
import { LiaDownloadSolid } from 'react-icons/lia'
import { Link } from 'react-router-dom'

function Image({ image, keys }) {
  const { alt_description, urls, user, links } = image
  const [like, setLike] = useState(false)

  const handleLike = () => {
    setLike(true)
    toast('Liked!', {
      icon: '❤️',
    })
  }
  const handleLike2 = () => {
    setLike(false)
    toast('Dislike', {
      icon: '💔',
    })
  }
  const downloadImage = e => {
    e.preventDefault()
    if (!user) {
      return toast.success('Please verify your email, go to profile')
    }
    window.open(links.download + '&force=true', '_blank')
  }

  return (
    <div className='relative'>
      <img src={urls.full} alt={alt_description} />
      <div className='absolute top-2 right-4'>
        {like ? (
          <FcLike
            className='text-3xl cursor-pointer'
            onClick={() => handleLike2()}
          />
        ) : (
          <FcLikePlaceholder
            className='text-3xl cursor-pointer'
            onClick={() => handleLike()}
          />
        )}
      </div>
      <div className='w-full h-[40px] absolute bottom-[1px] flex items-center justify-between py-4 px-4 my-2'>
        <Link
          to={user.portfolio_url}
          target='_blank'
          className='flex items-center justify-center gap-2 opacity-60 hover:opacity-100 cursor-pointer'
        >
          <img
            src={user.profile_image.small}
            alt='user_img'
            className='rounded-full'
          />
          <p>{user.name}</p>
        </Link>
        <div>
          <a
            onClick={event => downloadImage(event)}
            download
            rel='noopener noreferrer'
            className='w-[60px] h-[40px] bg-transparent  border-[3px] flex items-center justify-center rounded-lg opacity-60 hover:opacity-100 cursor-pointer'
          >
            <LiaDownloadSolid className='text-4xl' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Image
