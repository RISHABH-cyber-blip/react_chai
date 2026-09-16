import React,{useEffect,useState} from 'react'
import {Container,postForm} from '../components/index'
import service from '../appwrite/config'
import { useNavigate , useParams} from 'react-router-dom'


const EditPost = () => {
    const [post,setPost] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if(slug){
            service.getPostBySlug(slug).then((post) => {
                if(post){
                    setPost(post)
                }
                else{
                    navigate("/")
                }
            })
        }
    },[slug,navigate])

  return post ? (
    <div className='w-full h-full flex justify-center items-center'>
      <Container>
        <postForm post={post} />
      </Container>
    </div>
  ) : null
}

export default EditPost