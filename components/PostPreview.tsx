import React from 'react'
import { BlogPost } from '../interfaces/blog'

const PostPreview = ({id, bodyText, title, createdAt, tags, author }: BlogPost) => {
    createdAt = new Date(createdAt).toLocaleDateString('en-US',{
        year:'numeric',
        month:'short',
        day:'2-digit'
    })
  return (
    <div>
        <div className="flex">
            <img src={author.avatar} className='rounded-full mb-4 mr-4 overflow-hidden' width={50} height={50} alt='Author Avatar' />
            <div>
                <p className='font-semibold text-[1rem]'>{author.name}</p>
                <div className="flex gap-4 font-normal text-[0.85rem]">
                    <li className='list-none '>{author.url}</li>
                    <li className='ml-2 '>{createdAt}</li>
                </div>
            </div>
        </div>
        <h2 className='font-bold'>{title}</h2>
        <p className="mt-2 line-clamp-3">{bodyText}</p>
        <div className="flex gap-3">
            {tags.map((tag: string, idx: number)=>{
                return(
                    <div key={idx} className='bg-sky-600 px-2 mt-2 font-semibold rounded-xl text-zinc-800'>{tag}</div>
                )
            })}
        </div>
    </div>
  )
}

export default PostPreview