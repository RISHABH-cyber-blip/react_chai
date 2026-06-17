import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
  const { userId } = useParams()
  return (
    <div className="bg-gray-700 p-4 rounded text-center text-xl text-black">
      User: {userId}
    </div>
  )
}

export default User