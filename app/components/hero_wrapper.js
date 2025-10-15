'use client';
import React, { useState } from 'react';
import Header from './header';
import Hero from './hero';
import Image from 'next/image';

const HeroWrapper = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div>
            {/* <div>
                <Image src={} width={} height={} alt=''/>
            </div> */}
            <div className="relative pt-14 mb-8 rounded-2xl overflow-hidden ">
            {/* Shine Border Effect */}
            {!isMenuOpen && <div className="shine-border absolute inset-0 rounded-2xl pointer-events-none z-[100] m-4 mb-0 mt-10"></div>}
            
            {/* Content */}
            <div className="relative z-30 flex flex-col">
                {/* Top Left Image */}
                <div className='absolute -top-3 left-2 h-32 w-32 md:w-64 md:h-64 z-10'>
                    <Image src="/hero1.png" alt="hero-left" fill className='object-contain ' style={{ borderTopLeftRadius: '30px', mixBlendMode: 'color-dodge' }} />
                </div>

                {/* Top Right Image */}
                <div className='absolute -top-3 right-3 h-32 w-32 md:w-64 md:h-64 z-10'>
                    <Image src="/hero2.png" alt="hero-right" fill className='object-contain' style={{ borderTopRightRadius: '30px', }} />
                </div>
                <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                <Hero />
            </div>
        </div>
        </div>
    );
};

export default HeroWrapper; 