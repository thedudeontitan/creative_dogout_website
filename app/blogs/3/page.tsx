import Image from 'next/image'
import React from 'react'
import { blogs } from '../../(models)/blog'
import Link from 'next/link'

export default function Blog3() {

  const blog = blogs[2]
  return (
    <div className='bg-slate-100'>
      <div className='flex flex-col lg:flex-row py-20 '>
        <div className='m-5 lg:p-5 p-5 bg-white text-black rounded lg:w-full'>
          <div className='relative lg:h-[60vh] h-[30vh] rounded'>
            <Image src={blog.image} alt='' fill style={{ objectFit: "contain" }} />
          </div>
          <div className='lg:mr-20'>
            <p className='mt-10 mb-5 font-semibold lg:text-4xl text-lg'>
              {blog.title}
            </p>
            <p className='mt-5 mb-5 font-medium lg:text-xl'>
              {blog.highlight}
            </p>
            <p className='lg:text-lg'>
              {blog.content}
            </p>
          </div>
        </div>

        <div className='lg:w-[60vh] h-fit'>
          <div className='m-5 p-5 bg-white rounded flex flex-col gap-5'>
            <div className='flex flex-row justify-center items-center'>
              <div className='border-t border-black w-full' />
              <span className='whitespace-nowrap mx-2'>Recent Post</span>
              <div className='border-t border-black w-full' />
            </div>
            {blogs.map((blog, index) => (
              <div key={index}>

                <Link href={blog.link}>
                  <div className='relative h-[20vh] rounded'>
                    <Image src={blog.image} alt='' fill style={{ objectFit: "contain" }} />
                  </div>
                  <span className='font-bold text-center'>{blog.title}</span>
                </Link>
                {index < blogs.length - 1 ? <div className='w-full border-t border-black border-dashed mt-5' /> : ""}
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  )
}
