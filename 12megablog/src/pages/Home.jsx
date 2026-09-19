import React,{useEffect,useState} from 'react'
import {container,AllPost,PostCard} from '../components/index'
import service from '../appwrite/config'


const Home = () => {
    const [posts,setPosts] = useState([])
    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if(posts){
                setPosts(posts.documents)
            }
        })
    },[])
  
    if(posts.length === 0){
        return (
            <div className='w-full h-full flex justify-center items-center'>
                <container>
                    <h1 className='text-2xl font-bold'>No posts found</h1>
                </container>
            </div>
        )
    }
    else{
        return (
            <div className='w-full h-full flex justify-center items-center'>
                <container>
                   {posts.map((post) => (
                        <div className='col-span-1' key={post.$id}>
                            <PostCard key={post.$id} {...post} />
                        </div>
                    ))}
                </container>
            </div>
        )
    }

}

export default Home