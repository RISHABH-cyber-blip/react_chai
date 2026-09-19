import React from 'react'
import {postForm,container} from '../components/index'

const AddPost = () => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <container>
        <postForm />
      </container>
    </div>
  )
}

export default AddPost