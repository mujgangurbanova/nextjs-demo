import React from 'react'
import {notFound} from "next/navigation"

function Blog({searchParams}) {
    if(searchParams.error==="true"){
        throw new Error('Thi is an error')
    }
    if(searchParams.test==="true"){
        notFound
    }
  return (
    <div>
      <h2>Blog Page</h2>
    </div>
  )
}

export default Blog
