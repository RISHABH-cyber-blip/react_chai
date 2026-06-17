import React,{useEffect,useState} from 'react'
import { useLoaderData } from 'react-router-dom'


const Github = () => {
    const data = useLoaderData();
    
  return (
    <div
      className="bg-gray-700 p-4 rounded text-center text-xl text-black"
    >
      {data ? `Github followers: ${data.followers}` : 'Loading...'}
      <img src={data?.avatar_url} alt="avatar" className="w-20 h-20 rounded-full mx-auto mt-4"/>
    </div>
  )
}

export default Github

export const githubLoader = async () => {
  const response = await fetch('https://api.github.com/users/RISHABH-cyber-blip');
  return response.json();
}