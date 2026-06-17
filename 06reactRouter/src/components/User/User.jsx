import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
  const { userId } = useParams()
  return (
    <div className="bg-gray-100 p-4 rounded">
      User: {userId}
    </div>
  )
}

export default User