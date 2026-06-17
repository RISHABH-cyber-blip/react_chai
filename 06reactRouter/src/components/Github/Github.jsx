import React,{useEffect,useState} from 'react'


const Github = () => {
    const [data,setData] = useState(null);
    useEffect(()=>{
       fetch("https://api.github.com/users/bajra")
       .then(res=>res.json())
       .then(data=>setData(data))
    },[])
    
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