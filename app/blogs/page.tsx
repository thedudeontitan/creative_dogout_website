import React from 'react'
import Image from 'next/image'
import { FiArrowRight } from 'react-icons/fi'

export default function page() {
    return (
        <section>
            <div className='h-screen'>
                <Image src="/blogplaceholder.jpg" alt='blog image' fill={true} />
            </div>
            <div className='relative min-h-screen pb-20'>
                <div className='lg:mt-20 lg:ml-96'>
                    <div className='lg:w-[150vh] lg:h-[60vh] my-10 overflow-clip flex items-center'>
                        <div className='w-[150vh] h-[75vh] relative hover:scale-110 transition-all duration-500'>
                            <Image src="/blog 1.jpg" alt="blog image" fill={true} />
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <span className='text-5xl font-medium'>Does your brand stand out? How you can do so?</span>
                        <span className='text-2xl '>With over billions of businesses trying to stand apart from their competitors, understanding what a successful brand identity is an edge that you need to be ahead of your competition.</span>
                        <button className='w-fit text-xl bg-black text-white px-4 py-2'>Read Article <FiArrowRight className='inline-block' /></button>
                    </div>
                </div>
                <div className='lg:mt-20 lg:ml-96'>
                    <div className='lg:w-[150vh] lg:h-[60vh] my-10 overflow-clip flex items-center'>
                        <div className='w-[150vh] h-[100vh] relative hover:scale-110 transition-all duration-500'>
                            <Image src="/blog 2.jpg" alt="blog image" fill={true} />
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <span className='text-5xl font-medium'>Why Brand Strategy is important for a curated Brand Culture</span>
                        <span className='text-2xl '>It’s common for companies to adjust themselves according to changing trends and customer values but it’s important to take a look back at past brand strategies in order to develop a thorough future branding strategy.</span>
                        <button className='w-fit text-xl bg-black text-white px-4 py-2'>Read Article <FiArrowRight className='inline-block' /></button>
                    </div>
                </div>
                <div className='lg:mt-20 lg:ml-96'>
                    <div className='lg:w-[150vh] lg:h-[60vh] my-10 overflow-clip flex items-center'>
                        <div className='w-[150vh] h-[100vh] relative hover:scale-110 transition-all duration-500'>
                            <Image src="/blog 3.jpg" alt="blog image" fill={true} />
                        </div>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <span className='text-5xl font-medium'>Trust Signals: Using them to build, grow and protect your brand!
                        </span>
                        <span className='text-2xl '>Trust. It is the foundation of all relationships including all commercial transactions that millions of people make every day.</span>
                        <button className='w-fit text-xl bg-black text-white px-4 py-2'>Read Article <FiArrowRight className='inline-block' /></button>
                    </div>
                </div>
            </div>
        </section>
    )
}
