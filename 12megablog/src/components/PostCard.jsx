import React from 'react'
import appwriteService from '../appwrite/Config'

const PostCard = ({$id,title,featuredImage}) => {
  return (
    <Link to={`/post/${$id}`}>
      <div className='border rounded-md overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300'>
        <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className='w-full h-48 object-cover' />
        <div className='p-4'>
          <h2 className='text-lg font-semibold mb-2'>{title}</h2>
        </div>
      </div>
    </Link>
  )
}

export default PostCard
