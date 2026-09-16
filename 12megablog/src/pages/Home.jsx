import React,{useEffect,useState} from 'react'
import {Container,AllPost} from '../components/index'
import service from '../appwrite/config'
import PostCard from '../components/postCard'

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
                   {posts.map((post) => (
                        <div className='col-span-1' key={post.$id}>
                            <PostCard key={post.$id} {...post} />
                        </div>
                    ))}
                </Container>
            </div>
        )
    }

}

export default Home