import React from 'react'
import {postForm,Container} from '../components/index'

const AddPost = () => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <Container>
        <postForm />
      </Container>
    </div>
  )
}

export default AddPost