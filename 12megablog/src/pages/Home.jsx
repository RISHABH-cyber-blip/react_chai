import React,{useEffect,useState} from 'react'
import {Container,AllPost} from '../components/index'
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
                <Container>
                    <h1 className='text-2xl font-bold'>No posts found</h1>
                </Container>
            </div>
        )
    }
    else{
        return (
            <div className='w-full h-full flex justify-center items-center'>
                <Container>
                    <AllPost posts={posts} />
                </Container>
            </div>
        )
    }

}

export default Home