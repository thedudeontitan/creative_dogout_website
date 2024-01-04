import React from 'react'
import Image from 'next/image'

function BrandCommunication() {
    return (
        <section className='bg-black'>
            <div className=''>
                <video
                    className=" w-full h-screen object-cover"
                    autoPlay
                    loop
                    muted
                >
                    <source src="video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute top-0 bg-black bg-opacity-60 flex flex-col border-white min-h-screen">
                    <div className='flex h-full border-x mx-2 min-h-screen '>
                        <div className=" flex flex-col-reverse lg:flex-col justify-center lg:justify-normal">

                            <div className="p-5 lg:p-0 text-xl lg:text-4xl text-white font-medium lg:ml-80 xl:ml-[110vh] lg:mr-20 lg:mt-40 xl:mt-60 xl:mb-20">
                                We at Creative Dugout foster trust and credibility through impactful brand communications.

                            </div>
                            <div className='border-t border-white flex lg:hidden '></div>

                            <div className="p-5 lg:p-0 text-2xl lg:text-8xl text-white font-medium lg:mt-40 lg:ml-10">
                                Growth Accelerator for brands!
                            </div>
                            <div className='border-t border-white hidden lg:flex'></div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="border-x mx-2 border-white min-h-screen text-white p-5">
                <div className='mt-10 lg:mt-20 flex flex-col '>
                    <span className='text-2xl lg:text-5xl font-medium lg:mb-10 xl:ml-96 lg:mr-20 lg:mt-20'>Who we are </span>
                    <div className='border-t border-white -mx-5 my-5 lg:my-0'></div>
                    <span className='text-lg lg:text-2xl lg:leading-10 xl:ml-96 lg:mr-40 lg:mt-20'>We are strategists and creators. Being an innovation-driven woman-led company, we are powered by eccentric ideas. Our strategists, creators, designers, and tech enthusiasts deliver visionary solutions by thoroughly interacting with briefs and blending their creative skillset and technological acumen to bring forth authentic and poignant strategies to every client challenge.</span>
                    <span className='text-lg lg:text-2xl lg:leading-10 xl:ml-96 lg:mr-40 lg:mt-10'>Our campaigns do more than merely grab attention - they establish Thought Leadership and make every brand Influential. </span>
                </div>
            </div>
            <div className='h-[60vh] w-full bg-purple-300'></div>
            <div className="border-x mx-2 border-white min-h-screen text-white pb-10 lg:pb-20 p-5">
                <div className='mt-10 lg:mt-20 flex flex-col '>
                    <span className='text-2xl lg:text-5xl font-medium lg:mb-10 xl:ml-96 lg:mr-20 lg:mt-20'>Moving brands across geographical boundaries</span>
                    <div className='border-t border-white -mx-5 my-5 lg:my-0'></div>
                    <span className='text-lg lg:text-2xl lg:leading-10 xl:ml-96 lg:mr-40 lg:mt-20'>Ever since our country has witnessed unprecedented technological growth, upcoming brands have been tapping into technological opportunities. We specialize in offering personalized solutions catered to tech startups and forward-moving companies to unlock go-to-market and growth potential, primed to provide both local visibility and global reach. </span>
                    <span className='text-lg lg:text-2xl lg:leading-10 xl:ml-96 lg:mr-40 lg:mt-10'>Embracing our role as a growth accelerator for brands, we work towards pushing budding brands into leadership positions and actively integrating unique go-to-market and brand strategies. Our highly connected network brings a new level of brilliance to all assignments creating brands and leaders of tomorrow.</span>
                </div>
            </div>
            <div className='h-[60vh] w-full bg-purple-300'></div>

            <div className="border-x mx-2 border-white lg:min-h-screen text-white p-5 pb-10 ">
                <div className='mt-10 lg:mt-20 flex flex-col '>
                    <span className='text-2xl lg:text-5xl font-medium lg:mb-10 xl:ml-96 lg:mr-20 lg:mt-20'>Navigating a world full of possibilities </span>
                    <div className='border-t border-white -mx-5 my-5 lg:my-0'></div>
                    <span className='text-lg lg:text-2xl lg:leading-10 xl:ml-96 lg:mr-40 lg:mt-20'>As client-business models and communication strategies adapt to new realities, we’re especially suited to advance the communication network in a pool of unexplored possibilities through leading-edge analytics, distinctive creativity, persuasive storytelling, prudent stakeholder engagement and refined influencer marketing. With a vision to strengthen the communication industry, we are committed to bringing diverse talents and incorporating global insights to deliver industry-defining work. </span>
                </div>
            </div>
        </section>
    )
}

export default BrandCommunication