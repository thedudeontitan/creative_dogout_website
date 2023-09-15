import React from 'react'

function page() {
    return (
        <section className='bg-black relative'>
            <video
                className="absolute w-full h-full object-cover"
                autoPlay
                loop
                muted
            >
                <source src="video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute bg-black opacity-60 flex flex-col  border-white min-h-screen">
                <div className='border-x mx-2 min-h-screen'>
                    <div className="flex flex-col justify-center">

                        <div className="text-4xl text-white font-medium lg:ml-[110vh] lg:mr-20 lg:mt-60 mb-20">
                            We at Creative Dugout foster trust and credibility through impactful brand communications.

                        </div>
                        <div className="text-8xl text-white font-medium lg:mt-40 lg:ml-10">
                            Growth Accelerator for brands!
                        </div>
                        <div className='border-t w-full border-white'></div>

                    </div>
                </div>
            </div>
            <div className=" flex flex-col border-x mx-2 border-white min-h-screen">
                <div>
                    <span>Who we are </span>
                    <span>We are strategists and creators. Being an innovation-driven woman-led company, we are powered by eccentric ideas. Our strategists, creators, designers, and tech enthusiasts deliver visionary solutions by thoroughly interacting with briefs and blending their creative skillset and technological acumen to bring forth authentic and poignant strategies to every client challenge. Our campaigns do more than merely grab attention - they establish Thought Leadership and make every brand Influential. </span>
                </div>
            </div>
        </section>
    )
}

export default page