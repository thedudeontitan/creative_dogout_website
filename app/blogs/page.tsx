"use client"
import React from 'react'
import Image from 'next/image'
import { FiArrowRight } from 'react-icons/fi'
import { blogs } from '../(models)/blog'
import { useRouter } from 'next/navigation'

export default function Blogs() {
    const router = useRouter();

    const handleClick = (e: any, href: string) => {
        e.preventDefault()
        router.push(href);
    }
    return (
        <section>
            <div className=' overflow-hidden'>
                <div className='relative h-screen '>
                    <Image src="/blogplaceholder.jpg" alt='blog image' fill style={{ objectFit: "cover" }} />
                </div>
                <div className="absolute top-0 bg-black bg-opacity-60 flex flex-col border-white min-h-screen w-full">
                    <div className='flex h-full border-x mx-2 min-h-screen '>
                        <div className=" flex flex-col-reverse lg:flex-col justify-center lg:justify-normal w-full">

                            {/* <div className="p-5 lg:p-0 text-xl lg:text-4xl text-white font-medium lg:ml-80 xl:ml-[110vh] lg:mr-20 lg:mt-40 xl:mt-60 xl:mb-20">
                                We at Creative Dugout foster trust and credibility through impactful brand communications.

                            </div> */}
                            <div className='border-t border-white flex lg:hidden '></div>

                            <div className="p-5 lg:p-0 text-2xl lg:text-8xl text-white font-medium lg:mt-auto lg:ml-auto ">
                                Discover Our Latest Insights
                            </div>
                            <div className='border-t border-white hidden lg:flex w-full mb-20'></div>

                        </div>
                    </div>
                </div>
            </div>
            <div className='relative min-h-screen pb-20 p-5 bg-white text-black'>
                {blogs.map((blog) => (
                    <div key={blog.key} className='lg:mt-20 xl:ml-96'>
                        <div className='lg:w-[150vh] lg:h-[60vh] my-10 overflow-clip flex items-center'>
                            <div className='h-[30vh] w-full lg:h-[75vh] relative hover:scale-110 transition-all duration-500'>
                                <Image src={blog.image} alt="blog image" fill={true} style={{ objectFit: "cover" }} />
                            </div>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <span className='text-xl lg:text-5xl font-medium'>{blog.title}</span>
                            <span className='text-lg lg:text-2xl '>{blog.highlight}</span>
                            <button onClick={() => (router.push(`/blogs/${blog.key}`))} className='w-fit lg:text-xl bg-black text-white px-4 py-2'>Read Article <FiArrowRight className='inline-block' /></button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
