'use client';
import React, { useState } from 'react';
import Header from './header';
import Hero from './hero';
import Image from 'next/image';

const HeroWrapper = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className='relative '>
                 {/* Top Left Image */}
                <div className='absolute -top-32 -left-36 h-32 w-32 md:w-96 md:h-96 '>
                    <Image src="/Header_pic.png" alt="hero-left" fill className='object-contain '  />
                </div>

                {/* Top Right Image */}
                <div className='absolute -top-3 -right-3 h-32 w-32 md:w-64 md:h-64 z-10'>
                    <Image src="/Header_pic.png" alt="hero-right" fill className='object-contain' style={{ borderTopRightRadius: '30px', }} />
                </div>
            {/* <div>
                <Image src={} width={} height={} alt=''/>
            </div> */}
            <div className="relative pt-14 mb-8 rounded-2xl overflow-hidden ">
            {/* Shine Border Effect */}
            {!isMenuOpen && <div className="shine-border absolute inset-0 rounded-2xl pointer-events-none z-[100] m-4 mb-0 mt-10 bg-white-500  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-70  "></div>}
            
            {/* Content */}
            <div className="relative z-30 flex flex-col  ">
                {/* Top Left Image */}
                <div className='absolute -top-36 -left-24 h-32 w-32 md:w-96 md:h-96 z-10'>
                    <Image src="/Header_pic.png" alt="hero-left" fill className='object-contain ' style={{ borderTopLeftRadius: '30px'}} />
                </div>

                {/* Top Right Image */}
                <div className='absolute -top-3 right-3 h-32 w-32 md:w-64 md:h-64 z-10'>
                    <Image src="/Header_pic.png" alt="hero-right" fill className='object-contain' style={{ borderTopRightRadius: '30px', }} />
                </div>
                <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                <Hero />
            </div>
        </div>
        </div>
    );
};

export default HeroWrapper; 