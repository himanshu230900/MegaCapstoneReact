import React from 'react'
import service from "../appwrite/config"
import { Link } from 'react-router-dom'

function PostCard({
    $id,
    title,
    featuredImage
}) {
  return (
    <Link to={`/post/${$id}`} className="block group">
        <div className='modern-card p-6 h-full overflow-hidden'>
            <div className='relative mb-6 overflow-hidden rounded-2xl'>
                <img 
                    src={service.getFilePreview(featuredImage)} 
                    alt={title}
                    className='w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110'
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Read More Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-primary-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    Read More
                </div>
            </div>
            
            <div className="space-y-3">
                <h2 className='text-xl font-bold text-neutral-800 group-hover:text-primary-600 transition-colors duration-200 line-clamp-2 leading-tight'>
                    {title}
                </h2>
                
                <div className="flex items-center justify-between text-sm text-neutral-500">
                    <div className="flex items-center space-x-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>5 min read</span>
                    </div>
                    
                    <div className="flex items-center space-x-1 text-primary-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default PostCard
