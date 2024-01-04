"use client"
import React from 'react'
import Image from 'next/image'
import { FiArrowRight } from 'react-icons/fi'
import { blogs } from '../(models)/blog'
import { useRouter } from 'next/navigation'

export default function Blogs() {
    const router = useRouter();

    const handleClick = (e:any,href:string) =>{
        e.preventDefault()
        router.push(href);
    }
    return (
        <section>
            <div className=' overflow-hidden'>
                <div className='relative h-screen'>
                    <Image src="/blogplaceholder.jpg" alt='blog image' fill style={{ objectFit: "cover"}}/>
                </div>
            </div>
            <div className='relative min-h-screen pb-20 p-5'>
                {blogs.map((blog)=>(
                    <div key={blog.key} className='lg:mt-20 xl:ml-96'>
                    <div className='lg:w-[150vh] lg:h-[60vh] my-10 overflow-clip flex items-center'>
                        <div className='h-[30vh] w-full lg:h-[75vh] relative hover:scale-110 transition-all duration-500'>
                            <Image src={blog.image} alt="blog image" fill={true} style={{objectFit:"cover"}}/>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <span className='text-xl lg:text-5xl font-medium'>{blog.title}</span>
                        <span className='text-lg lg:text-2xl '>{blog.highlight}</span>
                        <button onClick={()=>(router.push(`/blogs/${blog.key}`))} className='w-fit lg:text-xl bg-black text-white px-4 py-2'>Read Article <FiArrowRight className='inline-block' /></button>
                    </div>
                </div>
                ))}
            </div>
        </section>
    )
}
