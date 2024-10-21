import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import IconArrow from './icons/IconArrow';

const HeroSection: React.FC<{ isDarkTheme: boolean }> = ({ isDarkTheme }) => {
  const [offset, setOffset] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => {
        const newOffset = prev + direction;
        if (newOffset >= 20) {
          setDirection(-1);
          return 20;
        }
        if (newOffset <= 0) {
          setDirection(1);
          return 0;
        }
        return newOffset;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [direction]);

  return (
    <>
      <div 
        className='flex w-full h-full'
        style={{
          width: '100vw',
          height: '100vh',
          position: 'relative',
        }}
      >
        <div className='relative z-10 flex flex-col items-center justify-center space-y-6 py-5 w-full h-full'>
          {/* Background images with animations */}
          <div
            className="absolute left-10"
            style={{
              backgroundImage: 'url(/images/cube-in-left-large.png)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              width: '40vw',
              height: '40vh',
              top: `calc(10% + ${offset}px)`,
              left: '10%',
              animation: 'rotate 5s linear infinite',
            }}
          />
          
          <style jsx>{`
            @keyframes rotate {
              0% {
                transform: rotate(10deg);
              }
              100% {
                transform: rotate(-50deg);
              }
            }

            /* Animation for mobile */
            @keyframes mobileMove {
              0% {
                transform: translate(0, 0);
              }
              50% {
                transform: translate(20px, -20px);
              }
              100% {
                transform: translate(0, 0);
              }
            }

            /* Animation for desktop */
            @keyframes moveDiagonally {
              0% {
                transform: translate(0, 0);
              }
              50% {
                transform: translate(50px, -50px);
              }
              100% {
                transform: translate(0, 0);
              }
            }

            @media (max-width: 768px) {
              .hide-on-mobile {
                display: none;
              }

              .mobile-cube {
                animation: mobileMove 3s ease-in-out infinite;
              }
            }

            @keyframes rotate-border {
              0% {
                border-color: blue;
              }
              50% {
                border-color: purple;
              }
              100% {
                border-color: blue;
              }
            }

            .rotate-border {
              animation: rotate-border 2s linear infinite;
            }

          `}</style>

          {/* Additional cubes for desktop */}
          <div
            className='absolute hide-on-mobile'
            style={{
              backgroundImage: 'url(/images/cube-in-right-medium.png)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              width: '20vw',
              height: '40vh',
              top: `calc(30% + ${offset}px)`,
              left: '60%',
              animation: 'moveDiagonally 3s ease-in-out infinite',
            }}
          />

          {/* Additional cubes for mobile */}
          <div
            className='absolute mobile-cube'
            style={{
              backgroundImage: 'url(/images/cube-in-right-small.png)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              width: '25vw',
              height: '25vh',
              top: `calc(10% + ${offset}px)`,
              left: '67%',
            }}
          />

          {/* Logo Image */}
          {isDarkTheme ? (
            <Image 
              alt='dark_mode'
              src='/images/logos/f4d-black.gif'
              height={450}
              width={450}
            />
          ) : (
            <Image 
              alt='dark_mode'
              src='/images/logos/f4d-white.gif'
              height={600}
              width={600}
            />
          )}

          {/* Hero Section Text */}
          <div className='flex flex-col space-y-4 items-center text-3xl'>
            <div className='flex flex-row w-full'>
              <div className='flex justify-start'></div>
              <div className='flex flex-col items-center w-full ml-8'>
                <p><strong>Solutions</strong> de développement</p> 
                <p><strong>rapides </strong>et <strong>flexibles</strong> avec</p>
              </div>
            </div>

            {/* Button and Logos */}
            <div className='flex space-x-4'>
              <button className='relative flex justify-center items-center gap-4 mt-8 px-16  md:px-20 py-3 md:py-6 border border-[#4960FF] rounded-md rotate-border z-[110]'>
                <div className='flex items-center'>
                  {isDarkTheme ? (
                    <>
                      <Image 
                        alt='Strapi logo'
                        src='/images/Strapi-logo-white.png'
                        height={100}
                        width={100}
                      />
                      &nbsp;<span style={{ color: 'white' }}>&</span>&nbsp;
                      <Image 
                        alt='Next.js logo'
                        src='/images/Next-JS-logo-white.png'
                        height={100}
                        width={100}
                      />
                    </>
                  ) : (
                    <>
                      <Image 
                        alt='Strapi logo'
                        src='/images/Strapi-logo-black.png'
                        height={100}
                        width={100}
                      />
                      &nbsp;<span style={{ color: 'black' }}>&</span>&nbsp;
                      <Image 
                        alt='Next.js logo'
                        src='/images/Next-JS-logo-black.png'
                        height={100}
                        width={100}
                      />
                    </>
                  )}
                </div>
              </button>
            </div>
          </div>

          <p className='text-center'>
            Nous créons des applications web sur mesure, rapides et évolutives grâce à Strapi pour une gestion de contenu flexible et Next.js pour des performances optimales et un SEO renforcé.
          </p>

          {/* Demo Request Button */}
          <button 
            className={`flex items-center pl-2 text-sm tracking-wide transition-colors duration-200 bg-blue-800 border border-blue-800 rounded-full shrink-0 sm:w-auto ${isDarkTheme ? "text-white" : "text-black"}`}
          >
            Demander une démo
            <div className='bg-white rounded-full ml-2 transform -rotate-45'>
              <IconArrow />
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
