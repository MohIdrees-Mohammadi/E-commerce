import React from 'react'
import { FaStar } from "react-icons/fa6";

const PeopleComment = ({ comments }) => {
  return (
    <div className="flex flex-wrap justify-center gap-10 m-10">
      {comments.map((comment) => (
        <div
        key={comment.id}
          className="bg-[#FFFFFF] border p-6 w-[350px] h-[210px] rounded-2xl shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="flex  mb-4 text-[#b02d4e]">
            <FaStar className='size-6 text-yellow-400' />
            <FaStar className='size-6 text-yellow-400' />
            <FaStar className='size-6 text-yellow-400' />
            <FaStar className='size-6 text-yellow-400' />
            <FaStar className='size-6 text-yellow-400' />
          </div>
          <p className="text-[18px] text-center mb-2 font-family-serif text-[#8A5C67]">{comment.comment}</p>
          <h1 className="text-[16px] font-family-serif text-[#450817] font-bold">{comment.userName}</h1>
        </div>
      ))}
    </div>
  )
}

export default PeopleComment