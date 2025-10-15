'use client';
import Header from './header';
// import ContactHero from '../../../components/contact/hero';
import React, { useState } from 'react';
import Image from 'next/image';
import ContactHero from './contact/hero';

const HeroWrapper2 = ({ ...props }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className="relative pt-4 mb-8 rounded-2xl overflow-hidden bg-gradient-to-br from-[#06101A] via-[#06101A] to-[#06101A]">
            {/* Shine Border Effect */}
            <div className="shine-border absolute inset-0 rounded-2xl pointer-events-none z-50 m-4 mb-0 mt-10"></div>



            {/* Content */}
            <div className="relative z-30 flex flex-col mt-10">
                {/* Top Left Image */}
                <div className='absolute -top-3 left-2 w-32 h-32 md:w-64 md:h-64 z-10'>
                    <Image src="/hero1.png" alt="hero-left" fill className='object-contain' style={{ borderTopLeftRadius: '30px', }} />
                </div>

                {/* Top Right Image */}
                <div className='absolute -top-3 right-3 w-32 h-32 md:w-64 md:h-64 z-10'>
                    <Image src="/hero2.png" alt="hero-right" fill className='object-contain' style={{ borderTopRightRadius: '30px', }} />
                </div>
                <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                <ContactHero
                    {...props}
                />
            </div>
        </div>
    );
};

export default HeroWrapper2;