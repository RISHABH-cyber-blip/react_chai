import React from 'react'
import service from '../appwrite/config'
import {container,PostCard} from '../components/index'

const AllPost = () => { 
    const [posts,setPosts] = React.useState([])

    React.useEffect(() => {},[])
    service.getPosts([]).then((posts) => {
        if(posts){
            setPosts(posts)
        }
    })

  return (
    <div className='w-full h-full flex justify-center items-center'>
      <container>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {posts.map((post) => (
                <div className='col-span-1' key={post.$id}>
                    <PostCard key={post.$id} {...post} />
                </div>
            ))}
        </div>
      </container>
    </div>
  )
}

export default AllPost