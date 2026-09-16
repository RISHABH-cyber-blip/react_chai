import React,{useCallback} from 'react'
import {useForm,Controller} from 'react-hook-form'
import {Button,Input,Select,RTE} from '../index'
import appwriteservice from '../../appwrite/config'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'

const PostForm = ({post}) => {
const {register,handleSubmit,watch,setValue,getValues,control,formState:{errors}} = useForm({
    defaultValues:{
        title:post?.title || "",
        content:post?.content || "",
        Status:post?.Status || "active",
        Slug:post?.Slug || "",
    }
})

const navigate = useNavigate()
const user = useSelector(state => state.auth.user)
const submit = async (data) => {
    if(data){
        data.image[0] ? appwriteservice.uploadFile(data.image[0]) : null

        if(file){
            appwriteservice.deleteFile(file.FeaturedImage)
        }

        const dbPost=await appwriteservice.updatePost(post.$id,{...data,featuredImage:file ? file.$id : null})

        if(dbPost){
            navigate(`/post/${dbPost.$id}`)
        }
    }
    else{
        
    }
}

  return (
    <div>PostForm</div>
  )
}

export default PostForm