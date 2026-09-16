import React,{useCallback,useEffect} from 'react'
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
        const file = await appwriteservice.uploadFile(data.image[0])
        if(file){
            const fileId=file.$id
            data.featuredImage=fileId
            const dbPost = await appwriteservice.createPost({...data,featuredImage:file.$id,userId:user.$id})
            if(dbPost){
                navigate(`/post/${dbPost.$id}`)
            }
        }

    }
}
const slugTransform = useCallback((value) => {
    if(value && typeof value === "string"){
        return value.toLowerCase().replace(/ /g,"-").replace(/[^\w-]+/g,"")
    }
}, [])

useEffect(() => {
    const subscription=watch((value,{name}) => {
        if(name === "title"){
            setValue("Slug",slugTransform(value.title),{shouldValidate:true})
        }
    })

    return () => subscription.unsubscribe()
}, [slugTransform,watch,setValue])

  return (
        <form onSubmit={handleSubmit(submit)} className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 rounded-lg bg-white p-6 shadow-md lg:grid-cols-3">
            <div className="space-y-5 lg:col-span-2">
                <Input
                    label="Title"
                    placeholder="Enter post title"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
                    {...register("title")}
                />

                <RTE
                    name="content"
                    control={control}
                    label="Content"
                    defaultValue={post?.content || ""}
                />
            </div>

            <div className="space-y-5 border-t border-gray-200 pt-5 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
                <Input
                    label="Slug"
                    placeholder="Enter post slug"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-blue-500"
                    {...register("Slug")}
                />

                <div>
                    <label htmlFor="status" className="mb-1 inline-block pl-1">
                        Status
                    </label>
                    <select
                        id="status"
                        className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 outline-none focus:border-blue-500"
                        {...register("Status")}
                    >
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                </div>

                <Input
                    label="Featured image"
                    type="file"
                    accept="image/*"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                    {...register("image")}
                />

                <Button type="submit" bgColor="bg-blue-600" className="w-full hover:bg-blue-700">
                    {post ? "Update post" : "Create post"}
                </Button>
            </div>
        </form>
  )
}

export default PostForm